import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SecondBanner = () => {
  return (
    <Container>
      <Row className="py-5">
        <Col xs="6" lg="3">
          <div className="p-3 boxes webkit text-white">
            <div className="h-40 w-40">
              <Image
                className="object-cover w-full"
                src={require("../../Assets/jewellry.png")}
              />
            </div>
            <h2 className="text-lg">Milancelos</h2>
            <Link to="/ShopCategory">
              <button className="btnMain mt-2 btn-sale">SHOP NOW</button>
            </Link>
          </div>
        </Col>
        <Col xs="6" lg="3">
          <div className="p-3 boxes webkit text-white">
            <div className="h-40 w-40">
              <Image
                className="object-cover w-full"
                src={require("../../Assets/ring.png")}
              />
            </div>
            <h2 className="text-lg">Milancelos</h2>
            <Link to="/ShopCategory">
              <button className="btnMain mt-2 btn-sale">SHOP NOW</button>
            </Link>
          </div>
        </Col>
        <Col xs="6" lg="3">
          <div className="p-3 boxes webkit text-white">
            <div className="h-40 w-40">
              <Image
                className="object-cover w-full"
                src={require("../../Assets/jewellry.png")}
              />
            </div>
            <h2 className="text-lg">Milancelos</h2>
            <Link to="/ShopCategory">
              <button className="btnMain mt-2 btn-sale">SHOP NOW</button>
            </Link>
          </div>
        </Col>
        <Col xs="6" lg="3">
          <div className="p-3 boxes webkit text-white">
            <div className="h-40 w-40">
              <Image
                className="object-cover w-full"
                src={require("../../Assets/ring.png")}
              />
            </div>
            <h2 className="text-lg">Milancelos</h2>
            <Link to="/ShopCategory">
              <button className="btnMain mt-2 btn-sale">SHOP NOW</button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SecondBanner;
