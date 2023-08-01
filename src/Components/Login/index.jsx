import React, { useEffect, useState } from 'react'
import  LoginForm from './component/loginForm'
import MainVideo from '../About/components/MainVideo'
import  LoginGoogle  from "./../../GoogleLogin";
import { Field, Formik, Form , ErrorMessage } from "formik";
import { Col, Container, Row } from 'react-bootstrap';
import http from "../../services/httpServices";
import config from "../../services/config.json";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { getTokenSession, setTokenSession } from "../../website/utils/common";
import ErrorText from "../../website/components/common/form/ErrorText";




function LoginUi() {

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


  async function handleSubmit(values) {
    // const Gtoken = await recaptchaRef.current.executeAsync();
    // setGToken(Gtoken);
    let formdata = new FormData();
    for (let item in values) {
      formdata.append(item, values[item]);
    }
    // formdata.append("token", Gtoken);
    let bodyContent = formdata;
    const { data } = await http.post(
      `${config.apiEndPoint}weblogin`,
      bodyContent
    );
    const { message, success, token } = data;
    console.log(message)
    toast.info(message);
    if (success === 1) {
      setTokenSession(token);
      window.location.replace(`/`);

    }
  }
  const iniVal = {
    email : "",
    password : ""
  }

  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Required"),
    password: yup.string().required("Required"),
  });

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
        <h2>Login</h2>
      </div>
      <div className='form-container'>
          
          <Formik  
          initialValues={iniVal}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnBlur={false}
          validateOnChange={false}
          >
              <Form>
              <fieldset>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    class="form-control"
                  />
                  <ErrorMessage
                        name="email"
                        component={ErrorText}
                  ></ErrorMessage>
                </fieldset>

                <fieldset>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    class="form-control"
                  />
                  <ErrorMessage
                        name="password"
                        component={ErrorText}
                  ></ErrorMessage>
                </fieldset>

                <fieldset>
                  <input type="Submit" className="btnyellow w-full" value={"Submit"} />
                </fieldset>
              </Form>
          </Formik>
          <p>OR</p>
          <LoginGoogle />


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