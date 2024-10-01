// src/components/Cadastro/Cadastro.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Cadastro.module.css";
import imagem from "../../utils/assets/cadastro_image.jpg";
import { toast } from "react-toastify";
import api from "../../api";
import InputPadrao from "../../components/inputs/InputPadrao";
import BotaoPadrao from "../../components/botoes/BotaoPadrao";

function Cadastrar() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [error, setError] = useState("");
  const fkInstituicao = 1;
  const coordenador = false;

  const handleSave = async (event) => {
    event.preventDefault();
    if (senha !== confirmSenha) {
      setError("As senhas não coincidem");
      return;
    }

    try {
      const response = await api.post("/usuarios/cadastro", {
        nome,
        email,
        cpf,
        senha,
        fkInstituicao,
        coordenador,
      });

      toast.success("Novo usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Ocorreu um erro ao realizar o cadastro");
      setError(error.response?.data?.message || "Erro ao cadastrar");
    }
  };

  return (
    <div className={styles.containerBackground}>
      <img src={imagem} alt="Mulher colocando um broche de voluntário"
      />
      <div className={styles.container}>
        <div className={styles.containerForm}>
          <h3>Cadastro</h3>
          <form onSubmit={handleSave}>
            <InputPadrao
              label="Nome Completo:"
              placeholder="Seu nome completo"
              onlyLetters={true}
              value={nome}
              onChange={(value) => setNome(value)}
            />
            <InputPadrao
              label="Email:"
              placeholder="email@email.com"
              value={email}
              onChange={(value) => setEmail(value)}
            />
            <InputPadrao
              label="CPF:"
              placeholder="___.___.___-__"
              mask="999.999.999-99"
              value={cpf}
              onChange={(value) => setCpf(value)}
            />
            <InputPadrao
              label="Senha:"
              placeholder="Sua senha"
              value={senha}
              onChange={(value) => setSenha(value)}
            />
            <InputPadrao
              label="Confirmação de senha:"
              placeholder="Confirme sua senha"
              value={confirmSenha}
              onChange={(value) => setConfirmSenha(value)}
            />
            {error && <div className={styles.error}>{error}</div>}
            <div className={styles.containerRedirector}>
              <a href="/login">Já tenho uma conta</a>
              <BotaoPadrao texto="Cadastrar" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastrar;
