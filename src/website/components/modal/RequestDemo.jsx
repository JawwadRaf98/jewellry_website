import { Form, Formik } from "formik";
import React, { useState } from "react";
import FormControl from "../common/form/FormControl";
import styled from "styled-components";
import * as yup from "yup";
import TimePicker from "react-time-picker";
import http from "../../../services/httpServices";
import config from "../../../services/config.json";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
const H2 = styled.h2`
  color: #03aabe;
  font-size: 3.6rem;
  font-weight: bold;
`;
const P = styled.p`
  color: #2f2f2f;
  font-size: 1.8rem;
  margin: 2.5rem 0;
`;
const Span = styled.span`
  color: #939393;
  font-size: 1.4rem;
  margin-bottom: 2.5rem;
`;

function RequestDemo() {
  const [time, setTime] = useState();
  const siteKey = process.env.REACT_APP_RECAPTCHA_CLIENT_KEY;
  const recaptchaRef = React.createRef();
  const [GToken, setGToken] = useState();
  const initialValues = {
    fname: "",
    pname: "",
    contact: "",
    email: "",
    bookDate: "",
    know: [
      { key: "Google Search", value: "g" },
      { key: "Social Media(facebook,twitter,etc)", value: "s" },
      { key: "Email", value: "email2" },
      { key: "Family/Friend", value: "fam" },
      { key: "Employer", value: "emp" },
      { key: "Event", value: "ev" },
      { key: "Leaflet", value: "l" },
      { key: "Newpaper/Magazine", value: "n" },
      { key: "Facebook Group", value: "f" },
    ],
  };
  const validationSchema = yup.object().shape({
    fname: yup.string("Enter Vaild Name").required("Name is Required"),
    pname: yup.string("Enter Vaild Name").required("Name is Required"),
    contact: yup.string("Enter Vaild Name").required("Name is Required"),
    email: yup.string().email("Invalid email format").required("Required"),
    bookDate: yup.string("Enter Valid Number").required("Phone is Required"),
  });

  async function handleSubmit(values, { resetForm }) {
    const token = await recaptchaRef.current.executeAsync();
    setGToken(token);
    let formdata = new FormData();
    for (let item in values) {
      formdata.append(item, values[item]);
    }
    formdata.append("token", token);
    formdata.append("time", time);
    let bodyContent = formdata;
    const { data } = await http.post(
      `${config.apiEndPoint}request-demo`,
      bodyContent
    );
    toast.info("Thank you for filling out your information!");
    resetForm();
  }

  return (
    <div className="demoModal">
      <H2>Request a DEMO</H2>
      <P>See how we can help you Pass your next CQC inspection</P>
      <Span>COMPANY DETAILS</Span>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={siteKey}
              />
              <div className="form__inner">
                <div className="left">
                  <FormControl
                    name="fname"
                    control="input"
                    placeholder="Your Full Name"
                  />
                  <FormControl
                    name="contact"
                    control="input"
                    placeholder="Contact No"
                  />
                  <FormControl
                    name="bookDate"
                    control="datePicker"
                    placeholderText="When would you like to book the demo"
                  />
                </div>
                <div className="right">
                  <FormControl
                    name="pname"
                    control="input"
                    placeholder="Practice Name"
                  />
                  <FormControl
                    name="email"
                    control="input"
                    placeholder="Email"
                  />
                  <div className="inputGroup timepicker">
                    <div className="field">
                      <TimePicker
                        value={time}
                        onChange={setTime}
                        placeholder={"Time"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <FormControl
                name="know"
                control="radio"
                options={initialValues.know}
                radiobtn={"demoRadio"}
              />

              <button
                className="btn"
                type="submit"
                disabled={GToken && isSubmitting}
              >
                <span>Book your personalised practice demo </span>
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default RequestDemo;
