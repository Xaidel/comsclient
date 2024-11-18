export async function getProgram(url, departmentID) {
    const realUrl = departmentID == 0 ? `${url}/programs` : `${url}/programs/departmentID`;
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
