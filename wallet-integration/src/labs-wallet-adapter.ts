/**
 * LabsWalletAdapter — connect + simulate-before-sign for dev.clrty.io/labs funnel.
 */
import { CLRTYWallet, type CLRTYWalletOptions } from './clrty-wallet.js';
import { fetchWalkthrough, simulateBeforeSign } from './labs-client.js';

export type LabsWalletAdapterOptions = CLRTYWalletOptions & {
  rpc?: string;
  labsApi?: string;
};

export class LabsWalletAdapter {
  private readonly wallet: CLRTYWallet;
  private readonly rpc: string;
  address: string | null = null;

  private constructor(opts: LabsWalletAdapterOptions) {
    this.wallet = CLRTYWallet.connect({ api: opts.api, rpc: opts.rpc });
    this.rpc = opts.rpc ?? 'https://rpc.clarity-fintech.com';
  }

  static create(opts: LabsWalletAdapterOptions = {}): LabsWalletAdapter {
    return new LabsWalletAdapter(opts);
  }

  async connectStub(): Promise<string> {
    this.address = `labs-${crypto.randomUUID().slice(0, 8)}`;
    return this.address;
  }

  async loadWalkthrough() {
    return fetchWalkthrough();
  }

  async previewTransaction(payload: Record<string, unknown>) {
    const tx = { ...payload, from: this.address ?? payload.from };
    return simulateBeforeSign(this.rpc, tx);
  }

  async signAfterPreview(payload: Record<string, unknown>) {
    if (!this.address) throw new Error('wallet not connected');
    return this.wallet.signTransaction({ wallet: this.address, payload });
  }
}
