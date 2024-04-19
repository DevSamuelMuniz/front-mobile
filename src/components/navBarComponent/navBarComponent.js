import React from "react";

//css
import "./navBarComponent.css";

//imagens
import Home from "../../assets/img/home.png";
import Adicionar from "../../assets/img/adicionar.png";
import Chef from "../../assets/img/chef.png";

function navBarComponent() {
  return (
    <main className="navBar">
      <div className="sombreado"></div>
      <a href="/home" className="a-navBar">
        <img src={Home} alt="" className="icon-navBar" />
      </a>
      <a href="/adicionar" className="add-navBar">
        <img src={Adicionar} alt="" className="Addicon-navBar" />
      </a>
      <a href="/refeicoes" className="a-navBar">
        <img src={Chef} alt="" className="icon-navBar" />
      </a>
    </main>
  );
}

export default navBarComponent;
