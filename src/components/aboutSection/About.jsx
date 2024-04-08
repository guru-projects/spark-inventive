import React from "react";
import { useState, useEffect } from "react";
import "./About.css";

function About() {
  const [showMore, setShowMore] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(width);

  return (
    <div id="about" className="about">
      <div className="title"><h1>About</h1></div>
      
      <div className="contentSection">

        {width > 700 ? (
          <div className="content">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam non maxime, minima doloremque, earum et delectus,
              quisquam dignissimos blanditiis quod quasi pariatur explicabo
              dolore ullam ex numquam. Natus accusamus iusto, eum voluptatibus
              cupiditate veniam facilis perferendis dolore unde dicta harum. Qui
              illum iusto laudantium ipsa, quisquam quibusdam tenetur tempora
              mollitia rerum molestiae, nihil earum consequuntur, quod placeat
              temporibus! Consectetur hic enim ipsum fugit dicta cupiditate
              totam. Accusamus vitae molestiae aperiam saepe repudiandae
              excepturi iusto eaque nesciunt minus, laborum et molestias fugiat
              quas voluptatem minima dolorum reiciendis voluptates, soluta natus
              similique eveniet. Ipsum perferendis, enim dolores minus culpa sed
              voluptatem sequi?
            </div>

            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              error earum consequuntur sit molestias obcaecati odit, a dolor
              ducimus nisi, aliquid explicabo cum nulla? Vitae, possimus! Saepe
              architecto hic laudantium animi, quasi eius natus libero qui in
              provident quibusdam quos accusamus aliquam sed cupiditate dicta
              culpa magnam delectus fuga minima nobis labore aspernatur? Totam
              modi odio delectus praesentium, sunt quisquam reiciendis adipisci
              optio distinctio nostrum accusamus nobis quibusdam? Delectus
              mollitia saepe distinctio molestias dignissimos magnam eveniet
              corrupti amet vero laudantium tenetur error cum pariatur
              voluptatem sint ullam dolores minima suscipit sapiente quia id
              accusamus eum, harum iste? Optio, voluptatem architecto.
            </div>
          </div>
        ) : (
          <div className="content">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam non maxime, minima doloremque, earum et delectus,
              quisquam dignissimos blanditiis quod quasi pariatur explicabo
              dolore ullam ex numquam. Natus accusamus iusto, eum voluptatibus
              cupiditate veniam facilis perferendis dolore unde dicta harum. Qui
              illum iusto laudantium ipsa, quisquam quibusdam tenetur tempora
              mollitia rerum molestiae, nihil earum consequuntur, quod placeat
              temporibus! Consectetur hic enim ipsum fugit dicta cupiditate
              totam. Accusamus vitae molestiae aperiam saepe repudiandae
              excepturi iusto eaque nesciunt minus, laborum et molestias fugiat
              quas voluptatem minima dolorum reiciendis voluptates, soluta natus
              similique eveniet. Ipsum perferendis, enim dolores minus culpa sed
              voluptatem sequi?
            </div>
            {showMore && (
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, error earum consequuntur sit molestias obcaecati odit,
                a dolor ducimus nisi, aliquid explicabo cum nulla? Vitae,
                possimus! Saepe architecto hic laudantium animi, quasi eius
                natus libero qui in provident quibusdam quos accusamus aliquam
                sed cupiditate dicta culpa magnam delectus fuga minima nobis
                labore aspernatur? Totam modi odio delectus praesentium, sunt
                quisquam reiciendis adipisci optio distinctio nostrum accusamus
                nobis quibusdam? Delectus mollitia saepe distinctio molestias
                dignissimos magnam eveniet corrupti amet vero laudantium tenetur
                error cum pariatur voluptatem sint ullam dolores minima suscipit
                sapiente quia id accusamus eum, harum iste? Optio, voluptatem
                architecto.
              </div>
            )}
            <button
              className="learnMoreButton"
              onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show Less" : "Learn More"}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default About;
