import { Credentials, Department } from "./types/interface.js";
export default class APIClient {
    private BASE_URL;
    constructor(url: string);
    /**
     * sends a login request to the CSPROBE server
     * @param login credentials
     * @returns user credentials
     */
    login(credentials: Credentials): Promise<Record<string, unknown>>;
    /**
     * validate if the user is a valid user
     * @returns validation message
     * */
    validate(): Promise<Record<string, string>>;
    /**
     * sends a logout request to the CSPROBE server and clears out all the user's session
     * @param token
     * @returns
     */
    logout(token: string): Promise<Record<string, unknown>>;
    Department(): {
        /** Sends a POST request to the server
         * @param Department
         * @returns status 201
         * */
        create: (department: Department) => Promise<Record<string, unknown>>;
        /**
         * Sends a GET request to the server
         * @param Department_ID
         * @returns status 200
         * */
        read: (id?: number) => Promise<Record<string, unknown>>;
    };
    ProgramOutcomes(): {
        create: (token: string, poDesc: string, progID: number, seqnum: number) => Promise<Record<string, unknown>>;
        read: (token: string, code: string) => Promise<Record<string, unknown>>;
        delete: (token: string, progID: number) => Promise<Record<string, unknown>>;
    };
    PerformanceIndicator(): {
        create: (token: string, piDesc: string, poID: number, courseID: number, tool: string, level: string) => Promise<Record<string, unknown>>;
        read: (token: string, poID?: number) => Promise<Record<string, unknown>>;
    };
    Curriculum(): {
        create: (token: string, code: string, rev_num: number, effectivity: string, cmo_ref: string) => Promise<Record<string, unknown>>;
        read: (token: string) => Promise<Record<string, unknown>>;
    };
}
