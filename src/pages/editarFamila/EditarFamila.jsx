import React from 'react';
import SideBar from "../../components/sideBar/sideBar";
import Head from "../../components/head/Head";
import style from "./EditarFamilia.module.css";

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

                        <div className={style.containerInputImg}>
                            <div className={style.camposTexto}>
                                <p>Nome:</p>
                                <input type="text"
                                    placeholder='Nome' />
                                <p>CEP:</p>
                                <input type="text"
                                    placeholder='CEP' />
                                <p>Número da Casa:</p>
                                <input type="text"
                                    placeholder='Número' />
                                <p>Renda:</p>
                                <input type="text"
                                    placeholder='Selecione' />
                                    <button>Atualizar</button>
                            </div>

                            <div>
                                <img src="" alt="foto familia feliz" />
                            </div>

                        </div>



                    </div>

                </div>
            </div>
        </>
    );
};
export default EditarFamila;