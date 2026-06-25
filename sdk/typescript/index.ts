/**
 * @clrty/sdk — minimal TypeScript client for clrty-api
 * Generated from sdk/openapi/clrty-api.yaml
 */
export class ClrtyClient {
  constructor(private baseUrl: string) {}

  private async request(path: string, init?: RequestInit): Promise<unknown> {
    const res = await fetch(`${this.baseUrl.replace(/\/$/, "")}${path}`, init);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  getStatus(): Promise<unknown> {
    return this.request("/v1/status");
  }

  getSectionsStatus(): Promise<unknown> {
    return this.request("/v1/sections/status");
  }

  getWalletEnvironments(): Promise<unknown> {
    return this.request("/v1/wallet/environments");
  }

  rpcCall(method: string, params: unknown[] = []): Promise<unknown> {
    return this.request("/rpc", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jsonrpc: "2.0", method, params, id: 1 }),
    });
  }
}
