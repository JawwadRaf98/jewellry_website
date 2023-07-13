import React from "react";
import InnerBanner from "./components/InnerBanner";
import ShopSoftware from "./components/ShopSoftware";
import ShopPackage from "./components/ShopPackage";
import ShopBook from "./components/ShopBook";
import ShopCourse from "./components/ShopCourse";
import ShopServices from "./components/ShopServices";
import { useState, useEffect, useContext } from "react";
import Button from "./components/common/Button";
import http from "../services/httpServices";
import config from "../services/config.json";
import { CurrentShopContext } from "./context/CurrentShopContext";
import Loader from "./components/Loader";
import { DiscountContext } from "./context/DiscountContext";
import MetaDecorator from "./components/common/MetaDecorator";
function Shop() {
  const { currentShop, setCurrentShop } = useContext(CurrentShopContext);
  const { discountValue } = React.useContext(DiscountContext);
  const [shop, setShop] = useState([]);
  const [loading, setLoading] = useState(true);
  const [discount] = discountValue;
  const [shopPage, setShopPage] = useState({
    innerBanner: {},
    software: [],
    packages: [],
    books: [],
    courses: [],
    services: [],
    seo: [],
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await http.post(`${config.apiEndPoint}shop`, {
        couponToken: discount,
      });
      const { innerBanner, shop, seo } = data;
      setShop(shop);
      setShopPage({
        innerBanner: innerBanner,
        seo: seo,
        software: shop[0],
        packages: shop[1],
        books: shop[2],
        courses: shop[3],
        services: shop[4],
      });

      setCurrentShop(shop[0]);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(true);
    }
  };

  const handleShop = (id, e) => {
    e.preventDefault();
    const selectedShop = shop[id];
    setCurrentShop(selectedShop);
  };
  function shopBody(currentShop) {
    const { software, packages, books, courses, services } = shopPage;
    const index = shop.indexOf(currentShop);
    switch (index) {
      case 0:
        return <ShopSoftware details={software} />;
      case 1:
        return <ShopPackage details={packages} />;
      case 2:
        return <ShopBook details={books} />;
      case 3:
        return <ShopCourse details={courses} />;
      case 4:
        return <ShopServices details={services} />;
      default:
        return null;
    }
  }
  if (loading) return <Loader />;
  const { heading, subHeading } = shopPage.innerBanner;
  return (
    <main className="innerPage shop">
      <MetaDecorator seo={shopPage.seo} />
      <InnerBanner heading={heading}>
        <h3> {subHeading}</h3>
      </InnerBanner>
      <div className="grid grid-col90 shop__inner ">
        <div className="block__inner">
          <div className="shopHeader">
            {shop.map(({ name }, index) => {
              let classes = "btn ";
              const indexSelect = shop.indexOf(currentShop);
              classes += indexSelect === index ? "active" : "";
              return (
                <Button
                  key={index}
                  text={name}
                  path={""}
                  className={classes}
                  onClick={(e) => {
                    handleShop(index, e);
                  }}
                />
              );
            })}
          </div>
          <div className="shopBody ">{shopBody(currentShop)}</div>
        </div>
      </div>
    </main>
  );
}

export default Shop;
