import { Curriculum } from "../types/interface";

export async function getCurriculum(
  url: string,
  currID?: string,
): Promise<Record<string, unknown>> {
  const realUrl =
    currID === undefined
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
  return res.json() as Promise<Record<string, unknown>>;
}

export async function getCurriculumByProgram(
  url: string,
  programID: number,
): Promise<Record<string, unknown>> {
  const res = await fetch(`${url}/curriculums/programs/${programID}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<Record<string, unknown>>;
}

export async function postCurriculum(
  url: string,
  curr: Curriculum,
): Promise<Record<string, unknown>> {
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
  return res.json() as Promise<Record<string, unknown>>;
}

export async function deleteCurriculums(
  url: string,
  id: number,
): Promise<Record<string, unknown>> {
  const res = await fetch(`${url}/curriculums/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });
  if (res.status === 204) {
    return JSON.stringify({
      message: "Curriculums successfully deleted",
    }) as unknown as Promise<Record<string, unknown>>;
  }

  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<Record<string, unknown>>;
}
