import React from "react";
import Button from "./common/Button";

function Services({ services }) {
  return (
    <section className="section5 grid grid-col90 block">
      <div className="block__inner grid block1x4">
        {services &&
          services.map(({ name, path, buttonText }, index) => {
            return (
              <div className="card" key={index}>
                <h4 dangerouslySetInnerHTML={{ __html: name }} />
                {buttonText && <Button path={path} text={buttonText} />}
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default Services;
