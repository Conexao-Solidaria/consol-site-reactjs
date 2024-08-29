// src/components/Cadastro/Cadastro.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Cadastro.module.css";
import imagem from "../../utils/assets/cadastro_image.jpg";
import { toast } from "react-toastify";
import api from "../../api";

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
      <div className={styles.containerImage}>
        <img src={imagem} alt="Mulher colocando um broche de voluntário"></img>
      </div>
      <div className={styles.container}>
        <div className={styles.containerForm}>
          <h3>Cadastro</h3>
          <form onSubmit={handleSave}>
            <p>Nome:</p>
            <input
              type="text"
              placeholder="Nome Completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <p>Email:</p>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p>CPF:</p>
            <input
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
            <p>Senha:</p>
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <p>Confirmação de Senha:</p>
            <input
              type="password"
              placeholder="Confirme sua senha"
              value={confirmSenha}
              onChange={(e) => setConfirmSenha(e.target.value)}
              required
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className={styles.containerButton}>
              <button type="submit">Cadastrar</button>
              <a href="/">Já tem conta? Realize o Login.</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastrar;
