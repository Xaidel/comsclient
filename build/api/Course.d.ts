import { Course } from "../types/interface";
export declare function getCourse(url: string, courseID?: number): Promise<Record<string, unknown>>;
export declare function postCourse(url: string, course: Course): Promise<Record<string, unknown>>;
export declare function deleteCourse(url: string, id: number): Promise<Record<string, unknown>>;
