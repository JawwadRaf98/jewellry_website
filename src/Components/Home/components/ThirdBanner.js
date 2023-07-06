import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ThirdBanner = () => {
  return (
    <Container>
      <Row className="align-items-end">
        <Col lg="7">
          <div className="bg-daimond">
            <Row className="align-items-end">
              <Col>
                <div className="p-3 float-right text">
                  <h2 className="text-white text-3xl text-left">
                    New Arrivals <br />
                    Milancelos
                    <br /> Dumy Text Title
                  </h2>
                  <div className="py-3">
                    <Link to="/ShopCategory">
                      <button className="btnMain">SHOP NOW</button>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg="5">
          <div className="bg-neckles pb-56 pt-3">
            <Row className="align-items-end">
              <Col>
                <div className="p-3 webkit">
                  <p className="text-lg" style={{ color: "#C7C7C7" }}>
                    New Arrivals
                  </p>
                  <h2 className="text-white text-3xl">Milancelos</h2>
                  <p className="text-lg" style={{ color: "#C7C7C7" }}>
                    Couples are some of our favorite subjects,{" "}
                  </p>
                  <div className="py-3">
                    <Link to="/ShopCategory">
                      <button className="btnMain">SHOP NOW</button>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ThirdBanner;
