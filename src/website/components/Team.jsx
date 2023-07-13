import React from "react";

function Team({ members = [] }) {
  return (
    <div className="cards grid block1x4">
      {members.map(({ image, name, post }, index) => {
        return (
          <div className="card" key={index}>
            <div className="card__img">
              <img src={image} alt="" />
            </div>
            <div className="card__body">
              <p>{name}</p>
              <p>{post}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Team;
