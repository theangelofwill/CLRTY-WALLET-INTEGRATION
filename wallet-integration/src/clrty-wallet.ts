/** CLRTYWallet — turnkey partner SDK for balance, routing, signing, EIP-747 */

export type CLRTYWalletOptions = { api?: string; rpc?: string };

export class CLRTYWallet {
  private readonly api: string;
  private readonly rpc: string;

  private constructor(opts: CLRTYWalletOptions) {
    this.api = opts.api ?? 'http://127.0.0.1:8545';
    this.rpc = opts.rpc ?? 'http://127.0.0.1:8899';
  }

  static connect(opts: CLRTYWalletOptions = {}): CLRTYWallet {
    return new CLRTYWallet(opts);
  }

  async getBalance(address: string): Promise<{ address: string; balance: string; decimals: number }> {
    const res = await fetch(this.rpc, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'clrty_getBalance', params: [address] }),
    });
    const body = (await res.json()) as { result?: string };
    return { address, balance: body.result ?? '0', decimals: 9 };
  }

  async suggestBridgePath(opts: { wallet: string; amount?: bigint }): Promise<Record<string, unknown>> {
    const q = new URLSearchParams({ wallet: opts.wallet, amount: String(opts.amount ?? 0n) });
    const res = await fetch(`${this.api}/v1/wallet/bridge/suggest?${q}`);
    return (await res.json()) as Record<string, unknown>;
  }

  async signTransaction(opts: { wallet: string; payload: unknown }): Promise<Record<string, unknown>> {
    const res = await fetch(`${this.api}/v1/wallet/sign`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ wallet: opts.wallet, payload: opts.payload }),
    });
    return (await res.json()) as Record<string, unknown>;
  }

  async fetchRegistry(): Promise<Record<string, unknown>> {
    const res = await fetch(`${this.api}/v1/wallet/registry`);
    return (await res.json()) as Record<string, unknown>;
  }

  async promptWatchAsset(): Promise<Record<string, unknown>> {
    const registry = await this.fetchRegistry();
    const eip747 = (registry.eip747 ?? registry) as Record<string, unknown>;
    if (typeof window !== 'undefined' && (window as { ethereum?: { request: (a: unknown) => Promise<unknown> } }).ethereum) {
      await (window as { ethereum: { request: (a: unknown) => Promise<unknown> } }).ethereum.request({
        method: 'wallet_watchAsset',
        params: eip747,
      });
    }
    return eip747;
  }
}
