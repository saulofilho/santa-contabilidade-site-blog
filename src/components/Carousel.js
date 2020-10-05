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
                  “A nossa empresa está completando dois anos, 
                  <br/>
                  e desde o início nós temos essa parceria. 
                  <br/>
                  Muito mais do que a questão financeira, 
                  <br/>
                  de números, a Santa Contabilidade tem me 
                  <br/>
                  auxiliado em diversos aspectos, 
                  <br/>
                  com diversas dúvidas, eles são hoje o meu 
                  <br/>
                  ponto principal de apoio!"
                </p>
                <p className="quote-autor">
                  Natalia Rodrigues da Unit Escola de Dança
                </p>
              </div>
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/8ZiESGjrOKw?controls=0" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
              />
              <span className="green-box"></span>
            </div>
          </div>
        </Slider>
    </section>
  )
}

export default Carousel
