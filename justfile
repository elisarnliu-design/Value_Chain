# Delegates to Value_Chain_Dashboard (run `just start` from repo root or from that folder).

set shell := ["powershell", "-NoProfile", "-Command"]

default:
    just --list

start:
    just -f Value_Chain_Dashboard/justfile -d Value_Chain_Dashboard start
