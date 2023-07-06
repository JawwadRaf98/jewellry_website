import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { BsEye } from "react-icons/bs";
const Footer = () => {
  return (
    <Container
      fluid
      bgColor="light"
      className="text-center text-lg-start text-white"
    >
      {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div>
          <a href="" className="me-4 text-reset"></a>
          <a href="" className="me-4 text-reset"></a>
          <a href="" className="me-4 text-reset"></a>
          <a href="" className="me-4 text-reset"></a>
          <a href="" className="me-4 text-reset"></a>
          <a href="" className="me-4 text-reset"></a>
        </div>
      </section> */}

      <section className="">
        <Container className="text-left text-md-start mt-5 pt-5">
          <Row className="mt-3">
            <Col sm="6" md="3" lg="3" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-2">HELP</h6>
              <p>
                <a href="#!" className="text-reset">
                  FAQ
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Delivery
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Information
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Returns Policy
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Make A Return
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Submit a Fake
                </a>
              </p>
            </Col>

            <Col sm="6" md="3" lg="3" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-2">MY ACCOUNT</h6>

              <p>
                <a href="#!" className="text-reset">
                  Login
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Register
                </a>
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-2">PAGES</h6>
              <p>
                <a href="#!" className="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Shop
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  FAQ’S
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contact Us
                </a>
              </p>
            </Col>

            <Col md="4" lg="4" xl="4" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-2">
                MORE ABOUT PEACORA
              </h6>
              <Swiper
                style={{ textAlign: "center" }}
                slidesPerView={1}
                spaceBetween={10}
                // navigation
                pagination={true}
                loop={true}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  "@0.75": {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  "@1.00": {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  "@1.50": {
                    slidesPerView: 1,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper zindex"
              >
                <SwiperSlide>
                  <div className="webkit">
                    <div className="rounded-t-2xl">
                      <Image
                        style={{
                          height: "auto",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        src={require("../../Assets/fot.png")}
                      />
                      <div className="text-left p-2 rounded-b-2xl bg-white">
                        <h2 className="text-black text-lg font-semibold">
                          Lorem Ipsum
                        </h2>
                        <h2 className="text-black text-lg pt-1 font-normal">
                          Simply dummy text of the typesetting industry. Lorem
                          Ipsum
                        </h2>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="webkit">
                    <div className="rounded-t-2xl">
                      <Image
                        style={{
                          height: "auto",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        src={require("../../Assets/fot.png")}
                      />
                      <div className="text-left p-2 rounded-b-2xl bg-white">
                        <h2 className="text-black text-lg font-semibold">
                          Lorem Ipsum
                        </h2>
                        <h2 className="text-black text-lg pt-1 font-normal">
                          Simply dummy text of the typesetting industry. Lorem
                          Ipsum
                        </h2>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="webkit">
                    <div className="rounded-t-2xl">
                      <Image
                        style={{
                          height: "auto",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        src={require("../../Assets/fot.png")}
                      />
                      <div className="text-left p-2 rounded-b-2xl bg-white">
                        <h2 className="text-black text-lg font-semibold">
                          Lorem Ipsum
                        </h2>
                        <h2 className="text-black text-lg pt-1 font-normal">
                          Simply dummy text of the typesetting industry. Lorem
                          Ipsum
                        </h2>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="d-flex gap-1 align-items-center">
                <div>
                  <BsEye />
                </div>
                <div>
                  <h2 className="text-lg text-white">View All Gallery</h2>
                </div>
              </div>
            </Col>
            <Col md="12" lg="12" xl="12" className="mx-auto mb-4">
              <Row className="pt-5">
                <Col lg="3" className="py-2">
                  <Row>
                    <Col>
                      <Image
                        className="w-full object-cover"
                        src={require("../../Assets/visa-card.png")}
                      />
                    </Col>
                    <Col>
                      <Image
                        className="w-full object-cover"
                        src={require("../../Assets/mastercard-card.png")}
                      />
                    </Col>
                    <Col>
                      <Image
                        className="w-full object-cover"
                        src={require("../../Assets/paypal-card.png")}
                      />
                    </Col>
                    <Col>
                      <Image
                        className="w-full object-cover"
                        src={require("../../Assets/applepay-card.png")}
                      />
                    </Col>
                    <Col>
                      <Image
                        className="w-full object-cover"
                        src={require("../../Assets/amex-card.png")}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col lg="6"></Col>
                <Col lg="3" className="py-2">
                  <Row>
                    <Col>
                      <Image
                        className="w-10 object-cover"
                        src={require("../../Assets/facebook-48.png")}
                      />
                    </Col>
                    <Col>
                      <Image
                        className="w-10 object-cover"
                        src={require("../../Assets/instagram-48.png")}
                      />
                    </Col>
                    <Col>
                      <Image
                        className="w-10 object-cover"
                        src={require("../../Assets/pinterest-48.png")}
                      />
                    </Col>
                    <Col>
                      <Image
                        className="w-10 object-cover"
                        src={require("../../Assets/twitter-48.png")}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default Footer;
