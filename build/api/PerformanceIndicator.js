export async function getPerformanceIndicator(url, token, poID) {
    const piURL = poID === undefined ? `${url}/performance-indicator/` : `${url}/performance-indicator/${poID}`;
    const res = await fetch(piURL, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
    }
    return res.json();
}
export async function postPerformanceIndicator(url, token, piDesc, poID, courseID, tool, level) {
    const res = await fetch(`${url}/performance-indicator`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`,
            "content-type": 'application/json'
        },
        body: JSON.stringify({
            pi_desc: piDesc,
            po_id: poID,
            course_id: courseID,
            tool: tool,
            level: level
        }),
    });
    if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
    }
    return res.json();
}
