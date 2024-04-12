import React from "react";

//css
import "./navBarComponent.css"

//imagens
import Home from "../../assets/img/home.png"
import Adicionar from "../../assets/img/adicionar.png"
import Chef from "../../assets/img/chef.png"

function navBarComponent(){
    return(
        <main className="navBar">
            <a src="#" className="a-navBar"><img src={Home} alt="" className="icon-navBar"></img></a>
            <div className="sombra"></div>
            <a src="#" className="add-navBar"><img src={Adicionar} alt="" className="icon-navBar"></img></a>
            <a src="#" className="a-navBar"><img src={Chef} alt="" className="icon-navBar"></img></a>
        </main>
    );
};

export default  navBarComponent; 