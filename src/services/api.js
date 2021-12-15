import axios from 'axios';

const api = axios.create({
    baseURL: 'http://vacinometroapi.mns.flextronics.com'
    //baseURL : 'http://localhost:3333'
    
});

export default api;
