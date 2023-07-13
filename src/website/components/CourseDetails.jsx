import React from "react";

function CourseDetails({ details }) {
  return (
    <div className="services grid grid-col90">
      <div className=" block__inner  grid block1x4">
        {details[0].map(({ title, desc }, index) => {
          return (
            <a href="" className="card" key={index}>
              <h3>{title}</h3>
              <h5>{desc}</h5>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default CourseDetails;
