import { Department } from "../types/interface";
export declare function getDepartment(url: string, departmentID?: number): Promise<Record<string, unknown>>;
export declare function postDepartment(url: string, department: Department): Promise<Record<string, unknown>>;
export declare function deleteDepartment(url: string, id: number): Promise<Record<string, unknown>>;
