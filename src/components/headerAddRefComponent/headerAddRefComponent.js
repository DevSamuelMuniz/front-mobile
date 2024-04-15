import React, { useState } from "react";
import axios from "axios";
//css
import "./headerAddRefComponent.css";
//imagens
import Seta from "../../assets/img/seta.png";
//icons sidebar
import ConfigIcon from "../../assets/img/configIcon.png";
import ModoIcon from "../../assets/img/modoIcon.png";
import PoliticasIcon from "../../assets/img/politicasIcon.png";

function HeaderAddRefComponent() {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/logout"); // Rota para fazer logout
      // Após o logout, você pode redirecionar o usuário para a página de login ou realizar outras ações necessárias
      window.location.href = "/login"; // Redireciona para a página de login
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      // Trate o erro, se necessário
    }
  };

  return (
    <main className="container-header-add">
      <a href="/home">
        <img className="seta-header" src={Seta} alt="" />
      </a>
      <h1 className="titulo-header-add">Adicionar Refeição</h1>
      <button className="btn-header">
        <div class="menu-burger" onClick={updateMenu}>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </button>

      <div className={menu_class}>
        <div className="itens">
          <a className="item-slide" href="/">
            <img src={ConfigIcon} alt="botão de configurações"></img>{" "}
            <p>Configurações</p>
          </a>
          <a className="item-slide" href="/">
            <img src={ModoIcon} alt="modo noite"></img> <p>Modo Escuro</p>
          </a>
          <a className="item-slide" href="/">
            <img src={PoliticasIcon} alt="nossas políticas"></img>{" "}
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

export default HeaderAddRefComponent;
