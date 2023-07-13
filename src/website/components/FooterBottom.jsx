import React from "react";
import Imedia from "./common/Imedia";

function FooterBottom() {
  return (
    <div className="footer__bottom grid grid-col90 block">
      <div className="block__inner block1x2">
        <div className="left">
          <p>
            © Copyright 2019 - 2022 <a href="">Smart Dental Compliance</a> All
            Rights Reserved.
          </p>
        </div>
        <Imedia />
      </div>
    </div>
  );
}

export default FooterBottom;
