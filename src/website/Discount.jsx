import React, { useEffect, useState } from "react";
import InnerBanner from "./components/InnerBanner";
import { ModalDailogContext } from "./context/ModalDailogContext";
import { DiscountContext } from "./context/DiscountContext";
import http from "../services/httpServices";
import config from "../services/config.json";
import { useNavigate } from "react-router-dom";

import useQuery from "../customHooks/useQuery";
import Loader from "./components/Loader";

function Discount() {
  let query = useQuery();
  const coupon = query.get("id");
  const navigate = useNavigate();
  const { currentModal, showDailog } = React.useContext(ModalDailogContext);
  const { discountValue } = React.useContext(DiscountContext);
  const [, setCurrentDailog] = currentModal;
  const [, setDiscount] = discountValue;
  const [, setShowModalDailog] = showDailog;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setCurrentDailog("discount");
    setShowModalDailog(true);
    getData();
    return () => {
      setShowModalDailog(false);
    };
  }, []);

  const getData = async () => {
    try {
      const { data } = await http.post(`${config.apiEndPoint}discount`, {
        id: coupon,
      });
      setDiscount(data.token);
      setShowModalDailog(false);
      setTimeout(() => {
        data.token ? navigate("/shop") : navigate("/");
        setLoading(false);
      }, 2000);
    } catch (e) {
      setLoading(true);
    }
  };
  if (loading) return null;
  return (
    <>
      <InnerBanner heading="Discounts " />
    </>
  );
}

export default Discount;
