import React from "react";

import { Col, Container, Row, Button, Image, FormCheck } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

const NECKLACES = () => {
  return (
    // <div className="px-3">
    //   <Container>
    //     <Row>
    //       <Col lg="12">
    //         <div className="bgAbout p-3">
    //           <Row>
    //             <Col>
    //               <Swiper
    //                 style={{ textAlign: "center" }}
    //                 slidesPerView={4}
    //                 spaceBetween={10}
    //                 breakpoints={{
    //                   "@0.00": {
    //                     slidesPerView: 1,
    //                     spaceBetween: 10,
    //                   },
    //                   "@0.75": {
    //                     slidesPerView: 4,
    //                     spaceBetween: 20,
    //                   },
    //                   "@1.00": {
    //                     slidesPerView: 4,
    //                     spaceBetween: 40,
    //                   },
    //                   "@1.50": {
    //                     slidesPerView: 4,
    //                     spaceBetween: 50,
    //                   },
    //                 }}
    //                 className="mySwiper zindex"
    //               >
    //                 <SwiperSlide>
    //                   <div className="p-1">
    //                     <div
    //                       className="rounded-b-lg webkit"
    //                       style={{ background: "rgb(36, 36, 36)" }}
    //                     >
    //                       <Image
    //                         src={require("../../../Assets/Rectangle.png")}
    //                       />
    //                       <div className="p-2 webkit">
    //                         <h2 className="text-sm text-white">Milancelos</h2>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </SwiperSlide>
    //                 <SwiperSlide>
    //                   <div className="p-1">
    //                     <div
    //                       className="rounded-b-lg webkit"
    //                       style={{ background: "rgb(36, 36, 36)" }}
    //                     >
    //                       <Image
    //                         src={require("../../../Assets/Rectangle.png")}
    //                       />
    //                       <div className="p-2 webkit">
    //                         <h2 className="text-sm text-white">Milancelos</h2>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </SwiperSlide>
    //                 <SwiperSlide>
    //                   <div className="p-1">
    //                     <div
    //                       className="rounded-b-lg webkit"
    //                       style={{ background: "rgb(36, 36, 36)" }}
    //                     >
    //                       <Image
    //                         src={require("../../../Assets/Rectangle.png")}
    //                       />
    //                       <div className="p-2 webkit">
    //                         <h2 className="text-sm text-white">Milancelos</h2>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </SwiperSlide>

    //                 <SwiperSlide>
    //                   <div className="p-1">
    //                     <div
    //                       className="rounded-b-lg webkit"
    //                       style={{ background: "rgb(36, 36, 36)" }}
    //                     >
    //                       <Image
    //                         src={require("../../../Assets/Rectangle.png")}
    //                       />
    //                       <div className="p-2 webkit">
    //                         <h2 className="text-sm text-white">Milancelos</h2>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </SwiperSlide>
    //                 <SwiperSlide>
    //                   <div className="p-1">
    //                     <div
    //                       className="rounded-b-lg webkit"
    //                       style={{ background: "rgb(36, 36, 36)" }}
    //                     >
    //                       <Image
    //                         src={require("../../../Assets/Rectangle.png")}
    //                       />
    //                       <div className="p-2 webkit">
    //                         <h2 className="text-sm text-white">Milancelos</h2>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </SwiperSlide>
    //               </Swiper>
    //             </Col>
    //           </Row>
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
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

export default NECKLACES;
