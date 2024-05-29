import React from 'react';
import imagemPessoasUnidas from "../../utils/assets/imgPessoasUnidas.png";
import styles from './NossaHistoria.module.css';

const NossaHistoria = () => {
    return (
        <div className={styles.container}>

            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={imagemPessoasUnidas} alt="Pessoas Unidas" />
                </div>
                <div className={styles.text}>
                    <h1>Nossa História</h1>
                    <h3>A história do nosso projeto começa em fevereiro de 2024, na primeira aula de PI (projeto de pesquisa e inovação) do segundo ano de Ciências da Computação, onde todos nós passamos a integrar o grupo, e que mais tarde decidimos que viraríamos a ConSol.</h3>
                    <h2>Mas afinal, por que chamamos ConSol?</h2>
                    <h3>Esse nome partir da definição do tema do nosso projeto, esse projeto teria que atender uma das ODs da ONU.</h3>
                    <h2>O que são ODs da ONU?</h2>
                    <h3>As ODs significa Objetivos de Desenvolvimento Sustentável.</h3>
                    <h2>E o que significa ConSol e que ODs são atendidas com esse projeto?</h2>
                    <h3> ConSol significa Conexão Solidária, e nossa ideia é atender as ODS 1 e 2, que são Erradicação da pobreza e Fome zero e agricultura sustentável, respectivamente.</h3>
                </div>
            </div>


        </div>
    );
};

export default NossaHistoria;