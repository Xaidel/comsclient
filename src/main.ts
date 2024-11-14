import { login, logout, validate } from "./api/Auth.js";
import { getDepartment, postDepartment } from "./api/Department.js";
import { getFaculty, getNonProgramHeadFaculties, postFaculty } from "./api/Faculty.js";
import { getProgramhead, postProgramHead } from "./api/ProgramHead.js";
import { Credentials, Department, Faculty, ProgramHead } from "./types/interface.js";

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

  ProgramHead(){
    return {
      /**
       * 
       * @param programHead 
       * @returns 
       */
      create: async (programHead: ProgramHead): Promise<Record<string, unknown>> => {
        const res = await postProgramHead(this.BASE_URL, programHead)
        return res;
      },
      /**
       * 
       * @param id 
       * @returns 
       */
      read: async(id?: number): Promise<Record<string, unknown>> => {
        const res = await getProgramhead(this.BASE_URL, id)
        return res;
      }
    }
  }

  Faculty(){
    return {
      /**
       * 
       * @param faculty 
       * @returns 
       */
      create: async (faculty: Faculty): Promise<Record<string, unknown>> => {
        const res = await postFaculty(this.BASE_URL, faculty)
        return res
      },
      /**
       * 
       * @param dept_id 
       * @returns 
       */
      read: async (dept_id?: number): Promise<Record<string, unknown>> => {
        const res = await getFaculty(this.BASE_URL, dept_id)
        return res
      },
      /**
       * Return a faculty or a list of faculty who are not Program Head
       * @param id 
       * @returns 
       */
      readNonPH: async (id?: number): Promise<Record<string, unknown>> => {
        const res = await getNonProgramHeadFaculties(this.BASE_URL, id)
        return res
      }
    }
  }
  
}
