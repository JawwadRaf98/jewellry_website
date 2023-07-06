import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Col, Container, Image, Row } from "react-bootstrap";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineClose,
  AiOutlineHeart,
  AiTwotoneStar,
  AiOutlineCheck,
} from "react-icons/ai";
import { BsHeartFill, BsFillArrowLeftSquareFill } from "react-icons/bs";
import { TbBus } from "react-icons/tb";
import { RiShieldCheckFill } from "react-icons/ri";
import Accordion from "react-bootstrap/Accordion";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import img from "../../Assets/ecommercepic.png";
import { Link } from "react-router-dom";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Firstitem = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [isheart, setIsHeart] = useState("false");
  const [modalShow, setModalShow] = useState(false);

  const heartFunc = () => {
    if (isheart === "true") {
      setIsHeart("false");
      // alert('checkbox is false')
      // setIsCheckBox("false");
      // setProfileExp({ ...profileExp, currentlyWorking: "off" });
    } else {
      setIsHeart("true");
      // setIsCheckBox("true");
      // setProfileExp({ ...profileExp, currentlyWorking: "on" });
    }
  };
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

  let CHECKOUT = [
    {
      id: 1,
      image: require("../../Assets/ecommercepic.png"),
      title: "Single Mini Hoop",
      description: "14k Yellow Gold",
      amount: "$35",
    },
    {
      id: 2,
      image: require("../../Assets/ecommercepic.png"),
      title: "Single Mini Hoop",
      description: "14k Yellow Gold",
      amount: "$35",
    },
    {
      id: 3,
      image: require("../../Assets/ecommercepic.png"),
      title: "Single Mini Hoop",
      description: "14k Yellow Gold",
      amount: "$35",
    },
  ];
  function MydModalWithGrid(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <div className="bg-black">
          <Modal.Body className="show-grid text-white">
            <Container>
              <Row>
                <div className="float-right cursor-pointer webkit-right">
                  <AiOutlineClose className="text-xl" onClick={props.onHide} />
                </div>
                <Box
                  sx={{ borderBottom: 1, borderColor: "divider" }}
                  className="tabs"
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Your Bag (3)" {...a11yProps(0)} />
                    <Tab label="Save For Later (0)" {...a11yProps(1)} />
                  </Tabs>
                </Box>
              </Row>

              <Row>
                <div
                  className="p-2"
                  style={{
                    background: "#5B5B5B",
                    borderTop: "2px solid rgb(159 159 159)",
                    borderBottom: "2px solid rgb(159 159 159)",
                  }}
                >
                  <h2 className="text-white text-sm">
                    You're $165 away from free shipping
                  </h2>
                </div>
                <TabPanel value={value} index={0}>
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

                  <div className="py-2">
                    <h2 className="text-sm py-3 font-semibold">
                      You Might Also Like
                    </h2>
                    <Row className="align-itms-center">
                      <Col xs="4" md="3">
                        <div>
                          <Image
                            src={require("../../Assets/ecommercepic.png")}
                          />
                        </div>
                      </Col>
                      <Col xs="8" md="9">
                        <Row>
                          <Col xs="9" md="9">
                            <div>
                              <h2 className="text-sm font-semibold">
                                Single Mini Hoop
                              </h2>
                              <p className="text-sm">14k Yellow Gold</p>
                            </div>
                          </Col>
                          <Col xs="3" md="3">
                            <div>
                              <h2>$35</h2>
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
                            {/* <button className="bg-none text-white underline text-xss">
                              Save For Later
                            </button> */}
                          </Col>
                          <Col xs="6" md="4">
                            <button className="p-1 mt-4 w-full btn-hov">
                              add
                            </button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                  <hr className="hr" />
                  <div className="py-2">
                    <h2 className="text-sm py-3 font-semibold">
                      Estimated Total
                      <span className="float-right">$35</span>
                    </h2>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Item Two
                </TabPanel>
              </Row>
              <Row className="py-3">
                <Link to="/Cart">
                  <button className="btn-hov w-full p-2">CHECKOUT</button>
                </Link>
              </Row>
            </Container>
          </Modal.Body>
          {/* <Modal.Footer></Modal.Footer> */}
        </div>
      </Modal>
    );
  }
  return (
    <Container fluid className="bg">
      <div className="navContent">
        <Container>
          <Row className="pt-28">
            <Col lg="8">
              <Row>
                <Col xs="6" lg="6">
                  <div className="p-2">
                    <Image src={require("../../Assets/ecommercepic.png")} />
                  </div>
                </Col>
                <Col xs="6" lg="6">
                  <div className="p-2">
                    <Image src={require("../../Assets/girl.png")} />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs="6" lg="6">
                  <div className="p-2">
                    <Image src={require("../../Assets/new.png")} />
                  </div>
                </Col>
                <Col xs="6" lg="6">
                  <div className="p-2">
                    <Image src={require("../../Assets/new1.png")} />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs="6" lg="6">
                  <div className="p-2">
                    <Image src={require("../../Assets/new2.png")} />
                  </div>
                </Col>
                <Col xs="6" lg="6">
                  <div className="p-2">
                    <Image src={require("../../Assets/girl.png")} />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg="4">
              <div
                className="p-2 box1"
                style={{ background: "rgb(26, 26, 26)" }}
              >
                <div className="webkit p-2">
                  <div>
                    <h2 className="text-2xl text-white">Singal Mini - $35</h2>
                    <div className="d-flex gap-3 justify-center">
                      <div className="gap-2 stars">
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                      </div>
                      <div>
                        <h2 className="text-lg text-white">
                          4.7 See 12345 reviews
                        </h2>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-sm text-white">14k yellow Gold</h2>
                    </div>
                    <button
                      className="bg-gray-400 w-full p-2 text-left d-flex gap-1 align-items-center my-3 rounded-md"
                      disabled
                    >
                      <AiOutlineCheck />
                      STOCK
                    </button>
                  </div>
                  <div className="d-flex gap-3">
                    <button
                      className="w-5/6 p-2 btn-hov"
                      onClick={() => setModalShow(true)}
                    >
                      ADD TO BAG
                    </button>
                    <MydModalWithGrid
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                    <button className="w-20 p-2 btn-hov justify-center webkit">
                      <AiOutlineHeart
                        style={{
                          color:
                            isheart === "true"
                              ? "red"
                              : "#8C8C8C" || isheart === "false"
                              ? "white"
                              : "#fff",
                        }}
                        className="heart"
                        onClick={() => heartFunc()}
                      />
                    </button>
                  </div>
                  <div className="d-flex gap-3 align-items-center pt-4 pb-1">
                    <div className="bus">
                      <TbBus />
                    </div>
                    <div>
                      <h2 className="text-sm text-white">
                        Free Shipping on orders over $200
                      </h2>
                    </div>
                  </div>
                  <div className="d-flex gap-3 align-items-center py-1">
                    <div className="bus">
                      <BsFillArrowLeftSquareFill />
                    </div>
                    <div>
                      <h2 className="text-sm text-white">
                        Free 30 Day Returns
                      </h2>
                    </div>
                  </div>
                  <div className="d-flex gap-3 align-items-center py-1">
                    <div className="bus">
                      <RiShieldCheckFill />
                    </div>
                    <div>
                      <h2 className="text-sm text-white">2 Year Warranty</h2>
                    </div>
                  </div>
                </div>
                <div className=" p-2">
                  <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Details</Accordion.Header>
                      <Accordion.Body>
                        <ul className="list-disc p-3">
                          <li>
                            Made in 14k solid gold, the alloy that gives our
                            pieces its beautiful, subtle hue.
                          </li>
                          <li>Hoop diameter: 10 mm.</li>
                          <li>Hoop thickness: 1.5 mm.</li>
                          <li>Post thickness: 0.9 mm.</li>
                          <li>Sold individually.</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Description</Accordion.Header>
                      <Accordion.Body>
                        <ul className="list-disc p-3">
                          <li>
                            Made in 14k solid gold, the alloy that gives our
                            pieces its beautiful, subtle hue.
                          </li>
                          <li>Hoop diameter: 10 mm.</li>
                          <li>Hoop thickness: 1.5 mm.</li>
                          <li>Post thickness: 0.9 mm.</li>
                          <li>Sold individually.</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Materials</Accordion.Header>
                      <Accordion.Body>
                        <ul className="list-disc p-3">
                          <li>
                            Made in 14k solid gold, the alloy that gives our
                            pieces its beautiful, subtle hue.
                          </li>
                          <li>Hoop diameter: 10 mm.</li>
                          <li>Hoop thickness: 1.5 mm.</li>
                          <li>Post thickness: 0.9 mm.</li>
                          <li>Sold individually.</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default Firstitem;
