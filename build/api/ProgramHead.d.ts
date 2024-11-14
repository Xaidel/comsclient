import { ProgramHead } from "../types/interface";
export declare function getProgramhead(url: string, phID?: number): Promise<Record<string, unknown>>;
export declare function postProgramHead(url: string, program_head: ProgramHead): Promise<Record<string, unknown>>;
export declare function deleteProgramHead(url: string, id: number): Promise<Record<string, unknown>>;
