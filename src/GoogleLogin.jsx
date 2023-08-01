import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';

function LoginGoogle() {

    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);
    
    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
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