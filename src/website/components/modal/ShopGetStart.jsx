import { Form, Formik } from "formik";
import React from "react";
import FormControl from "../common/form/FormControl";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";
import { CurrentShopContext } from "../../context/CurrentShopContext";

const H2 = styled.h2`
  color: #03aabe;
  font-size: 3.6rem;
  font-weight: bold;
`;
const Span = styled.span`
  color: #939393;
  font-size: 1.4rem;
  margin-bottom: 2.5rem;
`;

function ShopGetStart({ modalID }) {
  const siteKey = process.env.REACT_APP_RECAPTCHA_CLIENT_KEY;
  const { currentShop } = React.useContext(CurrentShopContext);
  const recaptchaRef = React.createRef();
  const [GToken, setGToken] = useState();
  const [plan, setPlan] = useState({
    title: "",
    validity: "",
    price: "",
    p_id: "",
  });

  const initialValues = {
    fname: "",
    contact: "",
    address: "",
    email: "",
    city: "",
    delegates: "",
    message: "",
    condition: [{ key: "Terms and Conditions", value: "condition " }],
  };
  async function validateForm() {
    let x = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("Email must be filled out");
    } else {
      const token = await recaptchaRef.current.executeAsync();
      setGToken(token);
      document.forms["myForm"].submit();
    }
  }
  useEffect(() => {
    const selectedPlan = currentShop.feature.find(
      (item) => item.p_id === modalID
    );
    setPlan(selectedPlan);
  }, [modalID]);
  return (
    <div className="demoModal">
      <H2>{plan.title}</H2>
      <Span>YOUR DETAILS</Span>
      <Formik initialValues={initialValues}>
        <Form
          name="myForm"
          action="https://smartdentalcompliance.com/orderInvoice.php"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            return validateForm();
          }}
        >
          <div className="form__inner">
            <div className="left">
              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={siteKey}
              />
              <FormControl
                name="fname"
                control="input"
                placeholder=" Full Name"
              />
              <FormControl
                name="address"
                control="input"
                placeholder="Address"
              />
              <FormControl name="email" control="input" placeholder="Email" />
              <FormControl
                name="message"
                control="textarea"
                placeholder="Message"
              />
            </div>
            <div className="right">
              <FormControl
                name="contact"
                control="input"
                placeholder="Mobile No"
              />
              <FormControl name="city" control="input" placeholder="City" />
              <FormControl
                name="delegates"
                control="input"
                placeholder="No. of Delegates"
              />

              <FormControl
                name="condition"
                control="checkbox"
                options={initialValues.condition}
              />
              <FormControl
                name="pname"
                control="input"
                value={plan.title}
                type="hidden"
              />

              <FormControl
                name="validity"
                control="input"
                value={plan.validity}
                type="hidden"
              />
              <FormControl
                control="input"
                name="price"
                value={plan.price}
                type="hidden"
              />
              <FormControl
                name="productId"
                control="input"
                value={plan.p_id}
                type="hidden"
              />
              <FormControl
                name="token"
                control="input"
                value={GToken}
                type="hidden"
              />
              <FormControl
                name="api"
                control="input"
                value="api"
                type="hidden"
              />
            </div>
          </div>
          <button className="btn" type="submit">
            <span>proceed to checkout </span>
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default ShopGetStart;
