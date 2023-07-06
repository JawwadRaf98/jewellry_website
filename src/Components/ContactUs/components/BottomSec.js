import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BiFlag } from "react-icons/bi";

const BottomSec = () => {
  return (
    <Container>
      <Row className="py-5">
        <Col lg="12">
          <div className="p-3">
            <h2 className="text-sm text-white" style={{ wordSpacing: "3px" }}>
              You can also reach us through Phone calls or by emailing us. Our
              team of dedicated professionals is ready and waiting to assist you
              in any way. We guarantee that you'll be thrilled with the level of
              care and attention you receive. Thank you for choosing Lavisa.
              Details are here:
            </h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="4">
          <div className="text-white">
            <h2 className="text-lg">Offices</h2>
            <ul className="py-3 text-sm">
              <li className="py-2">
                United States 500 5th Avenue Suite 400, NY 10110
              </li>
              <li className="py-2">United Kingdom High St, Bromley BR1 1DN</li>
              <li className="py-2">
                Available Hours: Monday - Friday, 9 am - 5 pm EST.
              </li>
            </ul>
          </div>
        </Col>
        <Col lg="4">
          <div className="text-white">
            <h2 className="text-lg">For Quick Inquiries</h2>
            <ul className="py-3 text-sm">
              <li className="py-2 d-flex gap-2">
                <div>
                  <BiFlag />
                </div>
                <div>+123 34567890</div>
              </li>
              <li className="py-2">+123 34567890</li>
            </ul>
          </div>
        </Col>
        <Col lg="4">
          <div className="text-white">
            <h2 className="text-lg">Would you like to join our newsletter?</h2>
            <ul className="py-3 text-sm">
              <li className="py-2">
                <fieldset>
                  <input
                    class="form-control"
                    type="text"
                    name="Fname"
                    placeholder="Emter Your Email"
                    required=""
                    style={{ width: "100%" }}
                  />
                </fieldset>
              </li>
              <li className="py-2">
                <button className="btnyellow w-full">Subscribe Now</button>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BottomSec;
