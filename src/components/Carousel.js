import React from "react"
import Slider from "react-slick";
import './Carousel.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: false,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="carousel-wrapper container">
        <Slider {...settings}>
          <div>
            <div className="car-items-wrapper">
              <div className="car-texts-wrapper">
                <h3>
                  Veja o que os  nossos clientes têm
                  <br/>
                  a dizer sobre o nosso trabalho
                </h3>
                <p className="quote">
                  “Quando comecei a Santa Contabilidade eum resolvi problemas 
                  contábeis de 3 anos em apenas 2 meses! Incrívell"
                </p>
                <p className="quote-autor">
                  Marcela Viana da Empresa TAL
                </p>
              </div>
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/z9XmawB0t7Q?controls=0" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen 
              />
              <span className="green-box"></span>
            </div>
          </div>
          <div>
            <div className="car-items-wrapper">
              <div className="car-texts-wrapper">
                <h3>
                  Veja o que os  nossos clientes têm
                  <br/>
                  a dizer sobre o nosso trabalho
                </h3>
                <p className="quote">
                  “Quando comecei a Santa Contabilidade eum resolvi problemas 
                  contábeis de 3 anos em apenas 2 meses! Incrívell"
                </p>
                <p className="quote-autor">
                  Marcela Viana da Empresa TAL
                </p>
              </div>
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/z9XmawB0t7Q?controls=0" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen 
              />
              <span className="green-box"></span>
            </div>
          </div>
          <div>
            <div className="car-items-wrapper">
              <div className="car-texts-wrapper">
                <h3>
                  Veja o que os  nossos clientes têm
                  <br/>
                  a dizer sobre o nosso trabalho
                </h3>
                <p className="quote">
                  “Quando comecei a Santa Contabilidade eum resolvi problemas 
                  contábeis de 3 anos em apenas 2 meses! Incrívell"
                </p>
                <p className="quote-autor">
                  Marcela Viana da Empresa TAL
                </p>
              </div>
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/z9XmawB0t7Q?controls=0" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen 
              />
              <span className="green-box"></span>
            </div>
          </div>
        </Slider>
    </section>
  )
}

export default Carousel
