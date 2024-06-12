import React from "react";
import "./cardRefeicoesComponent.css";
import Comida from "../../assets/img/comida.jpg";

function CardRefeicoesComponent({ post }) {
  const { title, description } = post;

  return (
    <main className="content-cardRef">
      <div className="ctn-img">
        <img className="img-card" src={Comida} alt={title} />
      </div>

      <div className="ctn-title">
        <h1 className="title-card">{title}</h1>
        <p className="desc-card">{description}</p>
      </div>
    </main>
  );
}

export default CardRefeicoesComponent;
