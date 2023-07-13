import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ModalDailogContext } from "../../context/ModalDailogContext";
import RequestDemo from "./../modal/RequestDemo";
import ShopBookNow from "../modal/ShopBookNow";
import ShopGetStart from "../modal/ShopGetStart";
import Discount from "../modal/Discount";

function Modal() {
  const { showDailog, currentModal, modalID } =
    React.useContext(ModalDailogContext);
  const [showModalDailog, setShowModalDailog] = showDailog;
  const [currentDailog] = currentModal;

  let classes = "modal ";
  classes += showModalDailog ? " is-visible" : "";

  const renderModalBody = (currentDailog) => {
    switch (currentDailog) {
      case "demo":
        return <RequestDemo />;
      case "shopbooknow":
        return <ShopBookNow modalID={modalID} />;
      case "shopgetstart":
        return <ShopGetStart modalID={modalID} />;
      case "discount":
        return <Discount />;
      default:
        return null;
    }
  };

  const handleModal = (e) => {
    e.target.classList[0] === "modal" &&
      showModalDailog &&
      setShowModalDailog(false);
  };
  return ReactDOM.createPortal(
    <div className="webLayout">
      <div
        className={classes}
        data-animation="fade"
        onClick={(e) => handleModal(e)}
      >
        <div className="modalDialog">
          <div className="modalHeader">
            <button
              className="closeBtn"
              onClick={() => setShowModalDailog(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="modalBody">
            <div className="modalBody__inner">
              {renderModalBody(currentDailog)}
            </div>
          </div>
          <div className="modalFooter"></div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
