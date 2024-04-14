import React from "react";

//CSS
import "./refeicoesPage.css";
//components
import HeaderAddRefComponent from "../../components/headerAddRefComponent/headerAddRefComponent";
import NavBarComponent from "../../components/navBarComponent/navBarComponent";


function Refeicoes() {
    return (
        <main>
            <HeaderAddRefComponent />;
            <h1>Suas refeições</h1>;
            <NavBarComponent/>
        </main>
        
    );
};

export default Refeicoes;