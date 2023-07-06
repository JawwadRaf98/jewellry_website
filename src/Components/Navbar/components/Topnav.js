import React, { useState, Component, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../Navbar/components/Navbar.css";
import "../../Assets/logo.png";
import { Image, NavItem } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

import {
  BrowserRouter as Route,
  Router,
  Link,
  Switch,
  useLocation,
} from "react-router-dom";

export const Topnav = () => {
  const [isNavLink, setIsNavLink] = useState("Categories");

  return (
    <Navbar id="botone" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Image src={require("../../Assets/PEACORAnew.png")} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ml-auto my-2" navbarScroll>
            <Link to="/About" className="nav-link">
              About Us
            </Link>
            <Link to="/Shop" className="nav-link">
              Shop
            </Link>
            <Link to="/FAQ" className="nav-link">
              FAQs
            </Link>
            <Link to="/Contact" className="nav-link">
              Contact us
            </Link>
            {/* <Link to="/Login" className="nav-link">
              <Button className="btn-login w-full">Login</Button>
            </Link>

            <Link to="/Signup" className="nav-link">
              <Button className="btn-signup w-full">Sign up</Button>
            </Link> */}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="navbarScroll">
          <div class="ml-auto my-2 navbar-nav">
            <div className="d-flex gap-4 icon">
              <a>
                <BsSearch />
              </a>
              <a>
                <BiUser />
              </a>
              <a>
                <AiOutlineHeart />
              </a>
              <Link to="/Cart">
                <FiShoppingCart />
              </Link>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
