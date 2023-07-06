import React from "react";

import { Col, Container, Row, Button, Image, FormCheck } from "react-bootstrap";
import { Link } from "react-router-dom";

const Default = () => {
  return (
    <div className="px-3">
      <Container>
        <Row>
          <Col lg="12">
            <div className="bgAbout p-3">
              <Row xs={2} md={4} lg={6} className="justify-center">
                <Col>
                  <Link to="/ShopCategory">
                    <div className="p-1">
                      <div
                        className="rounded-b-lg webkit brast"
                        style={{ background: "rgb(36, 36, 36)" }}
                      >
                        <Image src={require("../../../Assets/Rectangle.png")} />
                        <div className="p-2 webkit">
                          <h2 className="text-sm text-white">Milancelos</h2>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Col>
                <Col>
                  <Link to="/ShopCategory">
                    <div className="p-1">
                      <div
                        className="rounded-b-lg webkit brast"
                        style={{ background: "rgb(36, 36, 36)" }}
                      >
                        <Image src={require("../../../Assets/Rectangle.png")} />
                        <div className="p-2 webkit">
                          <h2 className="text-sm text-white">Milancelos</h2>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Col>

                <Col>
                  <Link to="/ShopCategory">
                    <div className="p-1">
                      <div
                        className="rounded-b-lg webkit brast"
                        style={{ background: "rgb(36, 36, 36)" }}
                      >
                        <Image src={require("../../../Assets/Rectangle.png")} />
                        <div className="p-2 webkit">
                          <h2 className="text-sm text-white">Milancelos</h2>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Col>
                <Col>
                  <Link to="/ShopCategory">
                    <div className="p-1">
                      <div
                        className="rounded-b-lg webkit brast"
                        style={{ background: "rgb(36, 36, 36)" }}
                      >
                        <Image src={require("../../../Assets/Rectangle.png")} />
                        <div className="p-2 webkit">
                          <h2 className="text-sm text-white">Milancelos</h2>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Col>
                <Col>
                  <Link to="/ShopCategory">
                    <div className="p-1">
                      <div
                        className="rounded-b-lg webkit brast"
                        style={{ background: "rgb(36, 36, 36)" }}
                      >
                        <Image src={require("../../../Assets/Rectangle.png")} />
                        <div className="p-2 webkit">
                          <h2 className="text-sm text-white">Milancelos</h2>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Default;
