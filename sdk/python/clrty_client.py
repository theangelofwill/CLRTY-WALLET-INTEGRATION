"""clrty-sdk — minimal Python client for clrty-api."""

from __future__ import annotations

import json
from typing import Any
from urllib.request import Request, urlopen


class ClrtyClient:
    def __init__(self, base_url: str = "http://127.0.0.1:8545") -> None:
        self.base_url = base_url.rstrip("/")

    def _get(self, path: str) -> Any:
        with urlopen(f"{self.base_url}{path}") as resp:
            return json.loads(resp.read().decode())

    def _post(self, path: str, body: dict) -> Any:
        data = json.dumps(body).encode()
        req = Request(
            f"{self.base_url}{path}",
            data=data,
            headers={"Content-Type": "application/json"},
            method="POST",
        )
        with urlopen(req) as resp:
            return json.loads(resp.read().decode())

    def get_status(self) -> Any:
        return self._get("/v1/status")

    def get_sections_status(self) -> Any:
        return self._get("/v1/sections/status")

    def get_wallet_environments(self) -> Any:
        return self._get("/v1/wallet/environments")

    def rpc_call(self, method: str, params: list | None = None) -> Any:
        return self._post(
            "/rpc",
            {"jsonrpc": "2.0", "method": method, "params": params or [], "id": 1},
        )
