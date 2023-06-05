import API from '../services/api.js'
import {useState} from 'react'

const useApi=(urlObject)=>{

    const [res,setRes]=useState(null);
    const [error, setError]=useState("");
    const [loader,setLoader]=useState(false)

    const call=async(payload ,type='')=>{
        setRes(null);
        setError("");
        setLoader(true)
        try{
            let response=await API(urlObject,payload,type);
            setRes(response.data)
        }
        catch(err){
            setError(err.message);
        }
        finally{
            setLoader(false);
        }
    }

    return {call, res,error,loader}
}

export default useApi;