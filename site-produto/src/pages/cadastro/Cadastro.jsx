import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Cadastro.module.css";
import imagem from "../../utils/assets/cadastro_image.jpg";
import { toast } from "react-toastify";

function Cadastrar() {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [dataNasc, setDataNasc] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmSenha, setConfirmSenha] = useState("");

    const handleSave = () => {
        const usuarioAdicionado = {
            nome,
            email,
            dataNasc,
            senha,
            confirmSenha
        };
// POST COMENTADO PARA TESTE, NECESSITA DE CHAMAR A API!!!!!!
        // api.post(``,{
        //     nome,
        //     email,
        //     dataNasc,
        //     senha,
        //     confirmSenha
        // }).then(() => {
        //     toast.sucess("Novo usuário cadastrado com sucesso!");
        // }).catch(() => {
        //     toast.error("Ocorreu um erro ao realizar o cadastro")
        // })
    };

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    }
    const handleBack = () => {
        navigate("/login")
    }



    return (
        <>
            <div className={styles.containerBackground}>
                <div className={styles.containerImage}>
                    <img src={imagem} alt="Mulher colocando um broche de voluntário"></img>
                </div>
                <div className={styles.container}>
                    <div className={styles.containerForm}>
                        <h3>Cadastro</h3>
                        <p>Nome:</p>
                        <input type="text" placeholder="Nome Completo" />
                        <p>Email:</p>
                        <input type="text" placeholder="you@example.com" />
                        <p>Data de Nascimento:</p>
                        <input type="text" placeholder="DD/MM/AAAA" />
                        <p>Senha:</p>
                        <input type="password" placeholder="Senha" />
                        <p>Confirmação de Senha:</p>
                        <input type="password" placeholder="Confirme sua senha" />
                        <div className={styles.containerButton}>
                            <button> Cadastrar </button>
                            <a href="/"> Já tem conta? Realize o Login. </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Cadastrar;
