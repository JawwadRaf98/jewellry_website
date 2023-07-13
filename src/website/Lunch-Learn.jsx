import React, { useState, useEffect } from "react";
import InnerBanner from "./components/InnerBanner";
import lunchImage from "./dist/webImages/download.png";
import FormControl from "./components/common/form/FormControl";
import Loader from "./components/Loader";
import http from "../services/httpServices";
import { toast } from "react-toastify";
import config from "../services/config.json";
import { Formik, Form } from "formik";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
function LunchLearn() {
  const [loading, setLoading] = useState(true);
  const siteKey = process.env.REACT_APP_RECAPTCHA_CLIENT_KEY;
  const recaptchaRef = React.createRef();
  const [GToken, setGToken] = useState();
  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 700);
  }, []);

  const initialValues = {
    noDelegates: "",
    bestDay: "",
    bestTime: "",
    pName: "",
    pManager: "",
    pAddress: "",
    pContact: "",
    email: "",
    lunchPreference: "",
    question1: [
      { key: "Yes", value: "Q1y" },
      { key: "No", value: "Q1n" },
    ],
    question2: [
      { key: "Yes", value: "Q2y" },
      { key: "No", value: "Q2y" },
    ],
  };
  const validationSchema = yup.object().shape({
    noDelegates: yup.string("Enter No Delegates").required("Required"),
    bestDay: yup.string("Enter day").required("Required"),
    bestTime: yup.string("Enter Time").required("Required"),
    pName: yup.string("Enter Practice Name").required("Required"),
    pManager: yup.string("Enter Practice Manager").required("Required"),
    pAddress: yup.string("Enter Practice Address").required("Required"),
    pContact: yup.string("Enter Practice Contact").required("Required"),
    email: yup.string().email("Invalid email format").required("Required"),
    lunchPreference: yup.string("Enter preference").required("Required"),
    question1: yup.string().required("Required"),
    question2: yup.string().required("Required"),
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
      `${config.apiEndPoint}lunchandlearn`,
      bodyContent
    );
    toast.info("Thank you for filling out your information!");
    resetForm();
  }
  if (loading) return <Loader />;
  return (
    <main className="lunchLearn demoModal">
      <InnerBanner heading="Lunch And Learn " />

      <div className="block grid grid-col90">
        <div className="block__inner block1x2">
          <div className="left">
            <img src={lunchImage} alt="" />
          </div>
          <div className="right">
            <h2>Lunch and Learn Details</h2>
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
                      name="noDelegates"
                      control="input"
                      placeholder="Number of delegates"
                      label="Number of delegates"
                    />
                    <FormControl
                      name="bestDay"
                      control="input"
                      placeholder="Best day to Host a Lunch & Learn"
                      label="Best day to Host a Lunch & Learn"
                    />
                    <FormControl
                      name="bestTime"
                      control="input"
                      label="Best time for Lunch & Learn"
                    />
                    <FormControl
                      name="pName"
                      control="input"
                      label="Name of the practice"
                      placeholder="Name of the practice"
                    />
                    <FormControl
                      name="pManager"
                      control="input"
                      label="Name of the practice manager"
                      placeholder="Name of the practice manager"
                    />
                    <FormControl
                      name="pAddress"
                      control="input"
                      label="Practice Address "
                      placeholder="Practice Address "
                    />
                    <FormControl
                      name="pContact"
                      control="input"
                      label="Practice Contact Number"
                      placeholder="Practice Contact Number"
                    />
                    <FormControl
                      name="email"
                      control="input"
                      label="Email Address"
                      placeholder="Email Address"
                    />
                    <FormControl
                      name="lunchPreference"
                      control="textarea"
                      label="Lunch Preference Comment:"
                      placeholder="Add Relevent Details"
                    />
                    <FormControl
                      name="question1"
                      control="radio"
                      label=" Is there a plain wall where the trainer can project the PowerPoint- "
                      options={initialValues.question1}
                    />
                    <FormControl
                      name="question2"
                      control="radio"
                      label="Would you like a FREE Mock Audit before the training (please
                note the compliance champion would need 30 minutes to go through
                this audit with a team member before the lunch and learn
                session)"
                      options={initialValues.question2}
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

export default LunchLearn;
