import React from "react";
import Youtube from "./common/Youtube";

function DemoSection({ demos, handleDemo, currentDemo }) {
  return (
    <section className="commonBlock grid grid-col80 block">
      <div className="block__inner">
        <ul className="list list-inline">
          {demos.map(({ label }, index) => {
            let classes = "list__item";
            classes += currentDemo === index ? " active" : "";
            return (
              <li className={classes} key={index}>
                <a href="" onClick={(e) => handleDemo(index, e)}>
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="youtubeBlock">
          <Youtube  src={demos[currentDemo].videoSrc} />
        </div>
      </div>
    </section>
  );
}

export default DemoSection;
