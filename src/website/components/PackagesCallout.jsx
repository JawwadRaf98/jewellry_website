import React from "react";

function PackagesCallout({ heading, children }) {
  return (
    <section className="section1 grid grid-col90 block">
      <div className="block__inner">
        <h3>{heading}</h3>
        {children}
      </div>
    </section>
  );
}

export default PackagesCallout;
