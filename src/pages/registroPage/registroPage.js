import React from "react";

//css
import "./registroPage.css";

//logo com nome
import LogoNome from "../../assets/img/logo&nome.png";

function registroPage() {
  return (
    <main className="content-RegistroPage">
      <div>
        <img className="logoRegistro" src={LogoNome} alt="" />
      </div>

      <h1 className="tituloRegistro">Cadastro</h1>
      <div className="ctn-form">
        <form className="formRegistro" action="">
          <label className="labelRegistro" for="">
            Nome Completo
          </label>
          <input
            className="inputRegistro"
            type="text"
            name="nome"
            id="nome"
            placeholder="Seu nome completo"
          ></input>

          <label className="labelRegistro" for="">
            Email
          </label>
          <input
            className="inputRegistro"
            type="email"
            name="email"
            id="email"
            placeholder="Seu email"
          ></input>

          <label className="labelRegistro" for="">
            Senha
          </label>
          <input
            className="inputRegistro"
            type="password"
            name="senha"
            id="senha"
            placeholder="Sua senha"
          ></input>

          <button className="btnRegistro">Cadastrar</button>
        </form>

        <a href="/login" className="btnVoltar">
          Votar
        </a>
      </div>
    </main>
  );
}

export default registroPage;
