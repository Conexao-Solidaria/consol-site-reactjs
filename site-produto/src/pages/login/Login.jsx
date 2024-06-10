import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import image from "../../utils/assets/login_image.jpg";
import Cadastro from "../cadastro/Cadastro";

const Login = () => {
    return (
        <>
            <div className={styles.containerBackground}>
                <div className={styles.containerImage}>
                    <img src={image} alt="Mulher colocando um broche escrito 'voluntário'" />
                </div>

                <div className={styles.container}>
                    <div className={styles.containerForm}>
                        <h3>Login</h3>
                        <p>Email:</p>
                        <input type="text" placeholder="you@example.com" />
                        <p>Senha:</p>
                        <input type="password" placeholder="********" />
                        <div className={styles.containerButton}>
                            <button> Entrar </button>
                            <a href="/cadastro"> Não tem conta? Cadastre-se </a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
export default Login;
