import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import "./homePage.css";
import HeaderComponent from "../../components/headerComponent/headerComponent";
import NavBarComponent from "../../components/navBarComponent/navBarComponent";
import Banner from "../../assets/img/banner.png";
import Grafico from "../../assets/home/grafico.png";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        "https://api.edamam.com/search?q=health-lunch&app_id=cfff52eb&app_key=2e15b4a09b6e798f9f51590b31214651&language=pt"
      );
      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      console.error("Erro ao buscar receitas:", error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

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
        <div className="foto-receita">
          {recipes.map((recipe, index) => (
            <img
              key={index}
              src={recipe.recipe.image}
              alt={recipe.recipe.label}
              onClick={() => handleRecipeClick(recipe.recipe)}
            />
          ))}
        </div>
        {selectedRecipe && (
          <div className="recipe-info">
            <h2>{selectedRecipe.label}</h2>
            <img src={selectedRecipe.image} alt={selectedRecipe.label} />
            <ul>
              {selectedRecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
            </ul>
            <p>Instruções: {selectedRecipe.instructions}</p>
            <button>Fechar</button>
          </div>
        )}
      </div>
      <div className="banner-content">
        <img className="banner1" src={Banner} alt="imagem banner" />
      </div>
      <NavBarComponent />
    </main>
  );
}

export default Home;
