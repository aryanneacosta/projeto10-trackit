import axios from "axios";

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function postLogin(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise;
}

function postRegistration(body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
    return promise;
}

function postHabits(body) {
    const promise = axios.post(`${BASE_URL}/habits`, body);
    return promise;
}

function getHabits(token) {
    const promise = axios.get(`${BASE_URL}/habits`, {
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    });
    return promise;
}

function deleteHabits(habitId) {
    const promise = axios.delete(`${BASE_URL}/habits/${habitId}`);
    return promise;
}

function getToday(token) {
    const promise = axios.get(`${BASE_URL}/habits/today`, {
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    });
    return promise;
}

function postTodayDone(body, habitId) {
    const promise = axios.post(`${BASE_URL}/habits/${habitId}/check`, body);
    return promise;
}

function postTodayUndone(body, habitId) {
    const promise = axios.post(`${BASE_URL}/habits/${habitId}/uncheck`, body);
    return promise;
}

export {
    postLogin,
    postRegistration,
    postHabits,
    getHabits,
    deleteHabits,
    getToday,
    postTodayDone,
    postTodayUndone
}