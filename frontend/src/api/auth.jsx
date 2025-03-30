import axios from 'axios';

const API_URL = 'http://localhost:8000/api/users/login/';

export const loginUser = async (email, password) => {
    const response = await axios.post(API_URL, { email, password });
    console.log("response",response)
    alert(1)
    return response.data;  // returns { access, refresh, user_type, name }
};


