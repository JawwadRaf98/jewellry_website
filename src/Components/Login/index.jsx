import React from 'react'
import  LoginForm from './component/loginForm'
import MainVideo from '../About/components/MainVideo'
import  LoginGoogle  from "./../../GoogleLogin";

function index() {
  return (
    <>
    <MainVideo/>
    <div>
      <LoginGoogle />
    </div>
    
    {/* <LoginForm /> */}
    </>
  )
}
export default index