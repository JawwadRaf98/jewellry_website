import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { TbBuildingSkyscraper } from "react-icons/tb";

const QUICKACTIONS = () => {
  return (
    <Container>
      <Row className="py-4">
        <div className="text-left py-3">
          <h2 className="text-2xl text-white">QUICK ACTIONS</h2>
        </div>
        <Col>
          <div className="d-flex mt-3">
            <div
              className="py-9 px-7 icon-new"
              style={{ background: "#BF8635" }}
            >
              <a>
                <TbBuildingSkyscraper />
              </a>
            </div>
            <div className="p-2 bg-white py-3">
              <h2 className="text-lg">Jewelry</h2>
              <p style={{ fontSize: "14px", color: "#5B5B5B" }}>
                We use high-quality materials such as 100% stainless steel
                (material type: Surgical Stainless Steel 316),
              </p>
              <button className="btn-borderless">Read More</button>
            </div>
          </div>
        </Col>
        <Col>
          <div className="d-flex mt-3">
            <div
              className="py-9 px-7 icon-new"
              style={{ background: "#BF8635" }}
            >
              <a>
                <TbBuildingSkyscraper />
              </a>
            </div>
            <div className="p-2 bg-white py-3">
              <h2 className="text-lg">Damage Products</h2>
              <p style={{ fontSize: "14px", color: "#5B5B5B" }}>
                We apologize for any inconvenience caused. If your Lavisa
                product arrives damaged or defective,
              </p>
              <button className="btn-borderless">Read More</button>
            </div>
          </div>
        </Col>
        <Col>
          <div className="d-flex mt-3">
            <div
              className="py-9 px-7 icon-new"
              style={{ background: "#BF8635" }}
            >
              <a>
                <TbBuildingSkyscraper />
              </a>
            </div>
            <div className="p-2 bg-white py-3">
              <h2 className="text-lg">Return & Refunds</h2>
              <p style={{ fontSize: "14px", color: "#5B5B5B" }}>
                Lavisa accepts returns within 1 year of purchase, as long as the
                product is in its original condition.
              </p>
              <button className="btn-borderless">Read More</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default QUICKACTIONS;
