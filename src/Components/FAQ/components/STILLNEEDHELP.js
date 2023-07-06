import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { BiChat } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
const STILLNEEDHELP = () => {
  return (
    <Container>
      <Row className="py-4 bbnn">
        <div className="webkit py-3">
          <h2 className="text-2xl text-white">STILL NEED HELP?</h2>
        </div>
      </Row>
      <Row xs={2} md={4} lg={8}>
        <Col>
          <div className="bxsbx webkit py-4">
            <AiOutlineMail />
            <h2 className="text-lg" style={{ color: "#FFFFFF" }}>
              Email
            </h2>
            <h2 className="text-sm" style={{ color: "#FFFFFF" }}>
              Contact@lavisa.com
            </h2>
          </div>
        </Col>
        <Col>
          <div className="bxsbx webkit py-4">
            <BiChat />
            <h2 className="text-lg" style={{ color: "#FFFFFF" }}>
              Text
            </h2>
            <h2 className="text-sm" style={{ color: "#FFFFFF" }}>
              (+12) 345-67890
            </h2>
          </div>
        </Col>
        <Col>
          <div className="bxsbx webkit py-4">
            <GoLocation />
            <h2 className="text-lg" style={{ color: "#FFFFFF" }}>
              Visit Us
            </h2>
            <h2 className="text-sm" style={{ color: "#FFFFFF" }}>
              Find your nearest store
            </h2>
          </div>
        </Col>
        <Col>
          <div className="bxsbx webkit py-4">
            <FiUsers />
            <h2 className="text-lg" style={{ color: "#FFFFFF" }}>
              Virtual Styling
            </h2>
            <h2 className="text-sm" style={{ color: "#FFFFFF" }}>
              Video chat with our stylist
            </h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default STILLNEEDHELP;
