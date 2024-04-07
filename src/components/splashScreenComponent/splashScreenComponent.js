import React, { useState, useEffect } from "react";
import "./splashScreenComponent.css";
import NutriLogo from "../../assets/splashScreen/logoSplash.png";

function SplashScreenComponent() {
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoVisible(true);
    }, 500); //
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="splash-screen">
      <img
        className={`logoSplashScreen ${logoVisible ? "show" : ""}`}
        src={NutriLogo}
        alt="Logo NutriLife"
      />
    </div>
  );
}

export default SplashScreenComponent;
