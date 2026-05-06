import requests
import json
import os
import argparse
import re
import time
from pathlib import Path
from typing import Any, Optional

script_dir = os.path.dirname(os.path.abspath(__file__))
PROMPT_FILE = os.path.join(script_dir, "prompts", "value_chain_template.txt")
OUTPUT_DIR = os.path.join(script_dir, "vce-app", "src", "data", "valueChains")


def load_local_env() -> None:
    """Load KEY=VALUE pairs from .env next to this script; never overrides existing os.environ."""
    env_path = os.path.join(script_dir, ".env")
    if not os.path.isfile(env_path):
        return
    with open(env_path, encoding="utf-8") as f:
        for raw in f:
            line = raw.strip()
            if not line or line.startswith("#"):
                continue
            if "=" not in line:
                continue
            key, _, val = line.partition("=")
            key = key.strip()
            if not key or key in os.environ:
                continue
            val = val.strip()
            if (val.startswith('"') and val.endswith('"')) or (val.startswith("'") and val.endswith("'")):
                val = val[1:-1]
            os.environ[key] = val


load_local_env()
API_KEY = os.environ.get("PERPLEXITY_API_KEY", "")

VALID_STAGE_IDS = {"upstream", "processing", "manufacturing", "distribution", "sales", "customer"}
VALID_PROBIT = {"HH", "HL", "LH", "LL"}

_DEFAULT_MAX_TOKENS = 12_000
_DEFAULT_MAX_RETRIES = 4


def _extract_json_str(response_text: str) -> str:
    """Pull a JSON object string from model output; raises ValueError if not found."""
    if response_text is None:
        raise ValueError("Model returned no content (null)")
    text = response_text.strip()
    if not text:
        raise ValueError("Model returned empty content")

    if "```json" in text:
        json_start = text.find("```json") + 7
        json_end = text.find("```", json_start)
        if json_end < json_start:
            json_end = len(text)
    elif "```" in text:
        json_start = text.find("```") + 3
        json_end = text.find("```", json_start)
        if json_end < json_start:
            json_end = len(text)
    else:
        json_start = text.find("{")
        json_end = text.rfind("}")
        if json_start < 0 or json_end < json_start:
            raise ValueError(
                f"No JSON object in model output (preview): {text[:800]!r}"
            )
        return text[json_start : json_end + 1].strip()

    fragment = text[json_start:json_end].strip()
    if not fragment.startswith("{"):
        inner = fragment.find("{")
        last = fragment.rfind("}")
        if inner >= 0 and last >= inner:
            fragment = fragment[inner : last + 1]
    return fragment


def generate_value_chain_data(industry_name: str, im_code: str) -> dict:
    """Call Perplexity API and return parsed JSON (retries on empty / bad parse)."""
    with open(PROMPT_FILE, "r", encoding="utf-8") as f:
        prompt_template = f.read()

    prompt = prompt_template.replace("{INDUSTRY_NAME}", industry_name).replace("{IM_CODE}", im_code)

    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
    }
    max_tokens = int(os.environ.get("PERPLEXITY_MAX_TOKENS", str(_DEFAULT_MAX_TOKENS)))
    max_retries = int(os.environ.get("PERPLEXITY_MAX_RETRIES", str(_DEFAULT_MAX_RETRIES)))

    last_err: Optional[BaseException] = None
    for attempt in range(1, max_retries + 1):
        content_preview = ""
        payload = {
            "model": "sonar-pro",
            "messages": [{"role": "user", "content": prompt}],
            "max_tokens": max_tokens,
        }
        print(f"  Calling Perplexity API for {industry_name} ({im_code})… (attempt {attempt}/{max_retries})")
        try:
            response = requests.post(
                "https://api.perplexity.ai/chat/completions",
                headers=headers,
                json=payload,
                timeout=180,
            )
            response.raise_for_status()
            result: dict[str, Any] = response.json()
            choices = result.get("choices") or []
            if not choices:
                raise ValueError(f"No choices in API response: {str(result)[:1200]}")

            msg = choices[0].get("message") or {}
            response_text = msg.get("content")
            content_preview = (response_text or "")[:1500]
            finish = choices[0].get("finish_reason")
            if finish == "length":
                print("  Warning: response truncated (finish_reason=length); consider raising PERPLEXITY_MAX_TOKENS")

            json_str = _extract_json_str(response_text or "")
            data = json.loads(json_str)
            return data
        except (json.JSONDecodeError, ValueError, requests.RequestException, KeyError) as e:
            last_err = e
            print(f"  Attempt {attempt} failed: {e}")
            if content_preview:
                print(f"  Content preview: {content_preview!r}")
            if attempt < max_retries:
                wait = min(60, 5 * attempt * attempt)
                print(f"  Retrying in {wait}s…")
                time.sleep(wait)

    assert last_err is not None
    raise last_err


def parse_num(v) -> float:
    """Convert string or number to float, stripping % and whitespace."""
    try:
        return float(str(v).replace("%", "").strip())
    except (ValueError, TypeError):
        return 0.0


def transform_to_value_chain(raw: dict, industry_name: str, im_code: str) -> dict:
    """Transform AI JSON response into a ValueChain-interface-compliant dict."""
    stages = []
    for stage in raw.get("stages", []):
        stage_id = stage.get("id", stage.get("stage_id", ""))
        if stage_id not in VALID_STAGE_IDS:
            print(f"  WARNING: unexpected stage id '{stage_id}', keeping as-is")

        sub_list = stage.get("subIndustries", stage.get("subindustries", []))
        sub_industries = []
        for sub in sub_list:
            niche_raw = sub.get("niche")
            niche = None
            if niche_raw and isinstance(niche_raw, dict):
                niche = {
                    "name": niche_raw.get("name", ""),
                    "ticker": niche_raw.get("ticker", ""),
                    "share": parse_num(niche_raw.get("share", 0)),
                    "cagr": parse_num(niche_raw.get("cagr", 0)),
                    "margin": str(niche_raw.get("margin", "")),
                    "strategy": niche_raw.get("strategy", ""),
                    "valuation": niche_raw.get("valuation", ""),
                }

            probit = sub.get("probit", "LL")
            if probit not in VALID_PROBIT:
                probit = "LL"

            entry = {
                "name": sub.get("name", ""),
                "cr4": parse_num(sub.get("cr4", 0)),
                "probit": probit,
                "operatingMargin": parse_num(sub.get("operatingMargin", 0)),
                "cagr": parse_num(sub.get("cagr", 0)),
                "cagrForward": parse_num(sub.get("cagrForward", sub.get("gcar", 0))),
                "classificationCodes": sub.get("classificationCodes", []),
                "leaders": [
                    {
                        "name": l.get("name", ""),
                        "ticker": l.get("ticker", ""),
                        "share": parse_num(l.get("share", 0)),
                        "strengths": l.get("strengths", []),
                    }
                    for l in sub.get("leaders", [])
                ],
                "features": [
                    {
                        "title": f.get("title", ""),
                        "description": f.get("description", f.get("desc", "")),
                    }
                    for f in sub.get("features", [])
                ],
                "opportunity": sub.get("opportunity", ""),
                "threat": sub.get("threat", ""),
            }
            if niche:
                entry["niche"] = niche

            sub_industries.append(entry)

        stages.append({
            "id": stage_id,
            "name": stage.get("name", stage.get("title", "")),
            "subIndustries": sub_industries,
        })

    return {
        "code": raw.get("code", raw.get("im_code", im_code)),
        "name": raw.get("name", raw.get("industry_name", industry_name)),
        "imCode": raw.get("imCode", raw.get("im_code", im_code)),
        "classificationCode": raw.get("classificationCode", raw.get("im_code", im_code)),
        "stages": stages,
    }


def to_ts_value(val, indent=0) -> str:
    """Convert a Python value to a TypeScript literal string."""
    pad = "  " * indent
    inner = "  " * (indent + 1)

    if val is None:
        return "null"
    if isinstance(val, bool):
        return "true" if val else "false"
    if isinstance(val, (int, float)):
        return str(val)
    if isinstance(val, str):
        escaped = val.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n").replace("\r", "")
        return f'"{escaped}"'
    if isinstance(val, list):
        if not val:
            return "[]"
        items = [f"{inner}{to_ts_value(item, indent + 1)}" for item in val]
        return "[\n" + ",\n".join(items) + f",\n{pad}]"
    if isinstance(val, dict):
        if not val:
            return "{}"
        lines = []
        for k, v in val.items():
            lines.append(f"{inner}{k}: {to_ts_value(v, indent + 1)}")
        return "{\n" + ",\n".join(lines) + f",\n{pad}}}"
    return f'"{val}"'


def save_as_value_chain_ts(chain: dict, export_name: str, output_path: str):
    """Write a .ts file exporting a ValueChain constant."""
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)

    ts_literal = to_ts_value(chain, indent=0)
    content = (
        "import type { ValueChain } from '../../types/valueChain';\n\n"
        f"export const {export_name}: ValueChain = {ts_literal};\n"
    )

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"  [SAVED] {output_path}")


def validate_chain(chain: dict, industry_name: str) -> bool:
    """Basic validation of the generated chain."""
    ok = True
    stages = chain.get("stages", [])

    if len(stages) != 6:
        print(f"  ⚠️  Expected 6 stages, got {len(stages)}")
        ok = False

    for stage in stages:
        sid = stage.get("id", "")
        if sid not in VALID_STAGE_IDS:
            print(f"  ⚠️  Invalid stage id: '{sid}'")
            ok = False
        subs = stage.get("subIndustries", [])
        if len(subs) < 3:
            print(f"  ⚠️  Stage '{sid}' has only {len(subs)} subIndustries (min 3)")
            ok = False
        for sub in subs:
            if sub.get("probit") not in VALID_PROBIT:
                print(f"  ⚠️  Sub '{sub.get('name')}' has invalid probit: {sub.get('probit')}")
                ok = False
            if not isinstance(sub.get("cr4"), (int, float)):
                print(f"  ⚠️  Sub '{sub.get('name')}' cr4 is not a number")
                ok = False
            if not isinstance(sub.get("cagr"), (int, float)):
                print(f"  ⚠️  Sub '{sub.get('name')}' cagr is not a number")
                ok = False
            if not isinstance(sub.get("operatingMargin"), (int, float)):
                print(f"  ⚠️  Sub '{sub.get('name')}' operatingMargin is not a number")
                ok = False
            if not isinstance(sub.get("cagrForward"), (int, float)):
                print(f"  ⚠️  Sub '{sub.get('name')}' cagrForward is not a number")
                ok = False
            for leader in sub.get("leaders", []):
                if not isinstance(leader.get("share"), (int, float)):
                    print(f"  ⚠️  Leader '{leader.get('name')}' share is not a number")
                    ok = False

    if ok:
        print(f"  [OK] Validation passed for {industry_name}")
    return ok


def run(
    industry_name: str,
    im_code: str,
    export_name: str,
    file_basename: Optional[str] = None,
):
    if not API_KEY.strip():
        raise SystemExit(
            "PERPLEXITY_API_KEY is not set in the environment. "
            "Set it before running industry generation."
        )
    if file_basename:
        snake = file_basename.lower().replace("-", "_")
    else:
        snake = industry_name.lower().replace(" ", "_").replace("/", "_")
    output_path = os.path.join(OUTPUT_DIR, f"{snake}.ts")

    print(f"\n{'='*60}")
    print(f"Generating: {industry_name} ({im_code})")
    print(f"{'='*60}")

    raw = generate_value_chain_data(industry_name, im_code)
    chain = transform_to_value_chain(raw, industry_name, im_code)
    validate_chain(chain, industry_name)
    save_as_value_chain_ts(chain, export_name, output_path)
    return output_path


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate Value Chain TypeScript data via Perplexity AI")
    parser.add_argument("--name", required=True, help="Industry name, e.g. 'Footwear'")
    parser.add_argument("--code", required=True, help="IM code, e.g. 'C1-1020'")
    parser.add_argument("--export", default=None, help="TS export name, e.g. 'footwearData' (auto-derived if omitted)")
    parser.add_argument(
        "--file-basename",
        default=None,
        help="Output .ts filename stem (e.g. a2_1010). Default: derived from --name",
    )
    args = parser.parse_args()

    if args.file_basename:
        file_bn = args.file_basename.lower().replace("-", "_")
        if args.export:
            export_name = args.export
        else:
            export_name = file_bn + "Data"
    else:
        file_bn = None
        export_name = args.export or (
            args.name.lower().replace(" ", "_").replace("/", "_") + "Data"
        )
        if not args.export:
            parts = export_name.split("_")
            export_name = parts[0] + "".join(p.capitalize() for p in parts[1:])

    run(args.name, args.code, export_name, file_basename=file_bn)
