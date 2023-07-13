import React from "react";

function Socials({ links = {} }) {
  const { facebook, twitter, linkedin, instagram } = links;

  return (
    <section className="section6 grid grid-col90 block">
      <div className="block__inner">
        <div className="socialIcons">
          <a href={facebook} target="_blank" rel="noreferrer">
            <div className="icon fb hvr-pop"></div>
          </a>
          <a href={twitter} target="_blank" rel="noreferrer">
            <div className="icon tw hvr-pop"></div>
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <div className="icon in hvr-pop"></div>
          </a>
          <a href={instagram} target="_blank" rel="noreferrer">
            <div className="icon ins hvr-pop"></div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Socials;
