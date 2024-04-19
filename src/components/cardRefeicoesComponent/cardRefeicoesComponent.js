import React from "react";
import "./cardRefeicoesComponent.css";

function CardRefeicoesComponent({ post }) {
  const { title, description, pic } = post;

  // Constrói a URL da imagem usando os dados passados em pic
  const imageUrl = `data:image/jpeg;base64,${pic}`;

  return (
    <main className="content-cardRef">
      <div className="ctn-img">
        {/* Use imageUrl diretamente como src */}
        <img className="img-card" src={imageUrl} alt={title} />
      </div>

      <div className="ctn-title">
        <h1 className="title-card">{title}</h1>
        <p className="desc-card">{description}</p>
      </div>
    </main>
  );
}

export default CardRefeicoesComponent;
