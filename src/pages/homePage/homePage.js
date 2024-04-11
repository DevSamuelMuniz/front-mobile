import React, { useState} from "react";
import "./homePage.css";
//css
import "./homePage.css";
//components
import HeaderComponent from "../../components/headerComponent/headerComponent";
import RecipeCarrosselComponent from "../../components/recipeCarrosselComponent/recipeCarrosselComponent";

//imagens
import Banner from "../../assets/img/banner.png";

function Home() {

  return (
    <main className="content-header">
      <HeaderComponent />
      <div className="banner-content">
        <img className="banner1" src={Banner} alt="imagem banner" />
      </div>
      <RecipeCarrosselComponent />
      <RecipeCarrosselComponent />
    </main>
  );
}

export default Home;
