import React from "react";
import Button from "./common/Button";
import CourseDetails from "./CourseDetails";
import { ModalDailogContext } from "../context/ModalDailogContext";

function ShopCourse({ details }) {
  const courses = [[
    { title: "Interactive Handouts" },
    { title: "CPD Packs" },
    { title: "Compliance Logbook" },
    { title: "Instant Certifications" },
  ]];
  const { handleDailog } = React.useContext(ModalDailogContext);
  return (
    <>
      <div className="shopCourse commonBlock">
        <h3>{details.title}</h3>
        <div className="shopCourse__table">
          <div className="shopCourse__table--header">
            <div className="row">
              <div className="column">
                <span>Courses</span>
              </div>
              <div className="column">
                <span>Price (Up to 15 delegates)</span>
              </div>
              <div className="column">
                <span>For more than 15 delegates</span>
              </div>
            </div>
          </div>
          <div className="shopCourse__table--body">
            {details.feature &&
              details.feature.map(({ p_id, title, price }, index) => {
                return (
                  <div className="row" key={index}>
                    <div className="column">
                      <span>{title}</span>
                    </div>
                    <div className="column">
                      <span> {`£${price} Plus VAT `}</span>
                      <Button
                        path=""
                        text="book now"
                        id="shopbooknow"
                        onClick={(e) => handleDailog(e, p_id)}
                      />
                    </div>
                    <div className="column">
                      <Button
                        path=""
                        id="shopgetstart"
                        onClick={(e) => handleDailog(e, p_id)}
                        text="get started"
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <h5>Courses Include</h5>
        <CourseDetails details={courses} />
      </div>
    </>
  );
}

export default ShopCourse;
