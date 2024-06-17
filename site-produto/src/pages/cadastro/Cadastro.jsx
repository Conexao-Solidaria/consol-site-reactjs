import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cadastro.module.css";
import imagem from "../../utils/assets/cadastro_image.jpg";

const Cadastro = () => {
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
};
export default Cadastro;
