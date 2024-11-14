export async function login(url, credentials) {
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
    return res.json();
}
export async function validate(url) {
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
    return res.json();
}
export async function logout(url, token) {
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
    return res.json();
}
