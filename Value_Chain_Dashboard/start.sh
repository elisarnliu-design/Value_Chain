#!/usr/bin/env bash
# -------------------------------------------------------
# start.sh — 启动 Value Chain Explorer 开发环境
# 用法: bash start.sh
# -------------------------------------------------------

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VCE_APP_DIR="$SCRIPT_DIR/vce-app"

echo "================================================"
echo "  Value Chain Explorer — 开发服务器启动中..."
echo "================================================"

# 检查 Node.js 是否安装
if ! command -v node &>/dev/null; then
  echo "[错误] 未找到 Node.js，请先安装：https://nodejs.org/"
  exit 1
fi

# 检查依赖是否已安装
if [ ! -d "$VCE_APP_DIR/node_modules" ]; then
  echo "[提示] 首次运行，正在安装依赖..."
  cd "$VCE_APP_DIR"
  npm install
fi

# 启动 Vite 开发服务器（含热重载）
echo ""
echo "[启动] Vite 开发服务器 → http://localhost:3000"
echo "[提示] 修改 src/ 下任意文件后，浏览器将自动热更新"
echo "[提示] 按 Ctrl+C 停止服务器"
echo ""

cd "$VCE_APP_DIR"
npm run dev
