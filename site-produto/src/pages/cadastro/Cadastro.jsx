import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cadastro.module.css";
import imagem from "../../utils/assets/cadastro_image.jpg";

const Cadastro = () => {
    return (
        <>
            <div className={styles.divPrincipal}>
                <div>
                    <img src={imagem} alt="jonas"/>
                </div>
                <div className={styles.form}>
                    <div>
                        <h3>Cadastro</h3>
                        <p>Nome:</p>
                        <input type="text" placeholder="Nome Completo"/>
                        <p>RG:</p>
                        <input type="text" placeholder="XX.XXX.XXX-XX"/>
                        <p>Data de Nascimento:</p>
                        <input type="text" placeholder="DD/MM/AAAA"/>
                        <p>Senha:</p>
                        <input type="text" placeholder="Senha"/>
                        <p>Confirmação de Senha:</p>
                        <input type="text" placeholder="Confirme sua senha" />
                        <button>Confirmar</button>
                        
                    </div>
                </div>
            </div>
        </>
    );
};
export default Cadastro;
