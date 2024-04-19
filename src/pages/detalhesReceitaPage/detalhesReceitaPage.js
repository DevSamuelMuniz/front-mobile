import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./detalhesReceitaPage.css"
import axios from "axios";

import HeaderComponent from "../../components/headerComponent/headerComponent";
import NavBarComponent from "../../components/navBarComponent/navBarComponent";

function DetalhesReceitasPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=287205b89b164bdea08bae0661470da9`
        );
        setRecipe(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes da receita:", error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (!recipe) {
    return <div>Carregando...</div>;
  }

  return (
    <main >
      <HeaderComponent />
      <div className="content-detalhes">
        <h1 className="title-detalhes">{recipe.title}</h1>
        <img className="img-detalhes" src={recipe.image} alt={recipe.title} />
        <p className="tempoPreparo-detalhes">Tempo de preparo: {recipe.readyInMinutes} minutos</p>
        <h2>Ingredientes:</h2>
        <ul>
          {recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        <h2>Instruções:</h2>
        <div className="instrucoes" dangerouslySetInnerHTML={{ __html: recipe.instructions }}></div>
      </div>
      <NavBarComponent />
    </main>
  );
}

export default DetalhesReceitasPage;
