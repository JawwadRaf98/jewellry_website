import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const AboutMain = () => {
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
                <h3 className="text-3xl">About Us</h3>
                <p className="text-lg" style={{ color: "#C7C7C7" }}>
                  Welcome to LAVISA, where we believe that everyone deserves to
                  look and feel their best.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default AboutMain;
