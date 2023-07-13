import React, { useState, useEffect } from "react";
import GoogleMap from "./components/common/GoogleMap";
import InnerBanner from "./components/InnerBanner";
import FormControl from "./components/common/form/FormControl";
import Loader from "./components/Loader";
import http from "../services/httpServices";
import config from "../services/config.json";
import { toast } from "react-toastify";
import useFetch from "../customHooks/useFetch";
import { Formik, Form } from "formik";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import MetaDecorator from "./components/common/MetaDecorator";

function Contact() {
  const { data: contact, loading, error } = useFetch("contact");
  const siteKey = process.env.REACT_APP_RECAPTCHA_CLIENT_KEY;
  const recaptchaRef = React.createRef();
  const [GToken, setGToken] = useState();

  const initialValues = {
    name: "",
    email: "",
    contact: "",
    message: "",
  };
  const validationSchema = yup.object().shape({
    name: yup.string("Enter Vaild Name").required("Name is Required"),
    email: yup.string().email("Invalid email format").required("Required"),
    contact: yup.string("Enter Valid Number").required("Phone is Required"),
    message: yup.string("Enter Vaild Message").required("Message is Required"),
  });
  async function handleSubmit(values, { resetForm }) {
    const token = await recaptchaRef.current.executeAsync();
    setGToken(token);
    let formdata = new FormData();
    for (let item in values) {
      formdata.append(item, values[item]);
    }
    formdata.append("token", token);
    let bodyContent = formdata;
    const { data } = await http.post(
      `${config.apiEndPoint}contact`,
      bodyContent
    );
    toast.info("Thank you for filling out your information!");
    resetForm();
  }
  if (loading) return <Loader />;
  const { seo, Address, Email, Phone, mapLink } = contact;
  
  return (
    <main className="contact">
      <MetaDecorator seo={seo} />
      <InnerBanner heading="Meet The Smart Team">
        <h3> Get to know our passionate experienced team members</h3>
      </InnerBanner>
      <section className="commonBlock grid grid-col80 block">
        <div className="block__inner">
          <div className="map">
            <GoogleMap src={mapLink} />
          </div>
        </div>
        <div className="block__inner block1x2">
          <div className="left">
            <h5>Contact Information</h5>
            <p>
              <b>Address:</b>
            </p>
            <p>{Address}</p>
            <p>
              <b>Phone:</b>
            </p>
            <p>{Phone}</p>
            <p>
              <b>Email:</b>
            </p>
            <p>{Email}</p>
          </div>
          <div className="right">
            <h5>Inquiry Form</h5>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              validateOnBlur={false}
              validateOnChange={false}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => {
                return (
                  <Form>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      size="invisible"
                      sitekey={siteKey}
                    />
                    <FormControl
                      name="name"
                      control="input"
                      label="Full Name"
                      placeholder="Your Name"
                    />
                    <FormControl
                      name="email"
                      control="input"
                      label="Email"
                      placeholder="Your Email"
                    />
                    <FormControl
                      name="contact"
                      control="input"
                      label="Contact Number"
                      placeholder="Your Phone"
                    />
                    <FormControl
                      name="message"
                      control="textarea"
                      label="Your Mesasge"
                      rows="10"
                      placeholder="Your Mesasge"
                    />
                    <button
                      className="btn"
                      type="submit"
                      disabled={GToken && isSubmitting}
                    >
                      <span>Submit</span>
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
