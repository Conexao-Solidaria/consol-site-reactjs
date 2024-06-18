import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import image from "../../utils/assets/login_image.jpg";
import { useNavigate } from "react-router-dom";

function Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const entrar = () => {
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch('api', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha }),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            console.log('Login bem-sucedido:', data);
          } else {
            setError(data.message || 'Erro ao fazer login');
          }
        } catch (error) {
          setError('Erro ao fazer login');
        }
      };
    

    const navigateCadastro = () => {
        navigate("/cadastro");
    }
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
                            <button onClick={entrar}> Entrar </button>
                            <a onClick={navigateCadastro}>Não tem conta? Cadastre-se </a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
export default Login;
