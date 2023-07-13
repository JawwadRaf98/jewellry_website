import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header({ data, headerFixed }) {
  const { menu } = data;
  return (
    <header className={`header grid grid-col90 block ${headerFixed}`}>
      <div className="block__inner block1x2">
        <Logo />
        <Navigation menu={menu} />
      </div>
    </header>
  );
}

export default Header;
