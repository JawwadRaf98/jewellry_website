import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const OurMission = () => {
  return (
    <Container>
      <Row className="py-5">
        <Col lg="4">
          <div>
            <Image src={require("../../Assets/ourmission.png")} />
          </div>
        </Col>
        <Col lg="8" className="bg-neckles-one">
          <div className="pb-56 pt-3">
            <div className="p-3">
              <h2 className="text-3xl text-white font-semibold">Our Mission</h2>
              <p className="text-sm text-white py-3">
                At LAVISA, we're more than just a jewelry brand - we're on a
                mission to empower people to express themselves through
                high-end, beautifully crafted jewelry. Our commitment to
                eco-friendly materials, modern designs, and exceptional customer
                service sets us apart from the competition. We're dedicated to
                creating pieces that match your mood and help you showcase your
                unique sense of style. From the moment you choose LAVISA, you'll
                experience the elegance and perfection that defines our brand.
                Join us in our mission to embrace your individuality and
                celebrate the beauty of high-quality, everyday jewelry.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OurMission;
