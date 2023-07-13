import React, { useState, useEffect } from "react";
import InnerBanner from "./components/InnerBanner";
import FormControl from "./components/common/form/FormControl";
import Loader from "./components/Loader";
import { Formik, Form } from "formik";
import http from "../services/httpServices";
import config from "../services/config.json";
import { toast } from "react-toastify";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
function RequestFeature() {
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState("");
  const siteKey = process.env.REACT_APP_RECAPTCHA_CLIENT_KEY;
  const recaptchaRef = React.createRef();
  const [GToken, setGToken] = useState();

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 700);
  }, []);

  const suggestionType = [
    { key: "Select" },
    { key: "Feature", value: "f" },
    { key: "Functionaly", value: "fn" },
    { key: "Improvment", value: "imv" },
    { key: "bug", value: "bg" },
  ];

  const initialValues = {
    suggestion: "",
    sName: "",
    link: "",
    sRating: 1,
    name: "",
    email: "",
    contact: "",
    details: "",
  };
  const validationSchema = yup.object().shape({
    suggestion: yup.string("Select Suggestion Type").required("Required"),
    sName: yup.string("Enter Suggestion Name").required("Required"),
    link: yup.string("Enter Link"),
    sRating: yup.string("Select Importance ").required("Required"),
    name: yup.string("Enter your Name").required("Required"),
    email: yup
      .string("Enter email")
      .email("Invalid email format")
      .required("Required"),
    contact: yup.string("Enter Contact Number").required("Required"),
    details: yup.string("Enter Preference Details ").required("Required"),
  });

  async function handleSubmit(values, { resetForm }) {
    const token = await recaptchaRef.current.executeAsync();
    setGToken(token);
    let formdata = new FormData();
    for (let item in values) {
      formdata.append(item, values[item]);
    }
    formdata.append("file", file);
    formdata.append("token", token);
    let bodyContent = formdata;
    const { data } = await http.post(
      `${config.apiEndPoint}feature-form`,
      bodyContent
    );
    toast.info("Thank you for filling out your information!");
    setFile("");
    resetForm();
  }
  if (loading) return <Loader />;

  return (
    <main className="requestFeature demoModal">
      <InnerBanner heading="Request a Feature of Smart Dental Compliance " />
      <div className="block grid grid-col90">
        <div className="block__inner ">
          <div className="requestForm">
            <h2>Request a Feature</h2>
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
                      name="suggestion"
                      control="select"
                      options={suggestionType}
                      label="Select type of suggestion"
                    />
                    <FormControl
                      name="sName"
                      control="input"
                      placeholder="Name of Suggestion"
                      label="Enter the name of suggestion"
                    />
                    <FormControl
                      name="attachment"
                      control="file"
                      type="file"
                      label="Add an attachment/screenshot"
                      onChange={(event) => {
                        setFile(event.currentTarget.files[0]);
                      }}
                    />
                    <FormControl
                      name="link"
                      control="input"
                      label="Add link"
                      placeholder="if there is a link you can add"
                    />
                    <FormControl
                      name="sRating"
                      control="input"
                      type="number"
                      min="1"
                      max="10"
                      label="How important is you suggetion"
                    />
                    <FormControl
                      name="name"
                      control="input"
                      label="Your Name"
                      placeholder="Enter Your Name"
                    />
                    <FormControl
                      name="email"
                      control="input"
                      label="Your Email "
                      placeholder="Enter Your Email"
                    />
                    <FormControl
                      name="contact"
                      control="input"
                      label="Your Contact"
                      placeholder="Enter Your Contact"
                    />
                    <FormControl
                      name="details"
                      control="textarea"
                      label="Please describe your suggestion"
                      placeholder="Add Relevent Details"
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
      </div>
    </main>
  );
}

export default RequestFeature;
