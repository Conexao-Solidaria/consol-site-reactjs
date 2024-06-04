import React from "react";
import styles from "./Integrantes.module.css";
import caio from "../../utils/assets/caio.jpg";
import edu from "../../utils/assets/edu.png";
import schimas from "../../utils/assets/shimas.jpg";
import rrr from "../../utils/assets/rrr.jpg";
import luanna from "../../utils/assets/luanna.jpg";
import bazante from "../../utils/assets/bazante.png";

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
                            <div className={styles.teste}>
                                <img src={caio} alt="Caio Arnoni" />
                            </div>
                            <h2>Caio Arnoni</h2>
                            <h3>Insira um cargo aqui</h3>
                            <div ></div>
                            <h5>Olá, Sou Rafael Schneider, tenho 19 anos e estou atualmente no curso de Ciência da Computação. Nascido em São Bernardo do Campo sempre fui guiado em expressar minha criatividade utilizando a criação em geral, o que me levou para a área de tecnologia.</h5>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.teste}>
                                <img src={bazante} alt="Gabriel Araujo" />
                            </div>
                            <h2>Gabriel Araujo</h2>
                            <h3>Insira um cargo aqui</h3>
                            <h5>Olá, Sou Rafael Schneider, tenho 19 anos e estou atualmente no curso de Ciência da Computação. Nascido em São Bernardo do Campo sempre fui guiado em expressar minha criatividade utilizando a criação em geral, o que me levou para a área de tecnologia.</h5>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.teste}>
                                <img src={edu} alt="Eduardo Seba" />
                            </div>
                            <h2>Eduardo Seba</h2>
                            <h3>Insira um cargo aqui</h3>
                            <h5>Olá, Sou Rafael Schneider, tenho 19 anos e estou atualmente no curso de Ciência da Computação. Nascido em São Bernardo do Campo sempre fui guiado em expressar minha criatividade utilizando a criação em geral, o que me levou para a área de tecnologia.</h5>
                        </div>
                    </div>
                    <div className={styles.bloco2}>
                        <div className={styles.card}>
                            <div className={styles.teste}>
                                <img src={schimas} alt="Rafael Schneider" />
                            </div>
                            <h2>Rafael Schneider</h2>
                            <h3>Insira um cargo aqui</h3>
                            <h5>Olá, Sou Rafael Schneider, tenho 19 anos e estou atualmente no curso de Ciência da Computação. Nascido em São Bernardo do Campo sempre fui guiado em expressar minha criatividade utilizando a criação em geral, o que me levou para a área de tecnologia.</h5>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.teste}>
                                <img src={rrr} alt="Rafael Rocha" />
                            </div>
                            <h2>Rafael Rocha</h2>
                            <h3>Insira um cargo aqui</h3>
                            <h5>Olá, Sou Rafael Schneider, tenho 19 anos e estou atualmente no curso de Ciência da Computação. Nascido em São Bernardo do Campo sempre fui guiado em expressar minha criatividade utilizando a criação em geral, o que me levou para a área de tecnologia.</h5>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.teste}>
                                <img src={luanna} alt="Luanna Di Stefani" />
                            </div>
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
