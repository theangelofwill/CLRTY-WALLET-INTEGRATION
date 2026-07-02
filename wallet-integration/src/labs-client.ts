/**
 * Labs REST client — CLRTY-1 mainnet (api.clrty.dev).
 */
const LABS_API = typeof process !== 'undefined' && process.env?.CLRTY_LABS_API
  ? process.env.CLRTY_LABS_API
  : 'https://api.clrty.dev';

export type LabsWalkthrough = {
  chain_id: string;
  numeric_chain_id: number;
  steps: Array<{ id: number; label: string; section: string }>;
};

export async function fetchWalkthrough(): Promise<LabsWalkthrough> {
  const res = await fetch(`${LABS_API}/v1/labs/walkthrough`);
  if (!res.ok) throw new Error(`labs walkthrough: ${res.status}`);
  return res.json() as Promise<LabsWalkthrough>;
}

export async function fetchLabsStatus(): Promise<Record<string, unknown>> {
  const res = await fetch(`${LABS_API}/v1/labs/status`);
  if (!res.ok) throw new Error(`labs status: ${res.status}`);
  return res.json() as Promise<Record<string, unknown>>;
}

export async function simulateBeforeSign(
  rpcUrl: string,
  tx: Record<string, unknown>,
): Promise<unknown> {
  const res = await fetch(rpcUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'simulateTransaction', params: [tx] }),
  });
  const body = (await res.json()) as { result?: unknown; error?: { message: string } };
  if (body.error) throw new Error(body.error.message);
  return body.result;
}
