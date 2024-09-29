import axios from "axios";

const API_URL = 'https://66f91be82a683ce97310eb0c.mockapi.io'

const instance = axios.create({
    baseURL: API_URL,
})

export const readAllUsers = async () => {

    try {
        const response = await instance.get('/users');
        return response;
    } catch (error) {
        throw new Error(error.message)
    }
}

export const createUser = async (userInfo) => {

    try {
        const response = await instance.post('/users', userInfo);
        return response;
    } catch (error) {
        throw new Error(error.message)
    }
}

export const editUserInfo = async (userInfo) => {
    try {
        const response = await instance.put(`/users/${userInfo.id}`, userInfo);
        return response
    } catch (error) {
        throw new Error(error.message)
    }
}

export const deleteUserInfo = async (userInfo) => {
    try {
        const response = await instance.delete(`/users/${userInfo.id}`);
        return response
    } catch (error) {
        throw new Error(error.message)
    }
}