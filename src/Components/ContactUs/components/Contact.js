import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const Contact = () => {
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
                <h3 className="text-3xl">CONTACT US</h3>
                <p className="text-lg" style={{ color: "#C7C7C7" }}>
                  Have a question? Feel free to check out our FAQs or send us an
                  email or text.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default Contact;
