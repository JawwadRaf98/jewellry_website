import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Image, FormCheck } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BRACELETS from "./Tabs/BRACELETS";
import Default from "./Tabs/Default";
import NECKLACES from "./Tabs/NECKLACES";
import EARRINGS from "./Tabs/EARRINGS";
import RINGS from "./Tabs/RINGS";
import SHOPBYPREFERENCE from "./Tabs/SHOPBYPREFERENCE";
const ShopTabs = () => {
  const [profileTabNavigation, setProfileTabNavigation] = useState("");

  const Component = () => {
    if (profileTabNavigation === "Default") {
      return <Default />;
    } else if (profileTabNavigation === "NECKLACES") {
      return <NECKLACES />;
    } else if (profileTabNavigation === "EARRINGS") {
      return <EARRINGS />;
    } else if (profileTabNavigation === "BRACELETS") {
      return <BRACELETS />;
    } else if (profileTabNavigation === "RINGS") {
      return <RINGS />;
    } else if (profileTabNavigation === "SHOPBYPREFERENCE") {
      return <SHOPBYPREFERENCE />;
    } else {
      return <Default />;
    }
    // } else if (profileTabNavigation === "Defauld") {
    //   return <Default onDataFromChild={capeTownFunc} />;
    // } else {
    //   return <Default onDataFromChild={capeTownFunc} />;
    // }
  };
  return (
    <Container fluid className="bg">
      <div className="shopContent">
        <Container>
          <Tabs>
            <Row>
              <Col lg="3" className="clacla">
                <TabList>
                  <Tab onClick={() => setProfileTabNavigation("Default")}>
                    <h5>SHOP ALL</h5>
                  </Tab>
                  <Tab onClick={() => setProfileTabNavigation("NECKLACES")}>
                    <h5>NECKLACES</h5>
                  </Tab>
                  <Tab onClick={() => setProfileTabNavigation("EARRINGS")}>
                    <h5>EARRINGS</h5>
                  </Tab>
                  <Tab onClick={() => setProfileTabNavigation("BRACELETS")}>
                    <h5>BRACELETS</h5>
                  </Tab>
                  <Tab onClick={() => setProfileTabNavigation("RINGS")}>
                    <h5>RINGS</h5>
                  </Tab>
                  <Tab
                    onClick={() => setProfileTabNavigation("SHOPBYPREFERENCE")}
                  >
                    <h5>SHOP BY PREFERENCE</h5>
                  </Tab>
                  {/* <Tab onClick={() => setProfileTabNavigation("ContactUs")}>
                <h5>CONTACT US</h5>
              </Tab>
              <Tab onClick={() => setProfileTabNavigation("Disclaimer")}>
                <h5>DISCLAIMER</h5>
              </Tab>
              <Tab onClick={() => setProfileTabNavigation("MyFavorite")}>
                <h5>MY FAVOURITES</h5>
              </Tab>
              <Tab>
                <h5>SALONS</h5>
              </Tab> */}
                </TabList>
              </Col>
              <Col lg="9">
                <view>
                  <Component />
                </view>
              </Col>
            </Row>
          </Tabs>
        </Container>
      </div>
    </Container>
  );
};

export default ShopTabs;
