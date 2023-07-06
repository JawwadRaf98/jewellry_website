import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const YOUMIGHTALSOLIKE = () => {
  return (
    <Container>
      <Row className="py-5">
        <div className="text-left">
          <h2 className="text-2xl text-white">YOU MIGHT ALSO LIKE</h2>
        </div>
      </Row>
      <Row className="py-4">
        <Col xs="6" lg="3">
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
                <div className="py-3 bg-white text-left">
                  <button
                    className="btn-sale p-3 px-4 ml-3 text-white"
                    style={{ background: "#BF8635" }}
                  >
                    Sale
                  </button>
                  <Image
                    style={{
                      height: "auto",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/ring.png")}
                  />
                </div>
                <div
                  className="webkit py-3 p-2 category"
                  style={{ background: "#1A1A1A" }}
                >
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
                <div className="py-3 bg-white text-left">
                  <button
                    className="btn-sale p-3 px-4 ml-3 text-white"
                    style={{ background: "#BF8635" }}
                  >
                    Sale
                  </button>
                  <Image
                    style={{
                      height: "auto",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/ring.png")}
                  />
                </div>
                <div
                  className="webkit py-3 p-2 category"
                  style={{ background: "#1A1A1A" }}
                >
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
                <div className="py-3 bg-white text-left">
                  <button
                    className="btn-sale p-3 px-4 ml-3 text-white"
                    style={{ background: "#BF8635" }}
                  >
                    Sale
                  </button>
                  <Image
                    style={{
                      height: "auto",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/ring.png")}
                  />
                </div>
                <div
                  className="webkit py-3 p-2 category"
                  style={{ background: "#1A1A1A" }}
                >
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
                <div className="py-3 bg-white text-left">
                  <button
                    className="btn-sale p-3 px-4 ml-3 text-white"
                    style={{ background: "#BF8635" }}
                  >
                    Sale
                  </button>
                  <Image
                    style={{
                      height: "auto",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/ring.png")}
                  />
                </div>
                <div
                  className="webkit py-3 p-2 category"
                  style={{ background: "#1A1A1A" }}
                >
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
        <Col xs="6" lg="3">
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
                <div className="py-3 bg-white text-left">
                  <button
                    className="btn-sale p-3 px-4 ml-3 text-white"
                    style={{ background: "#BF8635" }}
                  >
                    Sale
                  </button>
                  <Image
                    style={{
                      height: "auto",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/ring.png")}
                  />
                </div>
                <div
                  className="webkit py-3 p-2 category"
                  style={{ background: "#1A1A1A" }}
                >
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
                <div className="py-3 bg-white text-left">
                  <button
                    className="btn-sale p-3 px-4 ml-3 text-white"
                    style={{ background: "#BF8635" }}
                  >
                    Sale
                  </button>
                  <Image
                    style={{
                      height: "auto",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/ring.png")}
                  />
                </div>
                <div
                  className="webkit py-3 p-2 category"
                  style={{ background: "#1A1A1A" }}
                >
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
                <div className="py-3 bg-white text-left">
                  <button
                    className="btn-sale p-3 px-4 ml-3 text-white"
                    style={{ background: "#BF8635" }}
                  >
                    Sale
                  </button>
                  <Image
                    style={{
                      height: "auto",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/ring.png")}
                  />
                </div>
                <div
                  className="webkit py-3 p-2 category"
                  style={{ background: "#1A1A1A" }}
                >
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
                <div className="py-3 bg-white text-left">
                  <button
                    className="btn-sale p-3 px-4 ml-3 text-white"
                    style={{ background: "#BF8635" }}
                  >
                    Sale
                  </button>
                  <Image
                    style={{
                      height: "auto",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/ring.png")}
                  />
                </div>
                <div
                  className="webkit py-3 p-2 category"
                  style={{ background: "#1A1A1A" }}
                >
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
        <Col xs="6" lg="3">
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
                <div className="py-3 bg-white text-left">
                  <button
                    className="btn-sale p-3 px-4 ml-3 text-white"
                    style={{ background: "#BF8635" }}
                  >
                    Sale
                  </button>
                  <Image
                    style={{
                      height: "auto",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/ring.png")}
                  />
                </div>
                <div
                  className="webkit py-3 p-2 category"
                  style={{ background: "#1A1A1A" }}
                >
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
                <div className="py-3 bg-white text-left">
                  <button
                    className="btn-sale p-3 px-4 ml-3 text-white"
                    style={{ background: "#BF8635" }}
                  >
                    Sale
                  </button>
                  <Image
                    style={{
                      height: "auto",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/ring.png")}
                  />
                </div>
                <div
                  className="webkit py-3 p-2 category"
                  style={{ background: "#1A1A1A" }}
                >
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
                <div className="py-3 bg-white text-left">
                  <button
                    className="btn-sale p-3 px-4 ml-3 text-white"
                    style={{ background: "#BF8635" }}
                  >
                    Sale
                  </button>
                  <Image
                    style={{
                      height: "auto",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/ring.png")}
                  />
                </div>
                <div
                  className="webkit py-3 p-2 category"
                  style={{ background: "#1A1A1A" }}
                >
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
                <div className="py-3 bg-white text-left">
                  <button
                    className="btn-sale p-3 px-4 ml-3 text-white"
                    style={{ background: "#BF8635" }}
                  >
                    Sale
                  </button>
                  <Image
                    style={{
                      height: "auto",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/ring.png")}
                  />
                </div>
                <div
                  className="webkit py-3 p-2 category"
                  style={{ background: "#1A1A1A" }}
                >
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
        <Col xs="6" lg="3">
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
                <div className="py-3 bg-white text-left">
                  <button
                    className="btn-sale p-3 px-4 ml-3 text-white"
                    style={{ background: "#BF8635" }}
                  >
                    Sale
                  </button>
                  <Image
                    style={{
                      height: "auto",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/ring.png")}
                  />
                </div>
                <div
                  className="webkit py-3 p-2 category"
                  style={{ background: "#1A1A1A" }}
                >
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
                <div className="py-3 bg-white text-left">
                  <button
                    className="btn-sale p-3 px-4 ml-3 text-white"
                    style={{ background: "#BF8635" }}
                  >
                    Sale
                  </button>
                  <Image
                    style={{
                      height: "auto",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/ring.png")}
                  />
                </div>
                <div
                  className="webkit py-3 p-2 category"
                  style={{ background: "#1A1A1A" }}
                >
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
                <div className="py-3 bg-white text-left">
                  <button
                    className="btn-sale p-3 px-4 ml-3 text-white"
                    style={{ background: "#BF8635" }}
                  >
                    Sale
                  </button>
                  <Image
                    style={{
                      height: "auto",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/ring.png")}
                  />
                </div>
                <div
                  className="webkit py-3 p-2 category"
                  style={{ background: "#1A1A1A" }}
                >
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
                <div className="py-3 bg-white text-left">
                  <button
                    className="btn-sale p-3 px-4 ml-3 text-white"
                    style={{ background: "#BF8635" }}
                  >
                    Sale
                  </button>
                  <Image
                    style={{
                      height: "auto",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={require("../../Assets/ring.png")}
                  />
                </div>
                <div
                  className="webkit py-3 p-2 category"
                  style={{ background: "#1A1A1A" }}
                >
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
      </Row>
    </Container>
  );
};

export default YOUMIGHTALSOLIKE;
