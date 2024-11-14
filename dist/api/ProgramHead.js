export async function getProgramhead(url, phID) {
    const realUrl = phID === undefined ? `${url}/program-heads` : `${url}/program-heads/${phID}`;
    const res = await fetch(realUrl, {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    });
    if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
    }
    return res.json();
}
export async function postProgramHead(url, program_head) {
    const res = await fetch(`${url}/program-heads`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            userID: program_head.userID,
            program_id: program_head.programID
        }),
    });
    if (!res.ok) {
        throw new Error(`{${res.status} ${res.statusText}`);
    }
    return res.json();
}
export async function deleteProgramHead(url, id) {
    const res = await fetch(`${url}/program-heads/${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json"
        }
    });
    if (res.status === 204) {
        return JSON.stringify({
            message: "Program Head successfully deleted"
        });
    }
    return res.json();
}
