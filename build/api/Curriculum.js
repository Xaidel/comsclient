export async function getCurriculum(url, currID) {
    const realUrl = currID === undefined
        ? `${url}/curriculums`
        : `${url}/curriculums/${currID}`;
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
export async function getCurriculumByProgram(url, programID) {
    const res = await fetch(`${url}/curriculums/programs/${programID}`, {
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
export async function postCurriculum(url, curr) {
    const res = await fetch(`${url}/curriculums`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "content-type": "application/json",
        },
        body: JSON.stringify({
            effectivity_sy: curr.effectivity_sy,
            cmo_name: curr.cmo_name,
            curr_id: curr.curr_id,
            effectivity_sem: curr.effectivity_sem,
            is_active: curr.isActive,
            revision_no: curr.revision_number,
            program_id: curr.programID,
        }),
    });
    if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
    }
    return res.json();
}
export async function deleteCurriculums(url, id) {
    const res = await fetch(`${url}/curriculums/${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
        },
    });
    if (res.status === 204) {
        return JSON.stringify({
            message: "Curriculums successfully deleted",
        });
    }
    if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
    }
    return res.json();
}
