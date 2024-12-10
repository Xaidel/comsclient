import { login, logout, validate } from "./api/Auth.js";
import { getCourse, postCourse } from "./api/Course.js";
import {
  getCurriculum,
  getCurriculumByProgram,
  postCurriculum,
} from "./api/Curriculum.js";
import { getDepartment, postDepartment } from "./api/Department.js";
import {
  getFaculty,
  getFacultyFromDepartment,
  getNonProgramHeadFaculties,
  postFaculty,
} from "./api/Faculty.js";
import { getCurrentPeriod, getPeriod } from "./api/Period.js";
import { getProgramhead, postProgramHead } from "./api/ProgramHead.js";
import {
  Course,
  Credentials,
  Curriculum,
  Department,
  Faculty,
  ProgramHead,
} from "./types/interface.js";

export default class APIClient {
  private BASE_URL: string;

  constructor(url: string) {
    this.BASE_URL = url;
  }

  /**
   * sends a login request to the CSPROBE server
   * @param login credentials
   * @returns user credentials
   */
  async login(credentials: Credentials) {
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
  async logout(token: string) {
    const res = await logout(this.BASE_URL, token);

    return res;
  }

  Department() {
    return {
      /** Sends a POST request to the server
       * @param Department
       * @returns status 201
       * */
      create: async (
        department: Department,
      ): Promise<Record<string, unknown>> => {
        const res = await postDepartment(this.BASE_URL, department);
        return res;
      },

      /**
       * Sends a GET request to the server
       * @param Department_ID
       * @returns status 200
       * */
      read: async (id?: number): Promise<Record<string, unknown>> => {
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
      create: async (
        programHead: ProgramHead,
      ): Promise<Record<string, unknown>> => {
        const res = await postProgramHead(this.BASE_URL, programHead);
        return res;
      },
      /**
       *
       * @param id
       * @returns
       */
      read: async (id?: number): Promise<Record<string, unknown>> => {
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
      create: async (faculty: Faculty): Promise<Record<string, unknown>> => {
        const res = await postFaculty(this.BASE_URL, faculty);
        return res;
      },
      /**
       *
       * @param dept_id
       * @returns
       */
      read: async (id: number): Promise<Record<string, unknown>> => {
        const res = await getFaculty(this.BASE_URL, id);
        return res;
      },
      readFacultyByDept: async (
        dept_ID: number,
      ): Promise<Record<string, unknown>> => {
        const res = await getFacultyFromDepartment(this.BASE_URL, dept_ID);
        return res;
      },
      /**
       * Return a faculty or a list of faculty who are not Program Head
       * @param id
       * @returns
       */
      readNonPH: async (id?: number): Promise<Record<string, unknown>> => {
        const res = await getNonProgramHeadFaculties(this.BASE_URL, id);
        return res;
      },
    };
  }
  Curriculum() {
    return {
      create: async (curr: Curriculum): Promise<Record<string, unknown>> => {
        const res = await postCurriculum(this.BASE_URL, curr);
        return res;
      },
      read: async (currID?: string): Promise<Record<string, unknown>> => {
        const res = await getCurriculum(this.BASE_URL, currID);
        return res;
      },
      readByProgram: async (
        programID: number,
      ): Promise<Record<string, unknown>> => {
        const res = await getCurriculumByProgram(this.BASE_URL, programID);
        return res;
      },
    };
  }

  Course() {
    return {
      create: async (course: Course): Promise<Record<string, unknown>> => {
        const res = await postCourse(this.BASE_URL, course);
        return res;
      },
      read: async (courseID?: number): Promise<Record<string, unknown>> => {
        const res = await getCourse(this.BASE_URL, courseID);
        return res;
      },
    };
  }

  Period() {
    return {
      read: async (periodID: number): Promise<Record<string, unknown>> => {
        const res = await getPeriod(this.BASE_URL, periodID)
        return res
      },
      current: async (): Promise<Record<string, unknown>> => {
        const res = await getCurrentPeriod(this.BASE_URL)
        return res
      }
    }
  }

}
