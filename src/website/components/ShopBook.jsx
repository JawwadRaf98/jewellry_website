import React from "react";
import Button from "./common/Button";
import List from "./common/List";
import { ModalDailogContext } from "../context/ModalDailogContext";

export default function ShopBook({ details }) {
  const { handleDailog } = React.useContext(ModalDailogContext);
  return (
    <div className="shopBookLog">
      {details.feature &&
        details.feature.map(({ p_id, title, text, price, image }, index) => {
          return (
            <div className="innerBlock block1x2" key={index}>
              <div className="left">
                <h4>{title}</h4>
                {/* <List list={list} /> */}
                <div dangerouslySetInnerHTML={{ __html: text }} />
                <h2>{`£${price} Plus VAT`}</h2>
                <Button
                  path=""
                  text="get started"
                  w100
                  id="shopbooknow"
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
