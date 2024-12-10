import { Course } from "../types/interface";

export async function getCourse(
  url: string,
  courseID?: number,
): Promise<Record<string, unknown>> {
  const realUrl =
    courseID === undefined ? `${url}/courses` : `${url}/courses/${courseID}`;
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

export async function postCourse(
  url: string,
  course: Course,
): Promise<Record<string, unknown>> {
  const res = await fetch(`${url}/courses`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      course_number: course.course_no,
      curr_id: course.curr_id,
      course_name: course.course_name,
      lec_unit: course.lec_unit,
      lab_unit: course.lab_unit,
      sem: course.sem,
      year_level: course.year_level,
    }),
  });
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<Record<string, unknown>>;
}

export async function batchProcessCourse(url: string, file: File): Promise<Record<string, unknown>> {
  const res = await fetch(`${url}/courses`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    body: file
  })
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`)
  }
  return res.json() as Promise<Record<string, unknown>>
}

export async function deleteCourse(
  url: string,
  id: number,
): Promise<Record<string, unknown>> {
  const res = await fetch(`${url}/courses/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });
  if (res.status === 204) {
    return JSON.stringify({
      message: "Course successfully deleted",
    }) as unknown as Promise<Record<string, unknown>>;
  }

  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<Record<string, unknown>>;
}
