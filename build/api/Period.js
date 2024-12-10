export async function getPeriod(url, periodID) {
    const realURL = periodID === undefined ? `${url}/periods` : `${url}/periods/${periodID}`;
    const res = await fetch(realURL, {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });
    if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
    }
    return res.json();
}
export async function getCurrentPeriod(url) {
    const res = await fetch(`${url}/periods/current`, {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });
    if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
    }
    return res.json();
}
