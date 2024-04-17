import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services" id="services">
      <div className="serviceDetails">
        <div className="head">
          <h1>Services</h1>
        </div>
        <div className="serviceContainer">
          <div className="sloganHead">
            <div>
              At Spark Inventive, we're committed to closing the gap between
              theory and practice. That's why we integrate hands-on, practical
              experience into our regular academic hours, giving students the
              chance to apply what they learn directly to real-world situations.
              These sessions are key to their success in placement interviews,
              providing them with the confidence and skills necessary to thrive
              in emerging technologies. Our fused field experiences during
              academic hours approach empowers students to bridge theory with
              practice, cultivating essential skills and insights that propel
              them toward success in both their academic and professional
              endeavors
            </div>
          </div>
          <div className="serviceBox">
            <div className="serviceItem">
              <div className="slogan serviceSlogan">
                <h2 className="head">
                  Our Service: Integrated Field Experiences Training Within
                  Academic Hours
                </h2>
                <p className="info">
                  We cover a diverse range of fields, including AI, VR/AR
                  development, cybersecurity, and data analytics, integrating
                  these domains to provide an advanced syllabus for students.
                  Our goal is to prepare them for successful placements in top
                  IT companies. This approach not only boosts students'
                  confidence but also keeps them updated with the latest
                  technology and deep learning in their syllabus.
                </p>
                <button>Learn more</button>
              </div>
            </div>
            <div>
              <div className="slogan serviceSlogan">
                <h2 className="head">
                  AI and Robotics Products for Live Teaching Sessions
                </h2>
                <p className="info">
                  We offer AI and robotics products designed specifically for
                  live teaching sessions, providing students with hands-on
                  experience. These products are developed through our
                  internship program, available to all students in the
                  university. This real-world experience enhances their learning
                  and prepares them for the challenges of tomorrow.
                </p>
                <button>Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
