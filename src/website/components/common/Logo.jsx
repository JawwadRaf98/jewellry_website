import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../dist/webImages/logo.png"
function Logo() {

  const logo = {
    imgSrc: logoImg,
    mainText: "SMART DENTAL",
    subText: "COMPLIANCE & TRAINING"
  }
  const { imgSrc, mainText, subText } = logo;
  return (
    <div className="header__logo ">
      <Link to="/">
        <img src={imgSrc} alt="" />
        <div className="header__text">
          <h1>{mainText} </h1>
          <h6>{subText} </h6>
        </div>
      </Link>
    </div>
  );
}

export default Logo;
