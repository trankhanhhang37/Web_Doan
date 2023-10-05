import axios from "axios";

const httpAxios = axios.create(
    {
        baseURL: 'http://localhost/khanhang_web/trankhanhhang_laravel/public/api/',
        timeout: 1000000,
        headers: { 'X-Custom-Header': 'foobar' }
    }
);

export default httpAxios;