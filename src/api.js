import request from 'superagent';

export const getFavorites = async () => {
    const URL = `${process.env.REACT_APP_DB_URL}/listings`;
    console.log('Requesting favorites from', URL);
    const result = await request.get(URL);
    return result.body;
}

export const getAllResidencies = async () => {
    const URL = `${process.env.REACT_APP_DB_URL}/listings`;
    console.log('Requesting all residencies from', URL);
    const result = await request.get(URL);
    return result.body;
}

export const getResidency = async (id) => {
    const URL = `${process.env.REACT_APP_DB_URL}/listings/${id}`;
    console.log('Requesting residency', id, 'from', URL);
    const result = await request.get(URL);
    return result.body[0];
}


export const getAllUsers = async () => {
    const URL = `${process.env.REACT_APP_DB_URL}/users`;
    console.log('Requesting all residencies from', URL);
    const result = await request.get(URL);
    return result.body;
}

export const getUser = async (id) => {
    const URL = `${process.env.REACT_APP_DB_URL}/users/${id}`;
    console.log('Requesting user', id, 'from', URL);
    const result = await request.get(URL);
    return result.body[0];
}

export const getUserLogin = () => {
    console.log('Getting user');
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
}