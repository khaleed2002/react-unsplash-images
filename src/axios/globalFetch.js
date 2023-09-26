import axios from 'axios'
import { ACCESS_KEY } from './Values'
const autoFetch = axios.create({
    baseURL: 'https://api.unsplash.com/search/photos'
})
autoFetch.interceptors.request.use(
    (request) => {
        request.params['client_id'] = ACCESS_KEY
        request.params['per_page'] = 20
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
)
export default autoFetch