import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';
import http from "./services/httpServices";
import config from "./services/config.json";
import axios from 'axios';
import { getTokenSession, setTokenSession } from "./website/utils/common";
import { useNavigate } from "react-router-dom";


function LoginGoogle() {
    const [loading, setLoading] = useState(true);
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 700);
        getTokenSession() && navigate(`/`);
    
        return () => {
          setLoading("");
        };
      }, []);
    
    // useEffect(
    //     () => {
    //         if (user !== undefined || user.access_token === undefined) {
                
    //             console.log(user)
    //             axios
    //                 .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
    //                     headers: {
    //                         "Access-Control-Allow-Origin": "*",
    //                         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //                         // Authorization: `Bearer ${user.access_token}`,
    //                         Accept: 'application/json'
    //                     }
    //                 })
    //                 .then((res) => {
    //                     console.log(res)
    //                     const { message, success, token } = res;
    //                     console.log(message)
    //                     toast.info(message);
    //                         if (success === 1) {
    //                         setTokenSession(token);
    //                         window.location.replace(`/`);
    //                         }
    //                     // setProfile(res.data);
    //                 })
    //                 .catch((err) => console.log(err));
    //         }
    //     },
    //     [ user ]
    // );
    
    async function getDataFromServer(res) {
        let formdata = new FormData();
        formdata.append('acToken', res.access_token);
        let bodyContent = formdata;
            const { data } = await http.post(
            `${config.apiEndPoint}googleLogin`,
                bodyContent
            );
            const { message, success, token } = data;
    console.log(message)
    // toast.info(message);
    if (success === 1) {
      setTokenSession(token);
      window.location.replace(`/`);

    }

        console.log(data,res)
    }

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => getDataFromServer(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };


    return (
        <div className='google-btn-div'>
            
             <button onClick={() => login()} className='singIn'> <FcGoogle /> Sign in with Google  </button>
        </div>
    )
}
export default LoginGoogle;