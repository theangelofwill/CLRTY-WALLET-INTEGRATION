/** CLRTY SDK kernel */
export async function Execute(intent: Record<string, unknown>): Promise<unknown> {
  const base = process.env.CLRTY_API_BASE ?? 'http://127.0.0.1:8545';
  const r = await fetch(`${base}/v1/helix/intents`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(intent) });
  return r.json();
}
export async function Predict(context: Record<string, unknown>): Promise<unknown> {
  const base = process.env.CLRTY_API_BASE ?? 'http://127.0.0.1:8545';
  const r = await fetch(`${base}/v1/cortexpay/predict`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(context) });
  return r.json();
}
export async function Identity(wallet: string): Promise<unknown> {
  const base = process.env.CLRTY_API_BASE ?? 'http://127.0.0.1:8545';
  const r = await fetch(`${base}/v1/onboarding/state-path/${wallet}`);
  return r.json();
}
export const CLRTY = { Execute, Predict, Identity };
