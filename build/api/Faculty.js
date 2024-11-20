export async function getFaculty(url, id) {
    const realUrl = id === undefined ? `${url}/faculties` : `${url}/faculties/${id}`;
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
export async function getFacultyFromDepartment(url, deptID) {
    const res = await fetch(`${url}/faculties/departments/${deptID}`, {
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
export async function getNonProgramHeadFaculties(url, id) {
    const realUrl = id === undefined
        ? `${url}/faculties/not-program-head`
        : `${url}/faculties/not-program-head/${id}`;
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
export async function postFaculty(url, faculty) {
    const res = await fetch(`${url}/faculties`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            userID: faculty.userID,
            dept_id: faculty.deptID,
        }),
    });
    if (!res.ok) {
        throw new Error(`{${res.status} ${res.statusText}`);
    }
    return res.json();
}
export async function deleteFaculty(url, id) {
    const res = await fetch(`${url}/faculties/${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
        },
    });
    if (res.status === 204) {
        return JSON.stringify({
            message: "Faculty successfully deleted",
        });
    }
    return res.json();
}
