import React from "react";
import styles from "./Integrantes.module.css";
import bazante from "../../utils/assets/bazante.png";
import caio from "../../utils/assets/caio.jpg";
import edu from "../../utils/assets/edu.png";
import schimas from "../../utils/assets/rafa-s.jpg";
import rafa from "../../utils/assets/rafa-r.jpeg";
import luanna from "../../utils/assets/luanna.jpg";

const Integrantes = () => {
    return (
        <div className={styles.cardIntegrantes}>
            <div className={styles.integrantes}>
                <div className={styles.titulo}>
                    <h1>Integrantes</h1>
                </div>
                <div className={styles.blocos}>
                    <div className={styles.bloco1}>
                        <div className={styles.card}>
                            <img src={caio} alt="Caio Arnoni" />
                            <h2>Caio Arnoni</h2>
                            <h3>Insira um cargo aqui</h3>
                            <div ></div>
                            <h5>Olá, Sou Rafael Schneider, tenho 19 anos e estou atualmente no curso de Ciência da Computação. Nascido em São Bernardo do Campo sempre fui guiado em expressar minha criatividade utilizando a criação em geral, o que me levou para a área de tecnologia.</h5>
                        </div>
                        <div className={styles.card}>
                            <img src={bazante} alt="Gabriel Araujo" />
                            <h2>Gabriel Araujo</h2>
                            <h3>Insira um cargo aqui</h3>
                            <h5>Olá, Sou Rafael Schneider, tenho 19 anos e estou atualmente no curso de Ciência da Computação. Nascido em São Bernardo do Campo sempre fui guiado em expressar minha criatividade utilizando a criação em geral, o que me levou para a área de tecnologia.</h5>
                        </div>
                        <div className={styles.card}>
                            <img src={edu} alt="Eduardo Seba" />
                            <h2>Eduardo Seba</h2>
                            <h3>Insira um cargo aqui</h3>
                            <h5>Olá, Sou Rafael Schneider, tenho 19 anos e estou atualmente no curso de Ciência da Computação. Nascido em São Bernardo do Campo sempre fui guiado em expressar minha criatividade utilizando a criação em geral, o que me levou para a área de tecnologia.</h5>
                        </div>
                    </div>
                    <div className={styles.bloco2}>
                        <div className={styles.card}>
                            <img src={schimas} alt="Rafael Schneider" />
                            <h2>Rafael Schneider</h2>
                            <h3>Insira um cargo aqui</h3>
                            <h5>Olá, Sou Rafael Schneider, tenho 19 anos e estou atualmente no curso de Ciência da Computação. Nascido em São Bernardo do Campo sempre fui guiado em expressar minha criatividade utilizando a criação em geral, o que me levou para a área de tecnologia.</h5>
                        </div>
                        <div className={styles.card}>
                            <img src={rafa} alt="Rafael Rocha" />
                            <h2>Rafael Rocha</h2>
                            <h3>Insira um cargo aqui</h3>
                            <h5>Olá, Sou Rafael Schneider, tenho 19 anos e estou atualmente no curso de Ciência da Computação. Nascido em São Bernardo do Campo sempre fui guiado em expressar minha criatividade utilizando a criação em geral, o que me levou para a área de tecnologia.</h5>
                        </div>
                        <div className={styles.card}>
                            <img src={luanna} alt="Luanna Di Stefani" />
                            <h2>Luanna Di Stefani</h2>
                            <h3>Insira um cargo aqui</h3>
                            <h5>Olá, Sou Rafael Schneider, tenho 19 anos e estou atualmente no curso de Ciência da Computação. Nascido em São Bernardo do Campo sempre fui guiado em expressar minha criatividade utilizando a criação em geral, o que me levou para a área de tecnologia.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Integrantes;
