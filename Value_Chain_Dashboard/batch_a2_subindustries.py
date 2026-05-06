"""
Generate value chain TypeScript files for every A2 sub-industry in classification.ts,
then rewrite vce-app/src/data/valueChains/index.ts from all chain files.
Requires: PERPLEXITY_API_KEY, requests.
"""
from __future__ import annotations

import re
import sys
import time
from pathlib import Path

script_dir = Path(__file__).resolve().parent
sys.path.insert(0, str(script_dir))

from generate_industry import OUTPUT_DIR, run  # noqa: E402

# A2 — Mind (Soul): only entries under industry.subIndustries (leaf IM codes).
A2_SUBINDUSTRIES: list[tuple[str, str]] = [
    ("A2-1010", "Newspapers"),
    ("A2-1020", "Periodicals"),
    ("A2-1030", "Books"),
    ("A2-2010", "Internet Contents, Information & Delivery Services"),
    ("A2-2020", "E-Commerce & Television Shopping"),
    ("A2-3010", "Radio"),
    ("A2-3020", "Television"),
    ("A2-3030", "CATV Systems"),
    ("A2-5010", "Cruises & Fun"),
    ("A2-5020", "Movie Production & Cinemas"),
    ("A2-5030", "Music Publishing"),
    ("A2-5040", "Music CD & Video Stores"),
    ("A2-5050", "Theme Parks / Live Events"),
    ("A2-6010", "Toys & Games"),
    ("A2-6020", "Toys & Hobby Stores"),
    ("A2-7010", "Sporting Goods"),
    ("A2-7020", "Sporting Goods Stores"),
    ("A2-7030", "Sporting Activities"),
    ("A2-7040", "Gaming Activities"),
    ("A2-7050", "Casinos"),
]


def rebuild_value_chain_index() -> None:
    root = Path(OUTPUT_DIR)
    imports: list[str] = ['import type { ValueChain } from "../../types/valueChain";']
    pairs: list[tuple[str, str]] = []

    for f in sorted(root.glob("*.ts")):
        if f.name == "index.ts":
            continue
        text = f.read_text(encoding="utf-8")
        mvar = re.search(r"export const (\w+)\s*:\s*ValueChain", text)
        if not mvar:
            continue
        var = mvar.group(1)
        mcode = re.search(r"\bcode:\s*\"([^\"]+)\"", text)
        if not mcode:
            continue
        im = mcode.group(1)
        stem = f.stem
        imports.append(f'import {{ {var} }} from "./{stem}";')
        pairs.append((im, var))

    pairs.sort(key=lambda x: x[0])

    body = "\n".join(
        [
            "",
            "export const valueChainRegistry: Record<string, ValueChain> = {",
            *[f'  "{im}": {var},' for im, var in pairs],
            "};",
            "",
            "/**",
            " * Returns the ValueChain for the given IM code, or undefined if not yet loaded.",
            " */",
            "export function getValueChain(imCode: string): ValueChain | undefined {",
            "  return valueChainRegistry[imCode];",
            "}",
            "",
            "/**",
            " * All IM codes that currently have data available.",
            " */",
            "export const availableImCodes: string[] = Object.keys(valueChainRegistry);",
            "",
        ]
    )
    (root / "index.ts").write_text("\n".join(imports) + body, encoding="utf-8")
    print(f"  [INDEX] Wrote {root / 'index.ts'} ({len(pairs)} chains)")


def main() -> None:
    import argparse

    parser = argparse.ArgumentParser(description="Batch-generate A2 sub-industry value chains")
    parser.add_argument(
        "--index-only",
        action="store_true",
        help="Only rewrite valueChains/index.ts from existing .ts files (no API calls).",
    )
    parser.add_argument(
        "--skip-existing",
        action="store_true",
        help="Skip API call when the output .ts file already exists (for resuming a batch).",
    )
    args = parser.parse_args()

    if args.index_only:
        rebuild_value_chain_index()
        return

    delay_s = 3
    total = len(A2_SUBINDUSTRIES)
    failed: list[tuple[str, str, str]] = []
    root = Path(OUTPUT_DIR)

    for i, (code, name) in enumerate(A2_SUBINDUSTRIES, start=1):
        print(f"\n>>> [{i}/{total}] {code} — {name}")
        slug = code.lower().replace("-", "_")
        export = slug + "Data"
        out_file = root / f"{slug}.ts"
        if args.skip_existing and out_file.is_file() and out_file.stat().st_size > 200:
            print(f"  [SKIP] {out_file.name} already exists — refreshing index only")
            rebuild_value_chain_index()
            if i < total:
                time.sleep(1)
            continue
        try:
            run(name, code, export, file_basename=slug)
            rebuild_value_chain_index()
            print(f"  [FRONTEND] index.ts updated ({code} registered)")
        except Exception as e:
            err = f"{type(e).__name__}: {e}"
            print(f"  [FAIL] {code} — {err}")
            failed.append((code, name, err))
            rebuild_value_chain_index()
        if i < total:
            time.sleep(delay_s)

    if failed:
        print("\n" + "=" * 60)
        print(f"Completed with {len(failed)} failure(s). Re-run to retry (use --skip-existing to skip OK files):")
        for code, name, err in failed:
            print(f"  {code} — {name}: {err}")
    else:
        print("\n[OK] All A2 sub-industries generated.")


if __name__ == "__main__":
    main()
