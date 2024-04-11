import React from "react";
//css
import "./headerComponent.css"
//logo
import Logo from "../../assets/img/logo.png";

function headerComponent() {
  //{openPopUp} como parâmetro
  return (
    <main className="container-header">
      <img className="img-header" src={Logo} alt="Logo" />
      <h1 className="titulo-header">NutriLife</h1>
      <button className="btn-header"><div class="menu-burger">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div></button>
    </main>
  );
}

export default headerComponent;
