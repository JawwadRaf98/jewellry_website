import React, { useState } from "react";
export const CaptchaTokenContext = React.createContext();

const CaptchaTokenProvider = ({ children }) => {
  const [token, setToken] = useState();
  return (
    <CaptchaTokenContext.Provider value={{ captchaToken: [token, setToken] }}>
      {children}
    </CaptchaTokenContext.Provider>
  );
};

export default CaptchaTokenProvider;
