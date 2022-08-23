import { get } from 'express/lib/response';

const BASE_URL = '';

export async function signUp(userInfo) {
    const resp = await fetch(`${BASE_URL}/api/v1/users`, {
        method: 'POST',
        headers: {
            Accept: 'appliation/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
        credentials: 'include',
    });
    const data = await resp.json();
    if (resp.ok) {
        location.replace('./todo');
    } else {
        console.error(data.message);
    }
}

export async function getUser() {
    const resp = await fetch(`${BASE_URL}/api/v1/users/me`, {
        method: 'GET',
        headers: {
            Accept: 'appliation/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    if (resp.ok) {
        const user = await resp.json();
        return user;
    }
}

export async function checkIfSignedIn() {
    const user = await getUser();
    if (!user) location.replace('../');
}

export async function redirect() {
    const user = await getUser();
    if (user) {
        location.replace('./todo');
    }
}

export async function logout() {
    const resp = await fetch(`${BASE_URL}/api/v1/users/session`, {
        method: 'DELETE',
        credentials: 'include',
    });
    if (resp.ok) {
        location.replace('../');
    }
}

