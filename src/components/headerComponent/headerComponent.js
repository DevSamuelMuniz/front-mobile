import React, {useState} from "react";
//css
import "./headerComponent.css"
//logo
import Logo from "../../assets/img/logo.png";
//icons sidebar
import ConfigIcon from "../../assets/img/configIcon.png"
import ModoIcon from "../../assets/img/modoIcon.png" 
import PoliticasIcon from "../../assets/img/politicasIcon.png"

function HeaderComponent() {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const updateMenu = () => {
    if(!isMenuClicked) {
        setBurgerClass("burger-bar clicked")
        setMenuClass("menu visible")
    }
    else {
        setBurgerClass("burger-bar unclicked")
        setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
}

  return (
    <main className="container-header">
      <img className="img-header" src={Logo} alt="Logo" />
      <h1 className="titulo-header">NutriLife</h1>
      <button className="btn-header"><div class="menu-burger" onClick={updateMenu}>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div></button>

      <div className={menu_class}>
        <div className="itens">
           <a className="item-slide" href="/"><img src={ConfigIcon} alt="botão de configurações"></img> <p>Configurações</p></a>
           <a href="/"><img src={ModoIcon} alt="modo noite"></img> <p>Modo Escuro</p></a>
           <a href="/"><img src={PoliticasIcon} alt="nossas políticas"></img> <p>Políticas de Privacidade</p></a>
        </div>
      </div>
    </main>
  );
}

export default HeaderComponent;
