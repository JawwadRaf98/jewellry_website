import React, { useState } from "react";
export const DiscountContext = React.createContext();

function DiscountContextProvider(props) {
  const [discount, setDiscount] = useState(0);
  return (
    <DiscountContext.Provider
      value={{ discountValue: [discount, setDiscount] }}
    >
      {props.children}
    </DiscountContext.Provider>
  );
}
export default DiscountContextProvider;
