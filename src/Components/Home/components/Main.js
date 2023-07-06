import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Container fluid>
        <div className="content">
          <Container>
            <Row className="align-items-center pt-32">
              <Col lg="6">
                <div className="p-3 webkit text-white">
                  <h2 className="text-lg" style={{ color: "#C7C7C7" }}>
                    NEW ARRIVALS
                  </h2>
                  <h3 className="text-3xl">Milancelos</h3>
                  <p className="text-lg" style={{ color: "#C7C7C7" }}>
                    Couples are some of our favorite subjects, nothing beats the
                    true emotion of someone in love. Details are awesome too.
                  </p>
                  <div className="py-3">
                    <Link to="/ShopCategory">
                      <button className="btnMain px-5">SHOP NOW</button>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <div className="p-3 webkit">
                  <Image
                    className="w-4/5"
                    src={require("../../Assets/box.png")}
                  />
                </div>
              </Col>
            </Row>
          </Container>
          <div className="p-2 webkit">
            <h2 className="text-2xl text-white">New Arrivals</h2>
            <p className="text-lg" style={{ color: "#C7C7C7" }}>
              View All
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Main;
