import React from 'react';
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./CadastroFamilia.module.css";
import image from "../../utils/assets/familia 1.png";


const CadastroFamilia = () => {
    return (
        <>
            <div className={style.container}>
                <NavBar />
                <div className={style.containerHead}>
                    <Head />

                    <div className={style.containerConteudo}>
                        <div className={style.containerCadastro}>
                            <div className={style.containerTituloCadastro}>
                                <div className={style.containerTitulo}>
                                    <p>Cadastrar Doação</p>
                                </div>
                            </div>
                            <div className={style.containerInfosCadastro}>
                                <div className={style.containerFormularioCadastro}>

                                <div className={style.campo3Formulario}>
                                        <span>Nome:</span>
                                        <input className={style.inputLinha3} placeholder='Nome' type="text" />
                                    </div>

                                    <div className={style.campo2Formulario}>
                                        <span>CEP:</span>
                                        <input className={style.inputLinha2} placeholder='CEP' type="text" />
                                    </div>

                                    <div className={style.campo1Formulario}>
                                        <div>
                                            <span>Número da casa:</span> 
                                            <input className={style.inputLinha1} placeholder='Número' type="text" />
                                        </div>
                                        <div>
                                            <span>Renda:</span>
                                             <input className={style.inputLinha1} placeholder='Selecione' type="text" />
                                        </div>
                                    </div>

                                
                                    <div className={style.ContainerBotao}><button className={style.botao}>Adicionar</button></div>
                                </div>
                                <div className={style.containerImagemCadastro}>
                                    <div className={style.containerImage}>
                                        {<img src={image} alt="Família se abraçando'" />}
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
export default CadastroFamilia;