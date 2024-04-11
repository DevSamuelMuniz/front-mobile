import React from "react";

//css
import "./loginPage.css";

//logo com nome
import LogoNome from "../../assets/img/logoDeitada.png";

function entrar(){
  window.location.href = '/home'
}

function loginPage() {
  return (
    <main className="content-loginPage">
      <div>
        <img className="logoLogin" src={LogoNome} alt="Logo" />
      </div>

        <h1 className="tituloLogin">Entre na sua conta</h1>
      <div>

        <form className="formLogin" action="">
          <label className="labelLogin" for="">
            Email
          </label>
          <input
            className="inputLogin"
            type="email"
            name="email"
            id="email"
            placeholder="Digite o seu email aqui"
          ></input>

          <label className="labelLogin" for="">
            Senha
          </label>
          <input
            className="inputLogin"
            type="password"
            name="senha"
            id="senha"
            placeholder="Digite o sua senha aqui"
          ></input>

          <button onClick={entrar} className="btnLogin">Entrar</button>
        </form>
      </div>

      <div className="ctn-cadastro">
        <p className="cadastroLogin">Não tem uma conta?</p>
        <a href="/cadastro" className="cadastroLoginLink">Criar uma conta agora</a>
      </div>
    </main>
  );
}

export default loginPage;
