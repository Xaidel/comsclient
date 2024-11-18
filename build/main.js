import { login, logout, validate } from "./api/Auth.js";
import { getCourse, postCourse } from "./api/Course.js";
import { getCurriculum, postCurriculum } from "./api/Curriculum.js";
import { getDepartment, postDepartment } from "./api/Department.js";
import { getFaculty, getNonProgramHeadFaculties, postFaculty, } from "./api/Faculty.js";
import { getProgramhead, postProgramHead } from "./api/ProgramHead.js";
export default class APIClient {
    BASE_URL;
    constructor(url) {
        this.BASE_URL = url;
    }
    /**
     * sends a login request to the CSPROBE server
     * @param login credentials
     * @returns user credentials
     */
    async login(credentials) {
        const res = await login(this.BASE_URL, credentials);
        return res;
    }
    /**
     * validate if the user is a valid user
     * @returns validation message
     * */
    async validate() {
        const res = await validate(this.BASE_URL);
        return res;
    }
    /**
     * sends a logout request to the CSPROBE server and clears out all the user's session
     * @param token
     * @returns
     */
    async logout(token) {
        const res = await logout(this.BASE_URL, token);
        return res;
    }
    Department() {
        return {
            /** Sends a POST request to the server
             * @param Department
             * @returns status 201
             * */
            create: async (department) => {
                const res = await postDepartment(this.BASE_URL, department);
                return res;
            },
            /**
             * Sends a GET request to the server
             * @param Department_ID
             * @returns status 200
             * */
            read: async (id) => {
                const res = await getDepartment(this.BASE_URL, id);
                return res;
            },
        };
    }
    ProgramHead() {
        return {
            /**
             *
             * @param programHead
             * @returns
             */
            create: async (programHead) => {
                const res = await postProgramHead(this.BASE_URL, programHead);
                return res;
            },
            /**
             *
             * @param id
             * @returns
             */
            read: async (id) => {
                const res = await getProgramhead(this.BASE_URL, id);
                return res;
            },
        };
    }
    Faculty() {
        return {
            /**
             *
             * @param faculty
             * @returns
             */
            create: async (faculty) => {
                const res = await postFaculty(this.BASE_URL, faculty);
                return res;
            },
            /**
             *
             * @param dept_id
             * @returns
             */
            read: async (dept_id) => {
                const res = await getFaculty(this.BASE_URL, dept_id);
                return res;
            },
            /**
             * Return a faculty or a list of faculty who are not Program Head
             * @param id
             * @returns
             */
            readNonPH: async (id) => {
                const res = await getNonProgramHeadFaculties(this.BASE_URL, id);
                return res;
            },
        };
    }
    Curriculum() {
        return {
            create: async (curr) => {
                const res = await postCurriculum(this.BASE_URL, curr);
                return res;
            },
            read: async (currID) => {
                const res = await getCurriculum(this.BASE_URL, currID);
                return res;
            },
        };
    }
    Course() {
        return {
            create: async (course) => {
                const res = await postCourse(this.BASE_URL, course);
                return res;
            },
            read: async (courseID) => {
                const res = await getCourse(this.BASE_URL, courseID);
                return res;
            },
        };
    }
}
