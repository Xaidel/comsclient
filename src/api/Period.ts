export async function getPeriod(url: string, periodID?: number): Promise<Record<string, unknown>> {
  const realURL = periodID === undefined ? `${url}/periods` : `${url}/periods/${periodID}`
  const res = await fetch(realURL, {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  })
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<Record<string, unknown>>;
}

export async function getCurrentPeriod(url: string): Promise<Record<string, unknown>> {
  const res = await fetch(`${url}/periods/current`, {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  })
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`)
  }
  return res.json() as Promise<Record<string, unknown>>
}
