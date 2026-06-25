export { CLRTYWallet } from './clrty-wallet.js';
export type { CLRTYWalletOptions } from './clrty-wallet.js';

export const MODULE = 'wallet-integration';

export function info(): { module: string; version: string } {
  return { module: MODULE, version: '0.1.0' };
}
