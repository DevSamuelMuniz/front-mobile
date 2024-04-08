import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//css
import "./recipeCarrosselComponent.css";

function recipeCarrosselComponent() {
  const imagens = [
    require("../../assets/carrossel/1.png"),
    require("../../assets/carrossel/2.png"),
    require("../../assets/carrossel/3.png"),
    require("../../assets/carrossel/4.png"),
    require("../../assets/carrossel/5.png"),
    require("../../assets/carrossel/6.png"),
    require("../../assets/carrossel/7.png"),
    require("../../assets/carrossel/8.png"),
    require("../../assets/carrossel/9.png"),
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrow: false,
  };

  return (
    <main className="carrossel-container">
      <Slider className="slider" {...settings}>
        {imagens.map((imagem, index) => (
          <div className="ctn-div-image-carrossel" key={index}>
            <img
              className="fotosCarrossel"
              src={imagem}
              alt={`Imagem ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </main>
  );
};

export default recipeCarrosselComponent;
