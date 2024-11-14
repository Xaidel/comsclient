import { Faculty } from "../types/interface";
export declare function getFaculty(url: string, deptID?: number): Promise<Record<string, unknown>>;
export declare function getNonProgramHeadFaculties(url: string, id?: number): Promise<Record<string, unknown>>;
export declare function postFaculty(url: string, faculty: Faculty): Promise<Record<string, unknown>>;
export declare function deleteFaculty(url: string, id: number): Promise<Record<string, unknown>>;
