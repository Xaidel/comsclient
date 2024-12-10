export interface Credentials {
    userID: string;
    password: string;
}
export interface Department {
    code: string;
    name: string;
}
export interface Program {
    Program_Code: string;
    Program_Name: string;
    ID: number;
}
export interface ProgramHead {
    userID: string;
    programID: number;
}
export interface Faculty {
    userID: string;
    deptID: number;
}
export interface Curriculum {
    effectivity_sy: string;
    cmo_name: string;
    curr_id: string;
    effectivity_sem: number;
    isActive: number;
    revision_number: number;
    programID: number;
}
export interface Course {
    course_no: string;
    curr_id: string;
    course_name: string;
    lec_unit: number;
    lab_unit: number;
    sem: number;
    year_level: number;
}
