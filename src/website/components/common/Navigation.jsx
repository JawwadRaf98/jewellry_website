import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import imagesMenu from "../../dist/webImages/navigation";
import { ModalDailogContext } from "../../context/ModalDailogContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { getTokenSession } from "../../utils/common";

function Navigation({ menu = [] }) {
  const { handleDailog } = React.useContext(ModalDailogContext);
  const [mobilemenu, setMobileMenu] = useState(false);
  const [mobileDropDown, setMobileDropDown] = useState();
  const version = process.env.REACT_APP_VERSION;
  const menuClick = () => {
    setMobileMenu(!mobilemenu);
  };

  const renderLink = (
    { type, label, path, subMenu, icon, className = "" },
    index
  ) => {
    if (!type)
      return path.includes("http") ? (
        <a href={path}>{label}</a>
      ) : (
        <div>
          <NavLink
            className={({ isActive }) => {
              return `${isActive ? "active" : ""} ${className}`;
            }}
            to={`${version}/${path}`}
          >
            <span
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              {label}
              {icon && <FontAwesomeIcon icon={icon} />}
            </span>
          </NavLink>
          {subMenu && (
            <span
              className={"dropicon"}
              onClick={() => {
                setMobileDropDown(index);
              }}
            >
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          )}
        </div>
      );
    return <Button text={label} id="demo" onClick={(e) => handleDailog(e)} />;
  };
  const renderSubMenuLink = ({ path, label }, index) => {

    return (
      <li className="list__item" key={index}>
        {path.includes("http") ? (
          <a href={path}>
            <span>
              <img
                src={imagesMenu[String.fromCharCode(65 + index).toLowerCase()]}
                alt=""
              />
              {label}
            </span>
          </a>
        ) : (
          <Link
            to={`${version}/${path}`}
            onClick={() => {
              setMobileMenu(false);
            }}
          >
            <span>
              <img
                src={imagesMenu[String.fromCharCode(65 + index).toLowerCase()]}
                alt=""
              />
              {label}
            </span>
          </Link>
        )}
      </li>
    );
  };
  const user = getTokenSession();
  const updatedMenu = [
    ...menu,
    !user
      ? {
          label: "login",
          path: "login",
          className: 'dashboard'
        }
      : {
          label: "Dashboard",
          path: "dashboard",
          className: "dashboard",
          icon: faTachometerAlt,
        },
    !user
    ?
    {
      label: "book a demo",
      path: "",
      type: "button",
      // 
      // className:"btn"

    } :
    {
      label: "logout",
      path: "logout",
      className:"btn",
      id: 'demo'
      // type: "button",


    } 
  ];
  return (
    <nav className={mobilemenu ? "mobileactive" : ""}>
      <ul className="list list-inline">
        {updatedMenu.map((item, index) => (
          <li
            className={
              mobileDropDown === index ? "list__item active" : "list__item"
            }
            key={index}
          >
            {renderLink(item, index)}
            {item.subMenu && (
              <ul className={"list list-inline subMenu"}>
                {item.subMenu.map((subMenuItem, index) =>
                  renderSubMenuLink(subMenuItem, index)
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <a
        onClick={menuClick}
        className={mobilemenu ? "menuBarm active" : "menuBarm"}
      >
        <div className="menuBar">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </a>
    </nav>
  );
}

export default Navigation;
