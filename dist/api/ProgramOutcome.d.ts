export declare function getProgramOutcome(url: string, token: string, code: string): Promise<Record<string, unknown>>;
export declare function postProgramOutcome(url: string, token: string, poDesc: string, progID: number, seqnum: number): Promise<Record<string, unknown>>;
export declare function deleteProgramOutcome(url: string, token: string, progID: number): Promise<Record<string, unknown>>;
