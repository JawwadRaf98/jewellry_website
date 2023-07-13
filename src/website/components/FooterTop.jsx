import React from "react";
import Logo from "./common/Logo";
import fastGrowing from "../dist/webImages/fastest-growing.png";
import { Link } from "react-router-dom";
function FooterTop({ contactInformation = {}, logo, columns }) {
  const { email, phone } = contactInformation;
  const version = process.env.REACT_APP_VERSION;
  return (
    <div className="footer__top grid grid-col90 block">
      <div className="block__inner block1x2">
        <div className="left">
          <Logo logo={logo} />
          <a href={`mailto:${email}`}>
            <span>Email:</span>
            {email}
          </a>
          <a href={`tel:+${phone}`}>
            <span>Call Us:</span>
            {phone}
          </a>
          <img src={fastGrowing} className="fastestGrowing" alt="" />
        </div>
        <div className="right">
          <div className="right__inner grid block1x4">
            {columns &&
              columns.map(({ heading, list }, key) => {
                return (
                  <div className="column" key={key}>
                    <ul className="list">
                      <li>
                        <h5> {heading}</h5>
                      </li>
                      {list &&
                        list.map(({ text, path }, index) => (
                          <li className="list__item" key={index}>
                            <Link to={`${version}/${path}`}>{text}</Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                );
              })}
          </div>
          <p>
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
