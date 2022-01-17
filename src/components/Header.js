
import "../style/Header.css";

import React, { useState } from "react";
// import {NavLink} from 'react-router-dom'
function Header() {
  const [active, setActive] = useState("nav-menu");
  const [icon, setIcon] = useState("nav-toggler");

  const navToggle = () => {
    if (active === "nav-menu") {
      setActive("nav-menu nav-active");
    } else setActive("nav-menu");

    if (icon === "nav-toggler") {
      setIcon("nav-toggler toggle");
    } else setIcon("nav-toggler");
  };
  return (
    <nav className="nav   bg-blue-600  ">
      <h3
        className=" nav-brand flex justify-start text-left text-blue-50 "
        // height={90}
        // width={200}
        // // src={logo}
        // alt=""
      > Task Manager</h3>

      
      
    </nav>
  );
}

export default Header;
