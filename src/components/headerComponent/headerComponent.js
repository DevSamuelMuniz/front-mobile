import React, { useState } from "react";
import axios from "axios";
//css
import "./headerComponent.css";
//logo
import Logo from "../../assets/img/logo.png";
//icons sidebar
import ConfigIcon from "../../assets/img/configIcon.png";
import ModoIcon from "../../assets/img/modoIcon.png";
import PoliticasIcon from "../../assets/img/politicasIcon.png";

function HeaderComponent() {
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setMenuClass("menu visible");
    } else {
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/logout");
      localStorage.removeItem("token");
      window.location.href = "/login";
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <main className="container-header">
      <a href="/home">
        <img className="img-header" src={Logo} alt="Logo" />
      </a>
      <h1 className="titulo-header">NutriLife</h1>
      <button className="btn-header">
        <div className="menu-burger" onClick={updateMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </button>

      <div className={menuClass}>
        <div className="itens">
          <a className="item-slide" href="/">
            <img src={ConfigIcon} alt="botão de configurações"></img>
            <p>Configurações</p>
          </a>
          <a className="item-slide" href="/">
            <img src={ModoIcon} alt="modo noite"></img>
            <p>Modo Escuro</p>
          </a>
          <a className="item-slide" href="/">
            <img src={PoliticasIcon} alt="nossas políticas"></img>
            <p>Políticas de Privacidade</p>
          </a>
          <button className="deslogar" onClick={handleLogout}>
            Deslogar da conta
          </button>
        </div>
      </div>
    </main>
  );
}

export default HeaderComponent;
