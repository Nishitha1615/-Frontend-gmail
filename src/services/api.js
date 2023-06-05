import axios from 'axios';

const API_URL='https://backend-gmail-rb37.onrender.com';

const Gmail_Api=async (urlObject,payload,type)=>{
    return await axios({
        method:urlObject.method,
        url:`${API_URL}/${urlObject.endpoint}/${type}`,
        data:payload
    })
}

export default Gmail_Api;