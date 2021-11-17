import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../src/img/logo.png";
import { BsSearch } from "react-icons/bs";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"} `}>
      <img src={logo} alt="" className="nav_logo" />

      <div className="inputBox">
        <input type="text" placeholder="search" />
        <i>
          <BsSearch />
        </i>
      </div>
    </div>
  );
}

export default Nav;
