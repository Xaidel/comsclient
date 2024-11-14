import { Faculty} from "../types/interface";

export async function getFaculty(url: string, deptID?: number): Promise<Record<string, unknown>>{
    const realUrl = deptID === undefined ? `${url}/faculties` : `${url}/faculties/${deptID}`
    const res = await fetch(realUrl, {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    });
    if (!res.ok){
        throw new Error(`${res.status} ${res.statusText}`)
    }
    return res.json() as Promise<Record<string, unknown>>
}

export async function getNonProgramHeadFaculties(url: string, id?: number): Promise<Record<string, unknown>>{
    const realUrl = id === undefined ? `${url}/faculties/not-program-head` : `${url}/faculties/not-program-head/${id}`
    const res = await fetch(realUrl, {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    });
    if (!res.ok){
        throw new Error(`${res.status} ${res.statusText}`)
    }
    return res.json() as Promise<Record<string, unknown>>
}

export async function postFaculty(url: string, faculty: Faculty): Promise<Record<string, unknown>>{
    const res = await fetch(`${url}/faculties`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            userID: faculty.userID,
            dept_id: faculty.deptID
        }),
    });
    if(!res.ok){
        throw new Error(`{${res.status} ${res.statusText}`)
    }
    return res.json() as Promise<Record<string, unknown>>
}

export async function deleteFaculty(url: string, id: number): Promise<Record<string, unknown>>{
    const res = await fetch(`${url}/faculties/${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json"
        }
    })
    if (res.status === 204){
        return JSON.stringify({
            message: "Faculty successfully deleted"
        }) as unknown as Promise<Record<string, unknown>>
    }

    return res.json() as Promise<Record<string, unknown>>
    
}