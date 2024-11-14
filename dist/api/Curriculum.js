export async function getCurriculum(url, token) {
    const res = await fetch(`${url}/curriculums`, {
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
export async function postCurriculum(url, token, code, rev_num, effectivity, cmo_ref) {
    const res = await fetch(`${url}/curriculums`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            code: code,
            rev_num: rev_num,
            effectivity: effectivity,
            cmo_ref: cmo_ref
        }),
    });
    if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
    }
    return res.json();
}
