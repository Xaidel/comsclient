export declare function getProgram(url: string, token: string, code?: string): Promise<Record<string, unknown>>;
export declare function postProgram(url: string, token: string, programCode: string, programDesc: string, deptID?: number): Promise<Record<string, unknown>>;
export declare function deleteProgram(url: string, token: string, programCode: string): Promise<Record<string, unknown>>;
