import axios from 'axios';

const api = axios.create({
    baseURL: 'http://vacinometroapi.mns.flextronics.com'
    
});

export default api;
