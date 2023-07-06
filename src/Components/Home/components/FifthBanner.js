import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
const FifthBanner = () => {
  return (
    <Container>
      <Row className="py-5 align-items-center">
        <Col lg="6">
          <div className="bg-daimond">
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
        <Col lg="4" style={{ background: "#1A1A1A" }}>
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
              <div>
                <div className="py-3 webkit">
                  <Image
                    style={{
                      height: "auto",
                      width: "90%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/slide.png")}
                  />
                </div>
                <div className="webkit py-3">
                  <h2 className="text-white text-lg">Title</h2>
                  <h2 className="text-white text-lg pt-1">
                    Lorem Ipsum simply dummy text...
                  </h2>
                  <h2 className="text-white text-lg pt-1">$2,867,00</h2>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <div className="py-3 webkit">
                  <Image
                    style={{
                      height: "auto",
                      width: "90%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/slide.png")}
                  />
                </div>
                <div className="webkit py-3">
                  <h2 className="text-white text-lg">Title</h2>
                  <h2 className="text-white text-lg pt-1">
                    Lorem Ipsum simply dummy text...
                  </h2>
                  <h2 className="text-white text-lg pt-1">$2,867,00</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="py-3 webkit">
                  <Image
                    style={{
                      height: "auto",
                      width: "90%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/slide.png")}
                  />
                </div>
                <div className="webkit py-3">
                  <h2 className="text-white text-lg">Title</h2>
                  <h2 className="text-white text-lg pt-1">
                    Lorem Ipsum simply dummy text...
                  </h2>
                  <h2 className="text-white text-lg pt-1">$2,867,00</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="py-3 webkit">
                  <Image
                    style={{
                      height: "auto",
                      width: "90%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/slide.png")}
                  />
                </div>
                <div className="webkit py-3">
                  <h2 className="text-white text-lg">Title</h2>
                  <h2 className="text-white text-lg pt-1">
                    Lorem Ipsum simply dummy text...
                  </h2>
                  <h2 className="text-white text-lg pt-1">$2,867,00</h2>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <div className="py-3 webkit">
                  <Image
                    style={{
                      height: "auto",
                      width: "90%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/slide.png")}
                  />
                </div>
                <div className="webkit py-3">
                  <h2 className="text-white text-lg">Title</h2>
                  <h2 className="text-white text-lg pt-1">
                    Lorem Ipsum simply dummy text...
                  </h2>
                  <h2 className="text-white text-lg pt-1">$2,867,00</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="py-3 webkit">
                  <Image
                    style={{
                      height: "auto",
                      width: "90%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/slide.png")}
                  />
                </div>
                <div className="webkit py-3">
                  <h2 className="text-white text-lg">Title</h2>
                  <h2 className="text-white text-lg pt-1">
                    Lorem Ipsum simply dummy text...
                  </h2>
                  <h2 className="text-white text-lg pt-1">$2,867,00</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="py-3 webkit">
                  <Image
                    style={{
                      height: "auto",
                      width: "90%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/slide.png")}
                  />
                </div>
                <div className="webkit py-3">
                  <h2 className="text-white text-lg">Title</h2>
                  <h2 className="text-white text-lg pt-1">
                    Lorem Ipsum simply dummy text...
                  </h2>
                  <h2 className="text-white text-lg pt-1">$2,867,00</h2>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <div className="py-3 webkit">
                  <Image
                    style={{
                      height: "auto",
                      width: "90%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/slide.png")}
                  />
                </div>
                <div className="webkit py-3">
                  <h2 className="text-white text-lg">Title</h2>
                  <h2 className="text-white text-lg pt-1">
                    Lorem Ipsum simply dummy text...
                  </h2>
                  <h2 className="text-white text-lg pt-1">$2,867,00</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="py-3 webkit">
                  <Image
                    style={{
                      height: "auto",
                      width: "90%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/slide.png")}
                  />
                </div>
                <div className="webkit py-3">
                  <h2 className="text-white text-lg">Title</h2>
                  <h2 className="text-white text-lg pt-1">
                    Lorem Ipsum simply dummy text...
                  </h2>
                  <h2 className="text-white text-lg pt-1">$2,867,00</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="py-3 webkit">
                  <Image
                    style={{
                      height: "auto",
                      width: "90%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/slide.png")}
                  />
                </div>
                <div className="webkit py-3">
                  <h2 className="text-white text-lg">Title</h2>
                  <h2 className="text-white text-lg pt-1">
                    Lorem Ipsum simply dummy text...
                  </h2>
                  <h2 className="text-white text-lg pt-1">$2,867,00</h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Col>
        <Col lg="2">
          <div
            className="webkit text-white res-pt"
            style={{ background: "#191919" }}
          >
            <div className="py-3">
              <div className="h-40 w-40">
                <Image
                  className="object-cover w-full"
                  src={require("../../Assets/jewellry.png")}
                />
              </div>
            </div>
            <div className="p-3" style={{ background: "#242424" }}>
              <h2 className="text-lg">Milancelos</h2>
              <Link to="/ShopCategory">
                <button className="btnMain mt-2">SHOP NOW</button>
              </Link>
            </div>
          </div>
          <br />
          <div
            className="webkit text-white res-pt"
            style={{ background: "#191919" }}
          >
            <div className="py-3">
              <div className="h-40 w-40">
                <Image
                  className="object-cover w-full"
                  src={require("../../Assets/jewellry.png")}
                />
              </div>
            </div>
            <div className="p-3" style={{ background: "#242424" }}>
              <h2 className="text-lg">Milancelos</h2>
              <Link to="/ShopCategory">
                <button className="btnMain mt-2">SHOP NOW</button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FifthBanner;
