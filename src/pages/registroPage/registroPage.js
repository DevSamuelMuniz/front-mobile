import React from "react";

//css
import "./registroPage.css";

//logo com nome
import LogoNome from "../../assets/img/logoDeitada.png";

function registroPage() {
  return (
    <main className="content-RegistroPage">
      <div>
        <img className="logoRegistro" src={LogoNome} alt="" />
      </div>

      <h1 className="tituloRegistro">Crie a sua conta</h1>
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
            placeholder="Digite o seu nome completo aqui"
          ></input>

          <label className="labelRegistro" for="">
            Email
          </label>
          <input
            className="inputRegistro"
            type="email"
            name="email"
            id="email"
            placeholder="Digite o seu email aqui"
          ></input>

          <label className="labelRegistro" for="">
            Senha
          </label>
          <input
            className="inputRegistro"
            type="password"
            name="senha"
            id="senha"
            placeholder="Digite a sua senha aqui"
          ></input>

          <button className="btnRegistro">Cadastrar</button>
        </form>

        <div className="ctn-cadastro">
          <p className="cadastroLogin">Já tem uma conta?</p>
          <a href="/cadastro" className="cadastroLoginLink">
            Entre com uma conta agora!
          </a>
        </div>
      </div>
    </main>
  );
}

export default registroPage;
