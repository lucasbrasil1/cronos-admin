import axios from "axios";

export const api = axios.create({
    baseURL: 'https://localhost:7044/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const createSession = async( email, password) => {
    return api.post('');
}

