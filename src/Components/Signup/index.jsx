import React, { useEffect, useState } from 'react'
import MainVideo from '../About/components/MainVideo'
import { Field, Formik, Form , ErrorMessage } from "formik";
import { Col, Container, Row } from 'react-bootstrap';
import {  toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { getTokenSession } from "../../website/utils/common";
import usePost from '../../customHooks/usePost';




function LoginUi() {
  
  const [res, apiMethod] = usePost();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const siteKey = process.env.REACT_APP_RECAPTCHA_CLIENT_KEY;
  const version = process.env.REACT_APP_VERSION;


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
    getTokenSession() && navigate(`/`);

    return () => {
      setLoading("");
    };
  }, []);

  function handleSubmit(values, { resetForm }) {
    const {username, email , password , dob , contact , gender, aggrement } = values
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(username==="" || email ==="" || password ==="" || dob ==="" || contact ==="" || gender === "" || aggrement ===""){
      toast.info("All filed are required");
    }
    else if(!email.match(validRegex)){
      toast.info("Invalid Email");
    }else if(password.length <5){
      toast.info("Password must contain 6 character");
    }else{
      let formdata = new FormData();
      formdata.append("username", username);
      formdata.append("email", email);
      formdata.append("password", password);
      formdata.append("dob", dob);
      formdata.append("contact", contact);
      formdata.append("gender", gender);
      formdata.append("aggrement", aggrement[0]);
      formdata.append("submit", true);
      let bodyContent = formdata;
      let data = apiMethod("signup", bodyContent);
      resetForm();
    }
  }
  if (res.data !== null) {
    toast.info(res.data.message);
    res.data=null
  }



  const iniVal = {
    username : "",
    email : "",
    password : "",
    dob : "",
    contact : "",
    gender : "",
    aggrement : ""

 
  }

 

  return (
    <>
    
   <MainVideo
   customClass = "loginForm"
   />
   <Container>
    <Row>
      <Col lg="6" md="6" sm="12" className='pt-3 mx-auto'>
    <div className='main-container'>
      <div className='loginFormContainer'>
        <div className='heading'>
        <h2>Create an Account</h2>
      </div>
      <div className='form-container'>
          
          <Formik  
          initialValues={iniVal}
          onSubmit={handleSubmit}
          
          >
              <Form>
              <fieldset>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    className="form-control"
                  />
                  
              </fieldset>

              <fieldset>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="form-control"
                  />
                </fieldset>

                <fieldset>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="form-control"
                  />
                </fieldset>

                <fieldset>
                  <Field
                    type="text"
                    name="contact"
                    placeholder="Enter your contact no"
                    className="form-control"
                  />
                </fieldset>

                <fieldset>
                <Field as="select" name="gender" className="form-control" placeholder="Enter your password">
                <option value="" disabled>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Field>
                </fieldset>

                <fieldset>
                  <Field
                    type="date"
                    name="dob"
                    placeholder="Enter your date of birth"
                    className="form-control"
                  />
                
                </fieldset>
                <fieldset>
                {/* <label> */}
                <Field type="checkbox" name="aggrement" id="agg" value="1" style={{border : '1px solid #fff'}} />
                  <span className='sign-up-aggr' for="agg">  Yes i accept terms and conditions </span>
                  {/* </label> */}
                  </fieldset>
                <fieldset>
                  <input type="Submit" className="btnyellow w-full"  disabled={res.isLoading} value={res.isLoading ? "Submitting":"Submit"} />
                </fieldset>
              </Form>
          </Formik>

      </div>
    </div>
  </div>
  </Col>
    </Row>
   </Container>
   
     {/*
    <div>
      <LoginGoogle />
    </div> */}
    
    {/* <LoginForm /> */}
    </>
  )
} 
export default LoginUi