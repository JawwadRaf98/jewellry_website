import ReCAPTCHA from "react-google-recaptcha";
import React, { useEffect } from "react";

function GoogleRecaptchaV3() {
  const siteKey = process.env.REACT_APP_RECAPTCHA_CLIENT_KEY;
  const recaptchaRef = React.createRef();

  const getReCAPTCHAToken = async () => {
    const token = await recaptchaRef.current.executeAsync();
  };
  useEffect(() => {
    getReCAPTCHAToken();
  }, []);

  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      size="invisible"
      sitekey={siteKey}
      onChange={() => {}}
    />
  );
}

export default GoogleRecaptchaV3;
