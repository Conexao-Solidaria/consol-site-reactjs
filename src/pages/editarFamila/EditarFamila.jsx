import React from 'react';
import SideBar from "../../components/sideBar/sideBar";
import Head from "../../components/head/Head";
import style from "./EditarFamilia.module.css";
import FotoFamilia from "../../utils/assets/foto-familia.png";

const EditarFamila = () => {
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
                                <p>Nome:</p>
                                <input type="text"
                                    placeholder='Nome' />
                                <p>CEP:</p>
                                <input type="text"
                                    placeholder='CEP' />

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
                                        <div className={style.botaoAtualizar}>
                                            <button>Atualizar</button>
                                        </div>
                                    </div>

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
export default EditarFamila;