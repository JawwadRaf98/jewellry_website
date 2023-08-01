import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getTokenSession,
  removeTokenSession,
} from "../website/utils/common";
function Logout() {
  const navigate = useNavigate();
  const version = process.env.REACT_APP_VERSION;

  removeTokenSession();
  window.location.replace(`/login`);

  return <></>;
}

export default Logout;