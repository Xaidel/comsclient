export declare function getCurriculum(url: string, token: string): Promise<Record<string, unknown>>;
export declare function postCurriculum(url: string, token: string, code: string, rev_num: number, effectivity: string, cmo_ref: string): Promise<Record<string, unknown>>;
