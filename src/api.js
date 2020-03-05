import request from 'superagent';

export const getFavorites = async () => {
    const URL = `${process.env.REACT_APP_DB_URL}/listings`;
    console.log('Requesting favorites from', URL);
    const result = await request.get(URL);
    return result.body;
}

export const getFavorites2 = async (userId) => {
    const URL = `${process.env.REACT_APP_DB_URL}/api/me/favorites`;
    console.log('Requesting favorites from', URL, userId);
    const result = await request.get(URL).set('Authorization', userId);
    return result.body;
}


export const getAllResidencies = async () => {
    const URL = `${process.env.REACT_APP_DB_URL}/listings`;
    console.log('Requesting all residencies from', URL);
    const result = await request.get(URL);
    return result.body;
}

export const getPagedResidencies = async (id) => {
    const URL = `${process.env.REACT_APP_DB_URL}/listings/page/${id}`;
    console.log('Requesting paged residencies from', URL);
    const result = await request.get(URL);
    return result.body;
}

// export const getPagedSearch = async (id) => {
//     const URL = `${process.env.REACT_APP_DB_URL}/test/search/${id}/`;
//     console.log('Requesting paged search from', URL);
//     const result = await request.get(URL);
//     return result.body;
// }

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

export const getUserFromLocalStorage = () => {
    console.log('Getting user from localStorage');
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
}

export const handleFavorite = async (item, user) => {
    const URL = `${process.env.REACT_APP_DB_URL}/api/me/favorites`;
    const newObj = {
        user_id: user.id,
        program_name: item.program_name,
        address: item.address,
        city: item.city,
        state: item.state,
        country: item.country,
        continent: item.continent,
        zip_code: item.zip_code,
        phone_num: item.phone_num,
        email: item.email,
        art_medium: item.art_medium,
        img_url: item.img_url,
        link_url: item.link_url,
        description: item.description,
        is_grant: false,
        lat: item.lat,
        long: item.long,
    }
    console.log('handleFavorite requesting', URL, item, user)
    await request
        .post(URL, newObj)
        .set('Authorization', user.token)
        .then((result) => {
            // this.setState({ data: result.body })
            console.log('handleFavorite result', result);
        })
        .catch((err) => {
            alert(err);
        });
}