import axios from '../../node_modules/axios/dist/axios';

export default axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
});