import { Credentials } from "../types/interface";

export async function login(
  url: string,
  credentials: Credentials,
): Promise<Record<string, unknown>> {
  const res = await fetch(`${url}/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error);
  }
  return res.json() as Promise<Record<string, unknown>>;
}

export async function validate(url: string): Promise<Record<string, string>> {
  const res = await fetch(`${url}/auth/validate`, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    credentials: "include",
  });
  if (!res.ok) {
    throw new Error(`${res.statusText} ${res.status}`);
  }
  return res.json() as Promise<Record<string, string>>;
}

export async function logout(
  url: string,
  token: string,
): Promise<Record<string, unknown>> {
  const res = await fetch(`${url}/auth/logout`, {
    method: "POST",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<Record<string, any>>;
}
