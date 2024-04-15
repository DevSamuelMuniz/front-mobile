import React from "react";

//CSS
import "./refeicoesPage.css";
//components
import HeaderComponent from "../../components/headerComponent/headerComponent";
import NavBarComponent from "../../components/navBarComponent/navBarComponent";


function Refeicoes() {
    return (
        <main>
            <HeaderComponent />
            <h1>Suas refeições</h1>
            <NavBarComponent/>
        </main>
        
    );
};

export default Refeicoes;