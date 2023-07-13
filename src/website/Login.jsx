import React, { useState, useEffect, useContext } from "react";
import * as yup from "yup";
import Loader from "./components/Loader";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ErrorText from "./components/common/form/ErrorText";
import ReCAPTCHA from "react-google-recaptcha";
import http from "../services/httpServices";
import config from "../services/config.json";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getTokenSession, setTokenSession } from "./utils/common";
import ErrorFallback from "./components/common/ErrorFallback";

function Login() {
  const [loading, setLoading] = useState(true);
  const siteKey = process.env.REACT_APP_RECAPTCHA_CLIENT_KEY;
  const version = process.env.REACT_APP_VERSION;

  const recaptchaRef = React.createRef();
  const [GToken, setGToken] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
    getTokenSession() && navigate(`/${version}/dashboard`);

    return () => {
      setLoading("");
    };
  }, []);

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Required"),
    password: yup.string().required("Required"),
  });

  async function handleSubmit(values) {
    // const Gtoken = await recaptchaRef.current.executeAsync();
    // setGToken(Gtoken);
    let formdata = new FormData();
    for (let item in values) {
      formdata.append(item, values[item]);
    }
    // formdata.append("token", Gtoken);
    let bodyContent = formdata;
    const { data } = await http.post(`${config.apiEndPoint}login`, bodyContent);
    const { message, success, token } = data;
    toast.info(message);
    if (success === 1) {
      setTokenSession(token);
      navigate(`/${version}/dashboard`);
    }
  }
  if (loading) return <Loader />;
  return (
    <div className="webLayout">
      <main className="login">
        <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey={siteKey} />
        <div className="loginForm">
          <div className="loginForm__content">
            <a href="">
              <h1>
                SMART DENTAL
                <span>COMPLIANCE &amp; TRAINING</span>
              </h1>
            </a>
            <p>Welcome back! Please login to your account</p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              validateOnBlur={false}
              validateOnChange={false}
            >
              {({ isSubmitting }) => {
                return (
                  <Form>
                    <div className="loginInput">
                      <i className="fas fa-envelope"></i>
                      <Field name="email" placeholder="Email" />
                      <ErrorMessage
                        name="email"
                        component={ErrorText}
                      ></ErrorMessage>
                    </div>

                    <div className="loginInput">
                      <i className="fas fa-key"></i>
                      <Field
                        name="password"
                        placeholder="Password"
                        type="password"
                      />
                      <ErrorMessage
                        name="password"
                        component={ErrorText}
                      ></ErrorMessage>
                    </div>

                    <div className="remember">
                      <div className="">
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                      </div>
                      <a href="">Forgot Password</a>
                    </div>

                    <button
                      className="btn"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      <span>login</span>
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
