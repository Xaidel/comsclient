export declare function getPerformanceIndicator(url: string, token: string, poID?: number): Promise<Record<string, unknown>>;
export declare function postPerformanceIndicator(url: string, token: string, piDesc: string, poID: number, courseID: number, tool: string, level: string): Promise<Record<string, unknown>>;
