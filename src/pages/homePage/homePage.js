import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import "./homePage.css";
import HeaderComponent from "../../components/headerComponent/headerComponent";
import NavBarComponent from "../../components/navBarComponent/navBarComponent";
import Banner from "../../assets/img/banner.png";
import Grafico from "../../assets/home/grafico.png";

function Home() {
  return (
    <main className="content-header">
      <HeaderComponent />
      <div className="ctn-grafico">
        <h1 className="saiba-mais">Suas metas</h1>
        <a href="/progresso">
          <img className="grafico-home" src={Grafico} alt="grafico" />
        </a>
        <p className="saiba-mais">Clique e saiba mais</p>
      </div>
      <div className="receitas">
        <h1>Receitas</h1>
        <div className="foto-receita"></div>
      </div>
      <div className="banner-content">
        <img className="banner1" src={Banner} alt="imagem banner" />
      </div>
      <NavBarComponent />
    </main>
  );
}

export default Home;
