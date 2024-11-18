import { Curriculum } from "../types/interface";
export declare function getCurriculum(url: string, currID?: number): Promise<Record<string, unknown>>;
export declare function postCurriculum(url: string, curr: Curriculum): Promise<Record<string, unknown>>;
export declare function deleteCurriculums(url: string, id: number): Promise<Record<string, unknown>>;
