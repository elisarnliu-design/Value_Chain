"""
Generate value chain files for each A2 *industry* row (IM codes A2-10 … A2-90),
e.g. Print Media & Publishing, Digital & E-Commerce — not the leaf sub-industries.

Same UX as batch_a2_subindustries.py: refresh index.ts after each success / failure.
"""
from __future__ import annotations

import argparse
import sys
import time
from pathlib import Path

script_dir = Path(__file__).resolve().parent
sys.path.insert(0, str(script_dir))

from batch_a2_subindustries import rebuild_value_chain_index  # noqa: E402
from generate_industry import OUTPUT_DIR, run  # noqa: E402

# A2 — Mind (Soul): industry-level IM codes (parent rows in classification.ts)
A2_INDUSTRIES: list[tuple[str, str]] = [
    ("A2-10", "Print Media & Publishing"),
    ("A2-20", "Digital & E-Commerce"),
    ("A2-30", "Broadcast Media"),
    ("A2-40", "Advertising Agencies"),
    ("A2-50", "Leisure & Entertainment"),
    ("A2-60", "Toys & Games"),
    ("A2-70", "Sporting Goods & Activities"),
    ("A2-80", "Education & Training Services"),
    ("A2-90", "Interactive Media & Online Gaming"),
]


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Batch-generate A2 industry-group value chains (A2-10 … A2-90)"
    )
    parser.add_argument(
        "--index-only",
        action="store_true",
        help="Only rewrite valueChains/index.ts from existing .ts files (no API calls).",
    )
    parser.add_argument(
        "--skip-existing",
        action="store_true",
        help="Skip API call when the output .ts file already exists (resume).",
    )
    args = parser.parse_args()

    if args.index_only:
        rebuild_value_chain_index()
        return

    delay_s = 3
    total = len(A2_INDUSTRIES)
    failed: list[tuple[str, str, str]] = []
    root = Path(OUTPUT_DIR)

    for i, (code, name) in enumerate(A2_INDUSTRIES, start=1):
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
            prompt_label = f"{name} industry (IM {code}; sector A2 — Mind)"
            run(prompt_label, code, export, file_basename=slug)
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
        print(
            f"Completed with {len(failed)} failure(s). Re-run with --skip-existing to retry:"
        )
        for code, name, err in failed:
            print(f"  {code} — {name}: {err}")
    else:
        print("\n[OK] All A2 industry-group chains generated.")


if __name__ == "__main__":
    main()
