import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";

//splashScreen
import SplashScreenComponent from "./components/splashScreenComponent/splashScreenComponent";

//pages
import LoginPage from "./pages/loginPage/loginPage";
import HomePage from "./pages/homePage/homePage";
import RegistroPage from "./pages/registroPage/registroPage";
import ProgressPage from "./pages/progressPage/progressPage";
import AddRefPage from "./pages/addRefPage/addRefPage";

function App() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Verificar se o usuário está logado ao carregar a aplicação
    checkLoggedIn();
  }, []);

  // Função para verificar se o usuário está logado
  const checkLoggedIn = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      if (response.data.length > 0) {
        setLoggedIn(true);
      }
    } catch (error) {
      console.error("Erro ao verificar login:", error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={loading ? <SplashScreenComponent /> : loggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cadastro" element={<RegistroPage />} />
        <Route path="/progresso" element={<ProgressPage />} />
        <Route path="/adicionar" element={<AddRefPage />} />
      </Routes>
    </Router>
  );
}

export default App;
