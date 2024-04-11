import React from "react";
import "./Hero.css";
import logo from "../../assets/logo.png";
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
              Welcome to Spark Inventive, where creativity sparks innovation and
              passion fuels change. Our placement-integrated programs,
              seamlessly woven into academic hours, pave the way for student
              success. Step into the practical world where your academic
              syllabus transforms into hands-on experience. Join us and bridge
              the gap between theory and practice and we'll shape a brighter
              tomorrow.
            </p>
          </div>
          <div className="contactButton">
            <Link
              to="#contact"
              smooth
              scroll={(el) => scrollWithOffset(el, 100)}>
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
          <h3>Beyond Academics</h3>
          <p>
            We believe in fostering a holistic approach to
            learning—one that encompasses not only academic excellence, but also
            personal growth, creativity, and innovation. By integrating
            real-world industry experience into our curriculum, But we don't stop there. Beyond training classes and
            traditional academics, students are actively engaged in hands-on
            development projects. From brainstorming sessions to prototype
            creation, At Spark Inventive,
            education isn't just about what you learn—it's about what you
            create, what you contribute, and the impact you make.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
