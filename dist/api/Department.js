export async function getDepartment(url, departmentID) {
    const realUrl = departmentID === undefined
        ? `${url}/departments`
        : `${url}/departments/${departmentID}`;
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
export async function postDepartment(url, department) {
    const res = await fetch(`${url}/departments`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "content-type": "application/json",
        },
        body: JSON.stringify({
            department_code: department.code,
            department_name: department.name,
        }),
    });
    if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
    }
    return res.json();
}
export async function deleteDepartment(url, id) {
    const res = await fetch(`${url}/departments/${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
        },
    });
    if (res.status === 204) {
        return JSON.stringify({
            message: "Department successfully deleted",
        });
    }
    if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
    }
    return res.json();
}
