import React from "react";

function Callout({ heading, children }) {
  return (
    <section className="callout block">
      <div className="block__inner">
        <h2>{heading}</h2>
        {children}
      </div>
    </section>
  );
}

export default Callout;
