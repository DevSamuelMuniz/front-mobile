import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./homePage.css";
import HeaderComponent from "../../components/headerComponent/headerComponent";
import NavBarComponent from "../../components/navBarComponent/navBarComponent";
import Banner from "../../assets/img/banner.png";
import Grafico from "../../assets/home/grafico.png";

function Home() {
  const [vegetarianRecipes, setVegetarianRecipes] = useState([]);
  const [healthyRecipes, setHealthyRecipes] = useState([]);

  useEffect(() => {
    const fetchVegetarianRecipes = async () => {
      try {
        const response = await axios.get(
          "https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian&apiKey=2853166db4634c0391e3f39905741359"
        );
        setVegetarianRecipes(response.data.recipes);
      } catch (error) {
        console.error("Erro ao buscar receitas vegetarianas:", error);
      }
    };

    const fetchHealthyRecipes = async () => {
      try {
        const response = await axios.get(
          "https://api.spoonacular.com/recipes/random?number=1&maxFat=1&minProtein=20&apiKey=2853166db4634c0391e3f39905741359"
        );
        setHealthyRecipes(response.data.recipes);
      } catch (error) {
        console.error("Erro ao buscar receitas saudáveis:", error);
      }
    };

    fetchVegetarianRecipes();
    fetchHealthyRecipes();
  }, []);

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
        <h1 className="title-ref">Receitas Vegetarianas</h1>
        <div className="recipe-list">
          {vegetarianRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-item">
              <Link className="link-recipe" to={`/detalhes/${recipe.id}`}>
                <img className="img-recipe" src={recipe.image} alt={recipe.title} />
                <h2 className="recipe-title">{recipe.title}</h2>
              </Link>
            </div>
          ))}
        </div>

        <h1 className="title-ref">Receitas Saudáveis</h1>
        <div className="recipe-list">
          {healthyRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-item">
              <Link className="link-recipe" to={`/detalhes/${recipe.id}`}>
                <img className="img-recipe" src={recipe.image} alt={recipe.title} />
                <h2 className="recipe-title">{recipe.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="banner-content">
        <img className="banner1" src={Banner} alt="imagem banner" />
      </div>
      <NavBarComponent />
    </main>
  );
}

export default Home;
