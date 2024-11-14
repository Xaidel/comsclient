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

export interface ProgramHead{
  userID: string;
  programID: number;
}

export interface Faculty{
  userID: string;
  deptID: number;
}
