import { ProgramHead } from "../types/interface";

export async function getProgramhead(url: string, phID?: number): Promise<Record<string, unknown>>{
    const realUrl = phID === undefined ? `${url}/program-heads` : `${url}/program-heads/${phID}`
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

export async function postProgramHead(url: string, program_head: ProgramHead): Promise<Record<string, unknown>>{
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
    if(!res.ok){
        throw new Error(`{${res.status} ${res.statusText}`)
    }
    return res.json() as Promise<Record<string, unknown>>
}

export async function deleteProgramHead(url: string, id: number): Promise<Record<string, unknown>>{
    const res = await fetch(`${url}/program-heads/${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json"
        }
    })
    if (res.status === 204){
        return JSON.stringify({
            message: "Program Head successfully deleted"
        }) as unknown as Promise<Record<string, unknown>>
    }

    return res.json() as Promise<Record<string, unknown>>
    
}