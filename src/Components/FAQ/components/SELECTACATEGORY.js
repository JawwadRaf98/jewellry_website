import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JewelryQuestion from "./Categories/JewelryQuestion";
import Questions from "./Questions";
const SELECTACATEGORY = () => {
  return (
    <Container>
      <Row className="py-4 bbnn">
        <div className="text-left py-3">
          <h2 className="text-2xl text-white">SELECT A CATEGORY</h2>
        </div>
        <Tabs>
          <Col lg="12">
            <TabList>
              <Tab>Jewelry</Tab>
              <Tab>Damage Products</Tab>
              <Tab>Return & Refunds</Tab>
              <Tab>Deals and Promotions</Tab>
              <Tab>LAVISA Point System</Tab>
              <Tab>Other</Tab>
            </TabList>
          </Col>

          <Col lg="12">
            <TabPanel>
              <div>
                <Questions />
                <JewelryQuestion />
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <Questions />
                <JewelryQuestion />
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <Questions />
                <JewelryQuestion />
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <Questions />
                <JewelryQuestion />
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <Questions />
                <JewelryQuestion />
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <Questions />
                <JewelryQuestion />
              </div>
            </TabPanel>
          </Col>
        </Tabs>
      </Row>
    </Container>
  );
};

export default SELECTACATEGORY;
