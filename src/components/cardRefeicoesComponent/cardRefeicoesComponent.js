import React from "react";
import "./cardRefeicoesComponent.css";

function CardRefeicoesComponent({ post }) {
  const { title, description, pic } = post;

  return (
    <main>
      <div>
        <img src={pic} alt={title} />
      </div>

      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </main>
  );
}

export default CardRefeicoesComponent;
