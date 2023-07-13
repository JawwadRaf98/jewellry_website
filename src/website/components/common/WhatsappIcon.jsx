import React from "react";
import whatsApp from "../../dist/webImages/whatsapp.webp";

function WhatsappIcon({ number }) {
  return (
    <a href={`https://api.whatsapp.com/send?phone=${number}`}>
      <img src={whatsApp} className="whatsapp" alt="" />
    </a>
  );
}

export default WhatsappIcon;
