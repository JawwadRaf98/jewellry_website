import React from "react";
import imedia from "../../dist/webImages/imedia.png";
function Imedia() {
  return (
    <div className="imedia">
      <a
        href="http://imedia.com.pk/"
        target="_blank"
        rel="noreferrer"
        title="Karachi Web Designing Company"
        className="design_develop"
      >
        Design &amp; Developed by:
      </a>
      <a
        href="http://imedia.com.pk/"
        target="_blank"
        rel="noreferrer"
        title="Web Designing Company Pakistan"
      >
        <img src={imedia} alt="" />
      </a>
      <div className="m_text">
        <a
          href="http://imedia.com.pk/"
          target="_blank"
          rel="noreferrer"
          title="Website Design by Interactive Media"
        >
          Interactive Media
        </a>
        <a
          href="http://imediaintl.com/"
          target="_blank"
          rel="noreferrer"
          title="International Web Development Company"
          className="digital_media"
        >
          DIGITAL MEDIA ON DEMAND Globally
        </a>
      </div>
    </div>
  );
}

export default Imedia;
