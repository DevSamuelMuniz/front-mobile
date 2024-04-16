import React, { useState } from "react";
import axios from "axios";

//css
import "./loginPage.css";

//logo com nome
import LogoNome from "../../assets/img/logoDeitada.png";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email: email,
        password: senha,
      });

      console.log(response.data); // Aqui você pode tratar a resposta, por exemplo, redirecionar para "/home" se o login for bem-sucedido
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        window.location.href = '/home'; // Redireciona para "/home" se o login for bem-sucedido
      } else {
        console.error("Credenciais inválidas");
        // Aqui você pode exibir uma mensagem de erro para o usuário
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      // Aqui você pode exibir uma mensagem de erro para o usuário
    }
  };

  return (
    <main className="content-loginPage">
      <div>
        <img className="logoLogin" src={LogoNome} alt="Logo" />
      </div>

      <h1 className="tituloLogin">Entre na sua conta</h1>
      <div>
        <form className="formLogin" onSubmit={handleLogin}>
          <label className="labelLogin" htmlFor="email">
            Email
          </label>
          <input
            className="inputLogin"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o seu email aqui"
            required
          />

          <label className="labelLogin" htmlFor="senha">
            Senha
          </label>
          <input
            className="inputLogin"
            type="password"
            name="senha"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite a sua senha aqui"
            required
          />

          <button className="btnLogin" type="submit">Entrar</button>
        </form>
      </div>

      <div className="ctn-cadastro">
        <p className="cadastroLogin">Não tem uma conta?</p>
        <a href="/cadastro" className="cadastroLoginLink">Criar uma conta agora</a>
      </div>
    </main>
  );
}

export default LoginPage;
