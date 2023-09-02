import { useState } from "react";
import { hamburger, logo } from "../../assets";
import Button from "../Button/Button";

import "./Navbar.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menu = (
    <div className="burger-menu">
      <a href="/">
        <span>Home</span>
      </a>
      <a>
        <span>Cab</span>
      </a>
      {/* <a>
        <span>Offers</span>
      </a> */}
      <a href="/contactus">
        <span>Contact Us</span>
      </a>
    </div>
  );

  return (
    <nav className="navbar burger">
      {/*logo*/}
      {/* navlinks */}
      <div className="left">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <a href="/comingsoon">
          <span>Cab</span>
        </a>
        {/* <a>
          <span>Offers</span>
        </a> */}
        <a href="/contactus">
          <span>Contact Us</span>
        </a>
      </div>

      <div className="right">
        <a href="/kyc">
          <Button text="Join as Cab Driver" />
        </a>
      </div>

      {/* burger menu */}
      <img
        className="hamburger"
        onClick={() => setShowMenu(!showMenu)}
        src={hamburger}
        alt=""
      />
      {showMenu && menu}
    </nav>
  );
};

export default Navbar;
