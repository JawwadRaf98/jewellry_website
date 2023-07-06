import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const CustomerSatisfaction = () => {
  return (
    <Container>
      <Row className="py-5">
        <div className="webkit">
          <h2 className="text-2xl text-white">Customer Satisfaction</h2>
          <p className="text-sm py-2" style={{ color: "#C7C7C7" }}>
            At LAVISA, we take customer satisfaction very seriously. We want you
            to feel confident and happy
            <br /> with your purchase every time you choose to shop with us.
            <br />
            Here's what you can expect when you choose LAVISA for your jewelry
            needs
          </p>
        </div>
      </Row>
      <Row>
        <Col lg="8" className="py-2" style={{ background: "#1A1A1A" }}>
          <div className="p-3 textleft">
            <div className="boxexs">
              <h2 className="text-lg text-white">Easy Returns and Refunds:</h2>
              <p className="text-sm py-2" style={{ color: "#C7C7C7" }}>
                We understand that sometimes things don't work out, which is why
                we offer a hassle-free returns policy.
                <br />
                If you're not completely satisfied with your purchase, simply
                return it within 1 year for a full refund.
                <br />
                (Note: Please ensure to review our Return and Refund Policy
                prior to making a claim.)
              </p>
            </div>
            <div className="boxexs">
              <h2 className="text-lg text-white">
                Excellent Customer Service:
              </h2>
              <p className="text-sm py-2" style={{ color: "#C7C7C7" }}>
                Our team provides you with exceptional customer service. Whether
                you have a question about a product,
                <br />
                need help with your order, or want to give us feedback, we're
                always here to help. You can reach us via
                <br />
                email (add email address), or call (add number), and we'll do
                our best to respond promptly and effectively.
              </p>
            </div>
            <div className="boxexs">
              <h2 className="text-lg text-white">Secure Shopping:</h2>
              <p className="text-sm py-2" style={{ color: "#C7C7C7" }}>
                We take the security of your personal information seriously. Our
                website is equipped with the latest security
                <br />
                protocols to ensure that your data is safe and secure when you
                shop with us.
              </p>
            </div>
            <div className="boxexs">
              <h2 className="text-lg text-white">
                Secure ShoppingCustomer Reviews:
              </h2>
              <p className="text-sm py-2" style={{ color: "#C7C7C7" }}>
                We love hearing from our customers! You can visit our official
                Insta and TikTok pages (@ lavisa jewelry) and
                <br />
                read reviews from other LAVISA shoppers to better understand
                what to expect from our jewelry collection.
                <br />
                And if you're happy with your purchase, we'd love it if you left
                us a review too.
              </p>
            </div>
            <div className="py-2">
              <Image
                className="w-8/12"
                src={require("../../Assets/gold.png")}
              />
            </div>
          </div>
        </Col>
        <Col lg="4" className="py-2">
          <div>
            <Image
              style={{ opacity: "0.8" }}
              src={require("../../Assets/satisfy.png")}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerSatisfaction;
