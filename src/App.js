import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            loading ? <SplashScreenComponent /> : <Navigate to="/login" />
          }
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
