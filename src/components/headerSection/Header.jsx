import { React, useState } from "react";
import "./Header.css";
import { HashLink as Link } from "react-router-hash-link";
import logo from '../../assets/name.png'

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
      <Link to="#hero" className="logo" smooth onClick={removeActive} scroll={el => scrollWithOffset(el, 100)}>
        <img src={logo} alt="logo" />
      </Link>
      <div className="navbar">
        <div className="navInside">
          <ul
            className={isActive ? "navMenu active" : "navMenu"}
            onClick={removeActive}>
            <li onClick={removeActive}>
              <Link to="#about" smooth scroll={el => scrollWithOffset(el, 100)}>
                About
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="#services" smooth scroll={el => scrollWithOffset(el, 100)}>
                Services
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="#event" smooth scroll={el => scrollWithOffset(el, 100)}>
                Event
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="#contact" smooth scroll={el => scrollWithOffset(el, 100)}>
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
