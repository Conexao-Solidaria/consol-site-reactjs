import React from 'react';
import NavBar from "../../components/navBar/navBar";
import Head from "../../components/head/Head";
import style from "./CadastroDoacao.module.css";
import image from "../../utils/assets/foto-cadastro-doacao.png";


const CadastroDoacao = () => {
    return (
        <>
            <div className={style.container}>
                <NavBar />
                <div className={style.containerHead}>
                    <Head />

                    <div className={style.containerConteudo}>

                        <div className={style.containerGeral}>
                            <div className={style.containerCard}>
                                <h3>Pesquisar doações realizadas</h3>
                                <input className={style.inputDoacao} type="text" placeholder='Pesquisar doação' />
                            </div>
                        </div>

                        <div className={style.containerCadastro}>
                            <div className={style.containerTituloCadastro}>
                                <div className={style.containerTitulo}>
                                    <p>Cadastrar Doação</p>
                                </div>
                            </div>

                            <div className={style.line}>‎‎‎‎‎‎‎‎ㅤ</div>

                            <div className={style.containerInfosCadastro}>
                                <div className={style.containerFormularioCadastro}>

                                    <div className={style.campo1Formulario}>
                                        <p>Horário</p> <input className={style.inputLinha1} placeholder='00h00' type="text" />
                                        <p>Data:</p> <input className={style.inputLinha1} placeholder='DD/MM/YY' type="text" />
                                    </div>

                                </div>
                                <div className={style.containerImagemCadastro}>
                                    <div className={style.containerImage}>
                                        <img src={image} alt="Itens de uma cesta básica'" />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};
export default CadastroDoacao;