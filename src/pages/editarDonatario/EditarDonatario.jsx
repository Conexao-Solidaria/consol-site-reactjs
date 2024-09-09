import React from 'react';
import SideBar from "../../components/sideBar/sideBar";
import Head from "../../components/head/Head";
import style from "./EditarDonatario.module.css";
import FotoFamilia from "../../utils/assets/foto-familia.png";

const EditarDonatario = () => {
    return (
        <>
            <div className={style.container}>
                <SideBar />
                <div className={style.containerHead}>
                    <Head />

                    <div className={style.containerConteudo}>
                        <div className={style.tituloPagina}>
                            <p>Editar Família</p>
                        </div>
                        <div className={style.line}>‎‎‎‎‎‎‎‎ㅤ</div>

                        <div className={style.containerFormularioImg}>

                            <div className={style.formulario}>
                                <div className={style.nome}>
                                    <p>Nome:</p>
                                    <input type="text"
                                        placeholder='Nome' />
                                </div>

                                <div className={style.cep}>
                                    <p>CEP:</p>
                                    <input type="text"
                                        placeholder='CEP' />
                                </div>

                                <div className={style.formulario2}>
                                    <div className={style.numeroCasa}>
                                        <p>Número da Casa:</p>
                                        <input type="text"
                                            placeholder='Número' />
                                    </div>

                                    <div className={style.renda}>
                                        <p>Renda:</p>
                                        <input type="text"
                                            placeholder='Renda' />
                                    </div>

                                </div>
                                
                                <div className={style.botaoAtualizar}>
                                    <button>Atualizar</button>
                                </div>

                            </div>


                            <div className={style.fotoFamilia}>
                                <img src={FotoFamilia} alt="foto familia feliz" />
                            </div>

                        </div>



                    </div>

                </div>
            </div>
        </>
    );
};
export default EditarDonatario;