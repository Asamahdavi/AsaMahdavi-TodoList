
import "../style/Header.css";

import React from "react";

function Header() {

  return (
    <nav className="nav   bg-blue-600  ">
      <h3
        className=" nav-brand flex justify-start text-left text-blue-50 "

      > Task Manager {'>'} Home</h3>

    </nav>
  );
}

export default Header;
