import React, { useState, useEffect } from "react";
import "./homePage.css";
//component
import HeaderComponent from "../../components/headerComponent/headerComponent";
import NavBarComponent from "../../components/navBarComponent/navBarComponent";

//carrossel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//img
import Banner from "../../assets/img/banner.png";

function Home() {
  const [recipes, setRecipes] = useState([]); // Estado para armazenar as receitas
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Função para buscar as receitas da API
  const fetchRecipes = async () => {
    try {
      // Lógica para buscar as receitas da API da Edamam
      // Substitua esta lógica pela sua própria chamada à API
      const response = await fetch(
        "https://api.edamam.com/search?q=health-lunch&app_id=cfff52eb&app_key=2e15b4a09b6e798f9f51590b31214651&language=pt"
      );
      const data = await response.json();
      setRecipes(data.hits); // Assume que a resposta da API retorna uma matriz de receitas
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

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  //modal

  return (
    <main className="content-header">
      <HeaderComponent />
      

      <div className="receitas">
        <h1>Receitas</h1>
        <div className="foto-receita">
          {/* Galeria de imagens das receitas */}
          {recipes.map((recipe, index) => (
            <img
              key={index}
              src={recipe.recipe.image}
              alt={recipe.recipe.label}
              onClick={() => handleRecipeClick(recipe.recipe)}
            />
          ))}
        </div>
          {/* Modal de detalhes da receita */}
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
              <button onClick={handleCloseModal}>Fechar</button>
            </div>
          )}
      </div>
      <div className="banner-content">
        <img className="banner1" src={Banner} alt="imagem banner" />
      </div>
      <NavBarComponent/>
    </main>
  );
}

export default Home;
