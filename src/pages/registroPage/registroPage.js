import React, { useState } from "react";
import axios from "axios";

//css
import "./registroPage.css";

//logo com nome
import LogoNome from "../../assets/img/logoDeitada.png";

function RegistroPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Estado para armazenar a mensagem de erro

  const handleRegistro = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        name: nome,
        email: email,
        password: senha,
      });

      console.log(response.data); // Aqui você pode tratar a resposta, por exemplo, exibir uma mensagem de sucesso
      registrado(); // Redirecionar apenas se o registro for bem-sucedido
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      if (error.response.status === 400) {
        setErrorMessage("Email já cadastrado");
      } else {
        setErrorMessage(
          "Erro ao registrar usuário. Tente novamente mais tarde."
        );
      }
    }
  };

  function registrado() {
    window.location.href = "/login";
  }

  return (
    <main className="content-RegistroPage">
      <div>
        <img className="logoRegistro" src={LogoNome} alt="" />
      </div>
      <h1 className="tituloRegistro">Crie a sua conta</h1>
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}{" "}
      {/* Exibir a mensagem de erro se houver */}
      <div className="ctn-form">
        <form className="formRegistro" onSubmit={handleRegistro}>
          <label className="labelRegistro" htmlFor="nome">
            Nome Completo
          </label>
          <input
            className="inputRegistro"
            type="text"
            name="nome"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o seu nome completo aqui"
            required
          />

          <label className="labelRegistro" htmlFor="email">
            Email
          </label>
          <input
            className="inputRegistro"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o seu email aqui"
            required
          />

          <label className="labelRegistro" htmlFor="senha">
            Senha
          </label>
          <input
            className="inputRegistro"
            type="password"
            name="senha"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite a sua senha aqui"
            required
          />

          <button className="btnRegistro" type="submit">
            Cadastrar
          </button>
        </form>

        <div className="ctn-cadastro">
          <p className="cadastroLogin">Já tem uma conta?</p>
          <a href="/login" className="cadastroLoginLink">
            Entre com uma conta agora!
          </a>
        </div>
      </div>
    </main>
  );
}

export default RegistroPage;
