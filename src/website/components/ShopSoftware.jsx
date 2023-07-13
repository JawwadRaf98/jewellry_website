import React from "react";
import { ModalDailogContext } from "../context/ModalDailogContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./common/Button";
function ShopSoftware({ details }) {
  const { handleDailog } = React.useContext(ModalDailogContext);
  const renderIcon = (value) => {
    return value === "true" ? faCheckCircle : faTimesCircle;
  };
  return (
    <div className="shopSoftware__table">
      <h3>{details.title}</h3>
      <div className="shopSoftware__table--header">
        <div className="row">
          <div className="column">
            <h4>Pick your Plan</h4>
          </div>
          {details.feature &&
            details.feature.map(({ price, p_id, title }, index) => {
              return (
                <div className="column" key={index}>
                  <div className="top">
                    <h4>{title} </h4>
                  </div>
                  <div className="bottom">
                    <h6>
                      £{price} <span>Plus VAT monthly </span>
                      <span>Per Month</span>
                    </h6>
                    <Button
                      id="shopbooknow"
                      text="get started"
                      onClick={(e) => handleDailog(e, p_id)}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="shopSoftware__table--body">
        {details.plans &&
          details.plans.map(({ title, comply, manage, platinum }, index) => {
            return (
              <div className="row" key={index}>
                <div className="column">
                  <span>{title}</span>
                </div>
                <div className="column">
                  <FontAwesomeIcon icon={renderIcon(comply)} />
                </div>
                <div className="column">
                  <FontAwesomeIcon icon={renderIcon(manage)} />
                </div>
                <div className="column">
                  <FontAwesomeIcon icon={renderIcon(platinum)} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ShopSoftware;
