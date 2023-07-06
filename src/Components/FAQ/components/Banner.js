import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <Container fluid className="bg">
      <div className="aboutContent">
        <Container>
          <Row className="align-items-center py-28">
            <Col lg="12">
              <div className="p-3 webkit text-white">
                {/* <h2 className="text-lg" style={{ color: "#C7C7C7" }}>
              About Us
              </h2> */}
                <p className="text-lg" style={{ color: "#C7C7C7" }}>
                  Shop All / Necklaces
                </p>
                <h3 className="text-3xl">NECKLACES AND PENDANTS</h3>
                <p className="text-lg" style={{ color: "#C7C7C7" }}>
                  Couples are some of our favorite subjects, nothing beats the
                  true emotion of someone in love.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default Banner;
