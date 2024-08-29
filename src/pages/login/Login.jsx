// src/components/Login/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import image from "../../utils/assets/login_image.jpg";
import { toast } from "react-toastify";
import api from "../../api";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post("/usuarios/login", { email, senha });
      toast.success("Login bem-sucedido!");
      navigate("/home");
    } catch (error) {
      toast.error(error.response?.data?.message || "Erro ao fazer login");
      setError(error.response?.data?.message || "Erro ao fazer login");
    }
  };

  return (
    <div className={styles.containerBackground}>
      <div className={styles.containerImage}>
        <img
          src={image}
          alt="Mulher colocando um broche escrito 'voluntário'"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.containerForm}>
          <h3>Login</h3>
          <form onSubmit={handleSubmit}>
            <p>Email:</p>
            <input
              type="text"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p>Senha:</p>
            <input
              type="password"
              placeholder="********"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className={styles.containerButton}>
              <button type="submit">Entrar</button>
              <a href="/cadastro">Não tem conta? Cadastre-se</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
