import { React, useState } from "react";
import "./Header.css";
import { HashLink as Link, NavHashLink } from "react-router-hash-link";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="header" id="header">
      <Link to="#hero" className="logo" smooth onClick={removeActive}>
        Spark Inventive
      </Link>
      <div className="navbar">
        <div className="navInside">
          <ul
            className={isActive ? "navMenu active" : "navMenu"}
            onClick={removeActive}>
            <li onClick={removeActive}>
              <Link to="#about" smooth>
                About
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="#services" smooth>
                Services
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="#event" smooth>
                Event
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="#contact" smooth>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={isActive ? "hamburger active" : "hamburger"}
          onClick={toggleActiveClass}>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
