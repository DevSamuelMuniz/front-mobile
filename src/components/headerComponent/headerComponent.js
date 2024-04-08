import React from "react";
//css
import "./headerComponent.css"
//logo
import Logo from "../../assets/img/logo.png";

function headerComponent() {
  return (
    <main className="container-header">
      <img src={Logo} alt="Logo" />
      <h1>NutriLife</h1>
      <div class="menu-burger">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </main>
  );
}

export default headerComponent;
