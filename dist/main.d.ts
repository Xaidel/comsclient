import { Course, Credentials, Curriculum, Department, Faculty, ProgramHead } from "./types/interface.js";
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
    ProgramHead(): {
        /**
         *
         * @param programHead
         * @returns
         */
        create: (programHead: ProgramHead) => Promise<Record<string, unknown>>;
        /**
         *
         * @param id
         * @returns
         */
        read: (id?: number) => Promise<Record<string, unknown>>;
    };
    Faculty(): {
        /**
         *
         * @param faculty
         * @returns
         */
        create: (faculty: Faculty) => Promise<Record<string, unknown>>;
        /**
         *
         * @param dept_id
         * @returns
         */
        read: (id: number) => Promise<Record<string, unknown>>;
        readFacultyByDept: (dept_ID: number) => Promise<Record<string, unknown>>;
        /**
         * Return a faculty or a list of faculty who are not Program Head
         * @param id
         * @returns
         */
        readNonPH: (id?: number) => Promise<Record<string, unknown>>;
    };
    Curriculum(): {
        create: (curr: Curriculum) => Promise<Record<string, unknown>>;
        read: (currID?: string) => Promise<Record<string, unknown>>;
        readByProgram: (programID: number) => Promise<Record<string, unknown>>;
    };
    Course(): {
        create: (course: Course) => Promise<Record<string, unknown>>;
        read: (courseID?: number) => Promise<Record<string, unknown>>;
    };
}
