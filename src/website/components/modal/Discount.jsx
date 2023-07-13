import React from "react";
import { useNavigate } from "react-router-dom";
import { ModalDailogContext } from "../../context/ModalDailogContext";

function Discount() {
  const { showDailog } = React.useContext(ModalDailogContext);
  const navigate = useNavigate();
  const [showModalDailog, setShowModalDailog] = showDailog;

  return (
    <div className="demoModal">
      <p>Congratulation</p>
      <h2> You have successFully avail discounts </h2>
      <button
        onClick={() => {
          navigate("/shop");
          setShowModalDailog(false);
        }}
        className="btn"
      >
        <span>Shop Now</span>
      </button>
    </div>
  );
}

export default Discount;
