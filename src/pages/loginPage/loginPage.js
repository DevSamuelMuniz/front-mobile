import React from "react";

//css
import "./loginPage.css";

//logo com nome
import LogoNome from "../../assets/img/logo&nome.png";

function loginPage() {
  return (
    <main className="content-loginPage">
      <div>
        <img className="logoLogin" src={LogoNome} alt="" />
      </div>

        <h1 className="tituloLogin">Login</h1>
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
            placeholder="Seu email"
          ></input>

          <label className="labelLogin" for="">
            Senha
          </label>
          <input
            className="inputLogin"
            type="password"
            name="senha"
            id="senha"
            placeholder="Sua senha"
          ></input>

          <button className="btnLogin">Entrar</button>
        </form>
      </div>

      <div className="ctn-cadastro">
        <p className="cadastroLogin">Não tem uma conta?</p>
        <a href="/cadastro" className="cadastroLoginLink">Cadastre-se</a>
      </div>
    </main>
  );
}

export default loginPage;
