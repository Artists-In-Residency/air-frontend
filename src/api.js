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

export const getUser = () => {
    console.log('Getting user');
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
}