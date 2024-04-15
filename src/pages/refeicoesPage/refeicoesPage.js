import React, { useState, useEffect } from "react";
import axios from "axios";
import CardRefeicoesComponent from "../../components/cardRefeicoesComponent/cardRefeicoesComponent";

// CSS
import "./refeicoesPage.css";
// Components
import HeaderComponent from "../../components/headerComponent/headerComponent";
import NavBarComponent from "../../components/navBarComponent/navBarComponent";

function Refeicoes() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/post");
        setPosts(response.data); // Atualiza os posts
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main>
      <HeaderComponent />
      <h1>Suas refeições</h1>

      <div>
        {posts && posts.map((post) => (
          <CardRefeicoesComponent key={post.postId} post={post} />
        ))}
      </div>
      
      <NavBarComponent />
    </main>
  );
}

export default Refeicoes;
