import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SecondSection = () => {
  return (
    <Container>
      <Row className="py-4 align-items-center">
        <Col lg="6">
          <div className="p-2">
            <h2 className="text-lg" style={{ color: "#C7C7C7" }}>
              FILTER + SORT
            </h2>
          </div>
        </Col>
        <Col lg="6">
          <div className="p-2">
            <div className="d-flex gap-6 float-right broa">
              {/* <div>
                <h2 className="text-lg" style={{ color: "#C7C7C7" }}>
                  View as
                </h2>
              </div> */}
              <div className="d-flex gap-3 align-items-center">
                <h2 className="text-lg" style={{ color: "#C7C7C7" }}>
                  items per page
                </h2>
                <select name="size" id="size" className="p-2">
                  <option value="0" selected="">
                    10
                  </option>
                  <option value="9">9</option>
                  <option value="8">8</option>
                  <option value="7">7</option>
                  <option value="6">6</option>
                  <option value="5">5</option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                  <option value="1">1</option>
                </select>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <h2 className="text-lg" style={{ color: "#C7C7C7" }}>
                  Sort By
                </h2>
                <select name="size" id="size" className="p-2">
                  <option value="0" selected="">
                    Best Selling
                  </option>
                  <option value="9">9</option>
                  <option value="8">8</option>
                  <option value="7">7</option>
                  <option value="6">6</option>
                  <option value="5">5</option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                  <option value="1">1</option>
                </select>
              </div>
            </div>
          </div>
        </Col>
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

export default SecondSection;
