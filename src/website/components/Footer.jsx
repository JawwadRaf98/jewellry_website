import React from "react";
import WhatsappIcon from "./common/WhatsappIcon";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

function Footer({ data, logo }) {
  const { columns, contactInfromation = {} } = data;
  const { phone } = contactInfromation;
  return (
    <footer className="footer">
      <WhatsappIcon number={phone} />
      <FooterTop
        contactInformation={contactInfromation}
        columns={columns}
        logo={logo}
      />
      <FooterBottom />
    </footer>
  );
}

export default Footer;
