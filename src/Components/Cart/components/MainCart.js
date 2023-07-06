import React, { useState } from "react";
import { Col, Container, FormCheck, Image, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineClose,
  AiOutlineHeart,
  AiTwotoneStar,
  AiOutlineCheck,
} from "react-icons/ai";

const MainCart = () => {
  const [sdp, setSdp] = useState("Shipping");
  const [shipping, setShipping] = useState(true);
  const [shippingbtn, setShippingbtn] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [payment, setPayment] = useState(false);
  //  Counter is a state initialized to 0
  const [counter, setCounter] = useState(0);

  // Function is called everytime increment button is clicked
  const handleClick1 = (e) => {
    // Counter state is incremented
    e.preventDefault();
    setCounter(counter + 1);
  };

  // Function is called everytime decrement button is clicked
  const handleClick2 = (e) => {
    // Counter state is decremented
    e.preventDefault();
    setCounter(counter - 1);
  };
  const shippingFunc = () => {
    // setShipping(!shipping);
    console.log("test");
    setShipping(false);
    setDelivery(true);
    // setSdp("Delivery");
  };
  const test1 = () => {
    setShipping(true);
    setDelivery(false);
    setPayment(false);
  };
  const deliveryFunc = () => {
    setSdp("Payment");
    setDelivery(false);
    setPayment(true);
    // setShipping(!shipping);
    // setDelivery(!delivery);
  };
  const test2 = () => {
    setDelivery(true);
    setPayment(false);
    setShipping(false);
  };
  const paymentFunc = () => {
    setPayment(false);
    // setSdp("Payment");
    // setDelivery(!delivery);
    // setPayment(!payment);
  };
  const test3 = () => {
    setPayment(true);
    setDelivery(false);
    setShipping(false);
  };

  let CHECKOUT = [
    {
      id: 1,
      image: require("../../Assets/ecommercepic.png"),
      title: "Single Mini Hoop",
      description: "14k Yellow Gold",
      amount: "$35",
    },
  ];
  const [modalShow, setModalShow] = useState(false);

  function MydModalWithGrid(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <div className="bg-black">
          <Modal.Body className="show-grid text-white">
            <Container>
              <Row>
                <div className="p-2 text-center">
                  <h2 className="text-white text-2xl">Hi there!</h2>
                  <p className="text-sm" style={{ color: "#F0F0F0" }}>
                    Please enter your email to log in or sign up
                  </p>
                  <fieldset className="py-4">
                    <input
                      class="form-control bg-white"
                      type="text"
                      name="Email"
                      placeholder="Email*"
                      required=""
                      style={{ width: "100%" }}
                    />
                  </fieldset>
                </div>
              </Row>
              <Row className="py-3">
                <Link>
                  <button className="btn-hov w-full p-2 py-3">Continue</button>
                </Link>
              </Row>
              <Row className="py-3">
                <Col>
                  <div className="p-2 text-center">
                    <div
                      className="bg-white webkit rounded-xl py-1"
                      style={{ border: "3px solid #BF8635" }}
                    >
                      <Image src={require("../../Assets/googleIcon.png")} />
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="p-2 text-center">
                    <div
                      className="bg-white webkit rounded-xl py-1"
                      style={{ border: "3px solid #BF8635" }}
                    >
                      <Image src={require("../../Assets/facebookIcon.png")} />
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="p-2 text-center">
                    <div
                      className="bg-white webkit rounded-xl py-1"
                      style={{ border: "3px solid #BF8635" }}
                    >
                      <Image src={require("../../Assets/appleIcon.png")} />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          {/* <Modal.Footer></Modal.Footer> */}
        </div>
      </Modal>
    );
  }
  return (
    <>
      <Container fluid className="cartContent">
        <div className="pt-28"></div>
      </Container>
      <Container>
        <Row className="py-4">
          <Col lg="12">
            <Link to="/ShopCategory">
              <AiOutlineClose className="text-xl text-white" />
            </Link>
          </Col>
        </Row>
        <Row className="py-3 textcart">
          <Col xs="12" md="6">
            {shipping ? (
              <div className="p-2">
                <div className="text-white">
                  <h2 className="text-2xl">01 SHIPPING</h2>
                  <div className="d-flex justify-between pt-3">
                    <h2 className="text-xl">Contact Info</h2>
                    <h2 className="text-lg" style={{ color: "#C7C7C7" }}>
                      Have an account? Log in
                    </h2>
                  </div>
                </div>
                <div className="text-white">
                  <fieldset>
                    <input
                      class="form-control"
                      type="email"
                      name="email"
                      placeholder="Email *"
                      required=""
                      style={{ width: "100%" }}
                    />
                  </fieldset>
                  <div className="d-flex gap-2 align-items-center pt-2">
                    <FormCheck />
                    <p className="text-sm">
                      Email me about new arrivals, offers and the latest from
                      LAVISA
                    </p>
                  </div>
                  <div className="text-white py-3">
                    <h2 className="text-2xl">Shipping Address</h2>
                    <div className="pt-4">
                      <fieldset>
                        <input
                          class="form-control"
                          type="text"
                          name="FirstName"
                          placeholder="First Name"
                          required=""
                          style={{ width: "100%" }}
                        />
                      </fieldset>
                      <fieldset>
                        <input
                          class="form-control"
                          type="text"
                          name="LastName"
                          placeholder="Last Name"
                          required=""
                          style={{ width: "100%" }}
                        />
                      </fieldset>
                      <fieldset>
                        <input
                          class="form-control"
                          type="text"
                          name="Country"
                          placeholder="Country"
                          required=""
                          style={{ width: "100%" }}
                        />
                      </fieldset>
                      <fieldset>
                        <input
                          class="form-control"
                          type="text"
                          name="Address"
                          placeholder="Street Address"
                          required=""
                          style={{ width: "100%" }}
                        />
                      </fieldset>
                      <div className="pt-4">
                        <p className="text-xs">We don't ship to PO Boxes.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn-hov w-full p-3" onClick={shippingFunc}>
                    Continue
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <button
                  className="btn-hov-dis my-2 w-full p-3 text-left"
                  onClick={test1}
                >
                  01 SHIPPING
                </button>
              </div>
            )}

            {delivery ? (
              <div className="p-2">
                <div className="text-white">
                  <h2 className="text-2xl">02 DELIVERY</h2>
                  <div className="d-flex justify-between pt-3">
                    <h2 className="text-xl">Contact Info</h2>
                    <h2 className="text-lg" style={{ color: "#C7C7C7" }}>
                      Have an account? Log in
                    </h2>
                  </div>
                </div>
                <div className="text-white">
                  <fieldset>
                    <input
                      class="form-control"
                      type="email"
                      name="email"
                      placeholder="Email *"
                      required=""
                      style={{ width: "100%" }}
                    />
                  </fieldset>
                  <div className="d-flex gap-2 align-items-center pt-2">
                    <FormCheck />
                    <p className="text-sm">
                      Email me about new arrivals, offers and the latest from
                      LAVISA
                    </p>
                  </div>
                  <div className="text-white py-3">
                    <h2 className="text-2xl">Shipping Address</h2>
                    <div className="pt-4">
                      <fieldset>
                        <input
                          class="form-control"
                          type="text"
                          name="FirstName"
                          placeholder="First Name"
                          required=""
                          style={{ width: "100%" }}
                        />
                      </fieldset>
                      <fieldset>
                        <input
                          class="form-control"
                          type="text"
                          name="LastName"
                          placeholder="Last Name"
                          required=""
                          style={{ width: "100%" }}
                        />
                      </fieldset>
                      <fieldset>
                        <input
                          class="form-control"
                          type="text"
                          name="Country"
                          placeholder="Country"
                          required=""
                          style={{ width: "100%" }}
                        />
                      </fieldset>
                      <fieldset>
                        <input
                          class="form-control"
                          type="text"
                          name="Address"
                          placeholder="Street Address"
                          required=""
                          style={{ width: "100%" }}
                        />
                      </fieldset>
                      <div className="pt-4">
                        <p className="text-xs">We don't ship to PO Boxes.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn-hov w-full p-3" onClick={deliveryFunc}>
                    Continue
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <button
                  className="btn-hov-dis my-2 w-full p-3 text-left"
                  onClick={test2}
                >
                  02 DELIVERY
                </button>
              </div>
            )}

            {payment ? (
              <div className="p-2">
                <div className="text-white">
                  <h2 className="text-2xl">03 PAYMENT</h2>
                  <div className="d-flex justify-between pt-3">
                    <h2 className="text-xl">Contact Info</h2>
                    <h2 className="text-lg" style={{ color: "#C7C7C7" }}>
                      Have an account? Log in
                    </h2>
                  </div>
                </div>
                <div className="text-white">
                  <fieldset>
                    <input
                      class="form-control"
                      type="email"
                      name="email"
                      placeholder="Email *"
                      required=""
                      style={{ width: "100%" }}
                    />
                  </fieldset>
                  <div className="d-flex gap-2 align-items-center pt-2">
                    <FormCheck />
                    <p className="text-sm">
                      Email me about new arrivals, offers and the latest from
                      LAVISA
                    </p>
                  </div>
                  <div className="text-white py-3">
                    <h2 className="text-2xl">Shipping Address</h2>
                    <div className="pt-4">
                      <fieldset>
                        <input
                          class="form-control"
                          type="text"
                          name="FirstName"
                          placeholder="First Name"
                          required=""
                          style={{ width: "100%" }}
                        />
                      </fieldset>
                      <fieldset>
                        <input
                          class="form-control"
                          type="text"
                          name="LastName"
                          placeholder="Last Name"
                          required=""
                          style={{ width: "100%" }}
                        />
                      </fieldset>
                      <fieldset>
                        <input
                          class="form-control"
                          type="text"
                          name="Country"
                          placeholder="Country"
                          required=""
                          style={{ width: "100%" }}
                        />
                      </fieldset>
                      <fieldset>
                        <input
                          class="form-control"
                          type="text"
                          name="Address"
                          placeholder="Street Address"
                          required=""
                          style={{ width: "100%" }}
                        />
                      </fieldset>
                      <div className="pt-4">
                        <p className="text-xs">We don't ship to PO Boxes.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="btn-hov w-full p-3"
                    // onClick={paymentFunc}
                    onClick={() => setModalShow(true)}
                  >
                    Continue
                  </button>
                  <MydModalWithGrid
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
            ) : (
              <div>
                <button
                  className="btn-hov-dis my-2 w-full p-3 text-left"
                  onClick={test3}
                >
                  03 PAYMENT
                </button>
              </div>
            )}
          </Col>
          <Col xs="12" md="6">
            <div className="p-2 text-white" style={{ background: "#1A1A1A" }}>
              {CHECKOUT.map((e) => {
                const list = (
                  <>
                    <div className="py-3">
                      <Row className="align-itms-center">
                        <Col xs="4" md="3">
                          <div>
                            <Image src={e.image} />
                          </div>
                        </Col>
                        <Col xs="8" md="9">
                          <Row>
                            <Col xs="9" md="9">
                              <div>
                                <h2 className="text-sm font-semibold">
                                  {e.title}
                                </h2>
                                <p className="text-sm">{e.description}</p>
                              </div>
                            </Col>
                            <Col xs="3" md="3">
                              <div>
                                <h2>{e.amount}</h2>
                              </div>
                            </Col>
                          </Row>
                          <Row className="pt-3 align-items-center">
                            <Col xs="8" md="4">
                              <div
                                className="d-flex gap-2 align-items-center px-1 justify-center"
                                style={{ border: "1px solid white" }}
                              >
                                <AiOutlineMinus
                                  style={{
                                    fontSize: "20px",
                                    marginLeft: "5px",
                                    color: "white",
                                  }}
                                  onClick={handleClick2}
                                />

                                <div
                                  style={{
                                    fontSize: "20px",
                                    position: "relative",
                                  }}
                                >
                                  {counter}
                                </div>
                                <AiOutlinePlus
                                  style={{
                                    fontSize: "20px",
                                    color: "white",
                                  }}
                                  onClick={handleClick1}
                                />
                              </div>
                            </Col>
                            <Col xs="6" md="4">
                              <button className="bg-none text-white underline text-xss">
                                Save For Later
                              </button>
                            </Col>
                            <Col xs="6" md="4">
                              <button className="bg-none text-white underline text-xss">
                                Remove
                              </button>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                    <hr className="hr" />
                  </>
                );
                return list;
              })}
              <div className="p-4">
                <div>
                  <p className="text-sm">Subtotal Tax</p>
                  <span className="float-right">$35</span>
                  <h2 className="text-sm pt-3">
                    NOTE :Import duties and taxes may apply upon delivery.
                  </h2>
                </div>
              </div>
              <hr className="hr" />
              <div className="p-4">
                <h2 className="text-sm py-3 font-semibold">
                  Estimated Total
                  <span className="float-right">$35</span>
                </h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainCart;
