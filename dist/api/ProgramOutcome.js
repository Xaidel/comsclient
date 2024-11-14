export async function getProgramOutcome(url, token, code) {
    const poURL = (isNaN(+code)) ? `${url}/program-outcome-progCode/${code}` : `${url}/program-outcome/${code}`;
    const res = await fetch(`${poURL}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token},`
        },
    });
    if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
    }
    return res.json();
}
export async function postProgramOutcome(url, token, poDesc, progID, seqnum) {
    const res = await fetch(`${url}/program-outcome`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "content-type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            po_desc: poDesc,
            program_id: progID,
            seq_num: seqnum
        }),
    });
    if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
    }
    return res.json();
}
export async function deleteProgramOutcome(url, token, progID) {
    const res = await fetch(`${url}/program-outcome/${progID}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
    if (res.status === 204) {
        return JSON.stringify({
            message: "Deleted"
        });
    }
    if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
    }
    return res.json();
}
