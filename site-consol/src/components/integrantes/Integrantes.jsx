import React from "react";
import styles from "./Integrantes.module.css";
import bazante from "../../utils/assets/bazante.png";
import caio from "../../utils/assets/caio.jpg";
import edu from "../../utils/assets/edu.png";
import schimas from "../../utils/assets/rafa-s.jpg";
import rafa from "../../utils/assets/rafa-r.jpeg";
import luanna from "../../utils/assets/luanna.jpg";

const integrantes = () => {
    return (
        <>
            <Integrantes />
            <div className={styles["integrantes"]}>
                <h1>
                    Integrantes
                </h1>

                <div className={styles["card"]}>
                    <div className={styles["caioIMG"]}>
                    <img src={caio} alt="caio" />
                    </div>
                    <div className={styles[texto]}>
                        <h2>
                            Caio Arnoni
                        </h2>
                        <h3>
                            ******
                        </h3>
                        <h5>
                        Olá, Sou Rafael Scheneider, tenho 19 anos e estou atualmente no curso de Ciência da Computação. Nascido em São Bernardo do Campo sempre fui guiado em expressar minha criatividade utilizando a criação em geral, o que me levou para a área de tecnologia.
                        </h5>
                    </div>
                </div>

                <div className={styles["card"]}>
                    <div className={styles["bazanteIMG"]}>
                    <img src={bazante} alt="bazante" />
                    </div>
                    <div className={styles[texto]}>
                        <h2>
                            Gabriel Araujo
                        </h2>
                        <h3>
                            ******
                        </h3>
                        <h5>
                        Olá, Sou Rafael Scheneider, tenho 19 anos e estou atualmente no curso de Ciência da Computação. Nascido em São Bernardo do Campo sempre fui guiado em expressar minha criatividade utilizando a criação em geral, o que me levou para a área de tecnologia.
                        </h5>
                    </div>
                </div>

                <div className={styles["card"]}>
                    <div className={styles["eduIMG"]}>
                    <img src={edu} alt="edu" />
                    </div>
                    <div className={styles[texto]}>
                        <h2>
                            Eduardo Seba
                        </h2>
                        <h3>
                            ******
                        </h3>
                        <h5>
                        Olá, Sou Rafael Scheneider, tenho 19 anos e estou atualmente no curso de Ciência da Computação. Nascido em São Bernardo do Campo sempre fui guiado em expressar minha criatividade utilizando a criação em geral, o que me levou para a área de tecnologia.
                        </h5>
                    </div>
                </div>

                <div className={styles["card"]}>
                    <div className={styles["schimasIMG"]}>
                    <img src={schimas} alt="schimas" />
                    </div>
                    <div className={styles[texto]}>
                        <h2>
                            Rafael Scheneider
                        </h2>
                        <h3>
                            ******
                        </h3>
                        <h5>
                        Olá, Sou Rafael Scheneider, tenho 19 anos e estou atualmente no curso de Ciência da Computação. Nascido em São Bernardo do Campo sempre fui guiado em expressar minha criatividade utilizando a criação em geral, o que me levou para a área de tecnologia.
                        </h5>
                    </div>
                </div>

                <div className={styles["card"]}>
                    <div className={styles["rafaIMG"]}>
                    <img src={rafa} alt="rafa" />
                    </div>
                    <div className={styles[texto]}>
                        <h2>
                            Rafael Rocha
                        </h2>
                        <h3>
                            ******
                        </h3>
                        <h5>
                        Olá, Sou Rafael Scheneider, tenho 19 anos e estou atualmente no curso de Ciência da Computação. Nascido em São Bernardo do Campo sempre fui guiado em expressar minha criatividade utilizando a criação em geral, o que me levou para a área de tecnologia.
                        </h5>
                    </div>
                </div>

                <div className={styles["card"]}>
                    <div className={styles["luannaIMG"]}>
                    <img src={luanna} alt="luanna" />
                    </div>
                    <div className={styles[texto]}>
                        <h2>
                            Luanna Di Stefani
                        </h2>
                        <h3>
                            ******
                        </h3>
                        <h5>
                        Olá, Sou Rafael Scheneider, tenho 19 anos e estou atualmente no curso de Ciência da Computação. Nascido em São Bernardo do Campo sempre fui guiado em expressar minha criatividade utilizando a criação em geral, o que me levou para a área de tecnologia.
                        </h5>
                    </div>
                </div>
 
            </div>
        </>
    )
}
