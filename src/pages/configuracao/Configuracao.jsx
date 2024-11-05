import React from "react";
import style from "./Configuracao.module.css";
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";

function Configuracao() {
    return (
        <div className={style.container}>
            <NavBar />
            <div className={style.main}>
                <div className={style.containerHead}>
                    <Head />
                </div>
                <div className={style.temas}>
                    <span className={style.tituloTexto}>Temas e Acessibilidade</span>
                    <hr className="hr" />
                    <div className={style.temasItens}>
                        <div className={style.checkbox}>
                            <span>Tema:</span>
                            <label className={style.switch}>
                                <input type="checkbox" />
                                <span className={style.slider}></span>
                            </label>
                        </div>
                        <div>
                            <span>Modo daltonismo:</span>
                            <select id="daltonismo" name="daltonismo" className={style.select}>
                                <option value="pronatopia">Pronatopia</option>
                                <option value="deuteranopia">Deuteranopia</option>
                                <option value="tritanopia">Tritanopia</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={style.suporte}>
                    <h2>Suporte</h2>
                    <div className={style.faq}>
                        <span>FAQ - Perguntas frequentes</span>
                        <input type="button" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Configuracao;
