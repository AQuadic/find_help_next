import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
    baseURL: 'https://findhelpapp.com/',
    // Additional configurations, headers, etc.
});
api.defaults.headers.post['country_id'] =Cookies.get('countryID');
api.defaults.headers.get['country_id'] =Cookies.get('countryID');
api.defaults.headers.delete['country_id'] =Cookies.get('countryID');
export default api;


//export const BASE_URL = '';