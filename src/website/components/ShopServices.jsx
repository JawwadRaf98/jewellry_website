import React from "react";
import Button from "./common/Button";
import { ModalDailogContext } from "../context/ModalDailogContext";

function ShopServices({ details }) {
  const { handleDailog } = React.useContext(ModalDailogContext);
  return (
    <div className="shopServices">
      {details.feature &&
        details.feature.map(({ p_id, title, text, price, image }, index) => {
          return (
            <div className="innerBlock block1x2" key={index}>
              <div className="left">
                <h4>{title}</h4>
                <h2>{`£${price} Plus VAT`}</h2>
                <Button
                  path={""}
                  text={"get started"}
                  onClick={(e) => handleDailog(e, p_id)}
                  id="shopbooknow"
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

export default ShopServices;
