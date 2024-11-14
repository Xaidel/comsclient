import { Credentials } from "../types/interface";
export declare function login(url: string, credentials: Credentials): Promise<Record<string, unknown>>;
export declare function validate(url: string): Promise<Record<string, string>>;
export declare function logout(url: string, token: string): Promise<Record<string, unknown>>;
