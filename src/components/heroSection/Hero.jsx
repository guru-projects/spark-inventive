import React from "react";
import "./Hero.css";
import logo from '../../assets/logo.png';
import { HashLink as Link } from "react-router-hash-link";

function Hero() {

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="hero" id="hero">
      <div className="container">
        <div className="contant">
          <div>
            <h2 className="heading">Welcome</h2>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              voluptas temporibus rerum quas accusantium reprehenderit,
              perspiciatis est cupiditate harum eum?
            </p>
          </div>
          <div>
          <Link to="#contact" smooth scroll={el => scrollWithOffset(el, 100)}>
            <button>Contact us</button>
          </Link>
          </div>
        </div>
        <div className="image">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="sloganContainer">
        <div className="slogan">
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
            voluptas, voluptate placeat reprehenderit animi alias iure suscipit
            eius ipsum praesentium!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
