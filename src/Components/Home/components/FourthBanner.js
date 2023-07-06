import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const FourthBanner = () => {
  return (
    <Container>
      <Row className="py-5 align-items-center">
        <Col lg="4">
          <Row>
            <Col>
              <Link to="/ShopCategory">
                <div className="p-3">
                  <div
                    className="rounded-b-lg"
                    style={{ background: "#242424" }}
                  >
                    {/* <div className="h-40 w-40"> */}
                    <Image
                      className="object-cover w-full"
                      src={require("../../Assets/Rectangle.png")}
                    />
                    <div className="p-2 webkit">
                      <h2 className="sm text-white">Milancelos</h2>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to="/ShopCategory">
                <div className="p-3">
                  <div
                    className="rounded-b-lg"
                    style={{ background: "#242424" }}
                  >
                    {/* <div className="h-40 w-40"> */}
                    <Image
                      className="object-cover w-full"
                      src={require("../../Assets/Rectangle.png")}
                    />
                    <div className="p-2 webkit">
                      <h2 className="sm text-white">Milancelos</h2>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/ShopCategory">
                <div className="p-3">
                  <div
                    className="rounded-b-lg"
                    style={{ background: "#242424" }}
                  >
                    {/* <div className="h-40 w-40"> */}
                    <Image
                      className="object-cover w-full"
                      src={require("../../Assets/Rectangle.png")}
                    />
                    <div className="p-2 webkit">
                      <h2 className="sm text-white">Milancelos</h2>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to="/ShopCategory">
                <div className="p-3">
                  <div
                    className="rounded-b-lg"
                    style={{ background: "#242424" }}
                  >
                    {/* <div className="h-40 w-40"> */}
                    <Image
                      className="object-cover w-full"
                      src={require("../../Assets/Rectangle.png")}
                    />
                    <div className="p-2 webkit">
                      <h2 className="sm text-white">Milancelos</h2>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col lg="8" className="grad">
          <div className="bg-daimond-one">
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
      </Row>
    </Container>
  );
};

export default FourthBanner;
