import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-65.firebaseio.com/'
});

export default instance;