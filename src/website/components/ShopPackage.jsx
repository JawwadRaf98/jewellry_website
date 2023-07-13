import React from "react";
import Button from "./common/Button";
import { ModalDailogContext } from "../context/ModalDailogContext";

function ShopPackage({ details }) {
  const { handleDailog } = React.useContext(ModalDailogContext);
  return (
    <div className="shopPackages">
      {details.feature &&
        details.feature.map(({ p_id, title, text, price, image }, index) => {
          return (
            <div className="innerBlock block1x2" key={index}>
              <div className="left">
                <h4>{title}</h4>
                <p>{text}</p>
                <h2>{`£${price} Plus VAT`}</h2>
                <Button
                  path=""
                  id="shopbooknow"
                  text="get started"
                  onClick={(e) => handleDailog(e, p_id)}
                />
              </div>
              <div className="right">
                <img src={image} alt="" />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ShopPackage;
