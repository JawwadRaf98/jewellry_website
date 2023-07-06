import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const AboutusContent = () => {
  return (
    <Container>
      <Row className="py-5">
        <Col lg="8" style={{ background: "#1A1A1A" }}>
          <div className="p-3" style={{ background: "#1A1A1A" }}>
            <h2 className="text-3xl text-white font-semibold">About Us</h2>
            <p className="text-sm text-white py-3">
              Welcome to LAVISA, where we believe that everyone deserves to look
              and feel their best. We are a prestigious jewelry brand recognized
              around the world and are passionate about encouraging people to
              develop their own sense of style and express themselves through
              our stunning high-end jewelry collection.
              <br />
              <br />
              At LAVISA, we believe that fashion should be accessible to
              everyone, no matter what your personal style preferences,
              financial status, or gender. We are offering a wide range of
              unisex jewelry options that are unique, stylish, and unmatched in
              terms of both price and quality.
              <br />
              <br />
              We want you to feel stunning, attractive, and unstoppable in
              everything you wear. Our crystal and non-crystal jewelry selection
              is designed to help you shine and stand out from the crowd,
              whether dressing up for a formal or special occasion or adding
              some extra sparkle to your everyday wear.
              <br />
              <br />
              At LAVISA, we are committed to encouraging our customers to
              develop their own sense of style since we think that fashion is
              about self-expression. We invite you to explore our collection, we
              bring you a wide range of spectacular necklaces, stylish earrings,
              exquisite rings, attractive bracelets, and much more. Don’t be
              late, discover the perfect piece of fashionable jewelry that
              enhances your sense of self-assurance and beauty.
              <br />
            </p>
          </div>
        </Col>
        <Col lg="4">
          <div>
            <Image
              style={{ opacity: "0.8" }}
              src={require("../../Assets/aboutimg.png")}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutusContent;
