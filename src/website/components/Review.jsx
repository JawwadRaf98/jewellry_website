import React from "react";
import { Link } from "react-router-dom";

function Review({ reviews }) {
  return (
    <section className="section4 grid grid-col80 block">
      <h2>What do people think ?</h2>
      <div className="block__inner ">
        <div className="cards grid block1x3">
          {reviews &&
            reviews.map(({ path, imageSrc, name, status }, index) => {
              return (
                <Link to={path} key={index} className="card">
                  <div className="">
                    <div className="card__img">
                      <img src={imageSrc} alt="" />
                    </div>
                    <div className="card__body">
                      <h4>{name}</h4>
                      <p>{status}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Review;
