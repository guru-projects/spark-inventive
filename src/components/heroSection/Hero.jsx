import "./Hero.css";
import React from "react";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="contant">
          <div>
            <h2 className="heading">Spark Inventive</h2>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              voluptas temporibus rerum quas accusantium reprehenderit,
              perspiciatis est cupiditate harum eum?
            </p>
          </div>
          <div>
            <button>Know More!</button>
          </div>
        </div>
        <div className="image">
          <img src="https://picsum.photos/300" alt="" />
        </div>
      </div>
      <div className="sloganContainer">
          <div className="slogan">
            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad voluptas,
              voluptate placeat reprehenderit animi alias iure suscipit eius ipsum
              praesentium!
            </p>
          </div>
      </div>
    </div>
  );
}

export default Hero;
