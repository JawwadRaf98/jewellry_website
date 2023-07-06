import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const BottomFooter = () => {
  return (
    // <div
    //   className="d-flex justify-between p-4"
    //   style={{ backgroundColor: "#BF8635" }}
    // >
    //   <div>
    //     © 2023 | Peacora Limited | All Rights Reserved | United We Sweat
    //   </div>
    //   <div>
    //     <Row>
    //       <Col lg="2">
    //         <h2 className="text-sm">Terms & Conditions</h2>
    //       </Col>
    //       <Col lg="2">Terms of Use</Col>
    //       <Col lg="2">Privacy Notice</Col>
    //       <Col lg="2">Cookie Policy</Col>
    //       <Col lg="2">Modern Slavery</Col>
    //     </Row>
    //   </div>
    // </div>
    <Container fluid style={{ backgroundColor: "#BF8635" }} className="py-3">
      <Container>
        <Row>
          <Col lg="5">
            <div>
              <h2 className="text-footer">
                © 2023 | Peacora Limited | All Rights Reserved | United We Sweat
              </h2>
            </div>
          </Col>
          <Col lg="7">
            <div className="d-flex gap-2 justify-end">
              <h2 className="text-footer">Terms & Conditions</h2>
              <h2 className="text-footer">Terms of Use</h2>
              <h2 className="text-footer">Privacy Notice</h2>
              <h2 className="text-footer">Cookie Policy</h2>
              <h2 className="text-footer">Modern Slavery</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
