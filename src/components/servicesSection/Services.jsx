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
                  Transforming Education with Practical Experience:
                </h2>
                <p className="info">
                  At Spark inventive, we offer a dynamic approach to learning
                  through our innovative services: Practical Training Sessions:
                  Immerse yourself in the exciting world of emerging
                  technologies right within your regular academic schedule. Our
                  interactive training sessions offer practical experiences that
                  complement your traditional coursework. Explore cutting-edge
                  topics such as:
                  <ul>
                    <li>CyberAI-Securing with Artificial Intelligence </li>
                    <li>AI-Infused Data Handling</li>
                    <li>Cybersecurity in Robotics for Defense and Security</li>
                  </ul>
                  And much more... From harnessing the power of AI to enhance
                  cybersecurity to mastering data handling techniques infused
                  with artificial intelligence, our training sessions equip you
                  with the skills demanded by today's rapidly evolving tech
                  landscape. Prepare to embark on a journey of discovery and
                  innovation as you delve into these transformative fields
                  during your academic journey.
                </p>
                <button>Learn more</button>
              </div>
            </div>
            <div>
              <div className="slogan serviceSlogan">
                <h2 className="head">
                  Innovative In-Hour Project Internships for All Students:
                </h2>
                <p className="info">
                  Immerse yourself in cutting-edge projects spanning AI,
                  robotics, IoT, and more! Under the guidance of experienced
                  mentors, students take the lead in hands-on projects within
                  the confines of their academic hours. This unique approach
                  transforms theoretical knowledge into tangible skills,
                  ensuring equal internship opportunities for all.
                  <ul>
                    <li>Robotics</li>
                    <li>Augmented reailty and vitrual reailty</li>
                    <li>Generative Ai</li>
                  </ul>
                  By seamlessly integrating training sessions with project
                  development, students bridge the gap between theory and
                  practice. This fusion empowers them to apply classroom
                  concepts directly to real-world projects, thereby enriching
                  their skill set and bolstering their career prospects. Join us
                  in revolutionizing education by embracing experiential
                  learning tailored to the demands of the modern world.
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
