import react from "react";

//css
import "./addRefPage.css"
import HeaderAddRefComponent from "../../components/headerAddRefComponent/headerAddRefComponent";


//imagens
import Camera from "../../assets/img/camera.png"

function AddRefPage (){
    return (
        <main className="form-add">
           <HeaderAddRefComponent />
           <label className="pergunta">Qual a refeição?</label>
           <input
           className="input-nome"
           placeholder="Digite um nome para a sua refeição"
           />
           <label className="pergunta">Sobre a refeição:</label>     
           <textarea className="input-descricao" placeholder="Descreva a sua refeição"></textarea>   
           <button className="btn-add"><img src={Camera}></img><a>Adicionar foto da Refeição</a></button>
           <button className="btn-salvar">Salvar</button>
        </main>
    );
};

export default AddRefPage;