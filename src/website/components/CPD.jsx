import React from "react";
import mediaImage from "../dist/webImages/media";
import { Link } from "react-router-dom";
function CPD({ data }) {
  return (
    <div className="cpd">
      {data.map(({ path, text }, index) => {
        return (
          <div className="media" key={index}>
            <div className="media__img">
              <img src={mediaImage[index]} alt="" />
            </div>
            <div className="media__body">
              <Link to={path}> {text}</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CPD;
