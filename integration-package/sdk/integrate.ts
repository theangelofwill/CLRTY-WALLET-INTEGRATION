/** 10-line CLRTY wallet integration — balance + native routing */
import { CLRTYWallet } from '../../wallet-integration/src/clrty-wallet.js';

const api = process.env.CLRTY_API_BASE ?? 'http://127.0.0.1:8545';
const clrty = CLRTYWallet.connect({ api });
const wallet = '0x' + '00'.repeat(32);

const balance = await clrty.getBalance(wallet);
const route = await clrty.suggestBridgePath({ wallet, amount: 1_000_000_000n });
const signed = await clrty.signTransaction({ wallet, payload: route });
await clrty.promptWatchAsset();
export { balance, route, signed };
