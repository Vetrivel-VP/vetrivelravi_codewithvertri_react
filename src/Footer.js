import React from "react";
import "./Footer.css";

import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <h2>Vetrivel Ravi</h2>

      <div className="socilMedia">
        <a href="#">
          <i>
            <BsFacebook />
          </i>
        </a>
        <a href="#">
          <i>
            <BsInstagram />
          </i>
        </a>
        <a href="#">
          <i>
            <BsTwitter />
          </i>
        </a>
        <a href="#">
          <i>
            <BsLinkedin />
          </i>
        </a>
      </div>

      <div className="footer_inputBox">
        <input type="text" placeholder="Enter your mail" />
        <label htmlFor="">Contact me</label>
      </div>
    </footer>
  );
}

export default Footer;
