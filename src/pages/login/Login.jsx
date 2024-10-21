import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import image from "../../utils/assets/login_image.jpg";
import { toast } from "react-toastify";
import api from "../../api";
import InputPadrao from "../../components/inputs/InputPadrao";
import BotaoPadrao from "../../components/botoes/BotaoPadrao";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post("/usuarios/login", { email, senha });
	  sessionStorage.setItem("token", response.data.token);
      toast.success("Login bem-sucedido!");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Erro ao tentar entrar");
      setError(error.response?.data?.message || "Erro ao tentar entrar");
    }
  };

  return (
    <div className={styles.containerBackground}>
      <img src={image} alt="Mulher colocando um broche escrito 'voluntário'"
      />
      <div className={styles.container}>
        <div className={styles.containerForm}>
          <h3>Entrar</h3>
          <form onSubmit={handleSubmit}>
            <InputPadrao
              label="Email:"
              placeholder="Email"
              value={email}
              onChange={(value) => setEmail(value)}
            />
            <InputPadrao
              label="Senha:"
              placeholder="Senha"
              value={senha}
              onChange={(value) => setSenha(value)}
            />
            {error && <div className={styles.error}>{error}</div>}
            <div className={styles.containerRedirector}>
              <a href="/cadastro">Cadastrar-se</a>
              <BotaoPadrao texto="Entrar" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
