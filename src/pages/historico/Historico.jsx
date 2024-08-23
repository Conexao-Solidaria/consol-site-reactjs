import React from 'react';
import NavBar from "../../components/navBar/navBar";
import Head from "../../components/head/Head";
import style from "./Historico.module.css";
import iconFamilia from "../../utils/assets/icon_familia.png";
import iconCrianca from "../../utils/assets/icon_Crianca.png";
import iconAlerta from "../../utils/assets/icon_Alerta.png";
import GraficoIdade from '../../components/graficos/GraficoIdade';
import GraficoDoacoes from '../../components/graficos/GraficoNumeroDoacoes';
import iconDoacoes from "../../utils/assets/icons_doacoes_azul.png";
import GraficoFrequenciaDoacoes from '../../components/graficos/GraficoFrequenciaDoacoes';



const Historico = () => {
    return (
        <>
            <div className={style.container}>
                <NavBar />
                <div className={style.containerHead}>
                    <Head />

                    <div className={style.containerConteudo}>

                        <div className={style.containerGeral}>
                            
                            <div className={style.containerCard}>
                            <GraficoFrequenciaDoacoes/>
                            </div>
                        </div>

                        <div className={style.containerListas}>
                            <p>Últimas Doações</p>
                            <div className={style.line}></div>

                            <div className={style.containerListaDoacoes}>
                                <img src={iconDoacoes} alt='Icone de Doações'></img>
                                <div className={style.containerTipoDoacao}>
                                    <p>Doação</p>
                                    <p className={style.Categoria}>Categoria</p>
                                </div>
                                <div >
                                    <div className={style.containerInformacoes}>
                                        <p className={style.paragrafo}> Nome Sobrenome</p>
                                        <div className={style.verticalLine}></div>
                                        <p> xx/xx/xxxx</p>
                                    </div>
                                </div>
                            </div>

                            <div className={style.containerListaDoacoes}>
                                <img src={iconDoacoes} alt='Icone de Doações'></img>
                                <div className={style.containerTipoDoacao}>
                                    <p>Doação</p>
                                    <p className={style.Categoria}>Categoria</p>
                                </div>
                                <div >
                                    <div className={style.containerInformacoes}>
                                        <p className={style.paragrafo}> Nome Sobrenome</p>
                                        <div className={style.verticalLine}></div>
                                        <p> xx/xx/xxxx</p>
                                    </div>
                                </div>

                            </div>
                            <div className={style.containerListaDoacoes}>
                                <img src={iconDoacoes} alt='Icone de Doações'></img>
                                <div className={style.containerTipoDoacao}>
                                    <p>Doação</p>
                                    <p className={style.Categoria}>Categoria</p>
                                </div>
                                <div >
                                    <div className={style.containerInformacoes}>
                                        <p className={style.paragrafo}> Nome Sobrenome</p>
                                        <div className={style.verticalLine}></div>
                                        <p> xx/xx/xxxx</p>
                                    </div>
                                </div>

                            </div>
                            <div className={style.containerListaDoacoes}>
                                <img src={iconDoacoes} alt='Icone de Doações'></img>
                                <div className={style.containerTipoDoacao}>
                                    <p>Doação</p>
                                    <p className={style.Categoria}>Categoria</p>
                                </div>
                                <div >
                                    <div className={style.containerInformacoes}>
                                        <p className={style.paragrafo}> Nome Sobrenome</p>
                                        <div className={style.verticalLine}></div>
                                        <p> xx/xx/xxxx</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.containerListaDoacoes}>
                                <img src={iconDoacoes} alt='Icone de Doações'></img>
                                <div className={style.containerTipoDoacao}>
                                    <p>Doação</p>
                                    <p className={style.Categoria}>Categoria</p>
                                </div>
                                <div >
                                    <div className={style.containerInformacoes}>
                                        <p className={style.paragrafo}> Nome Sobrenome</p>
                                        <div className={style.verticalLine}></div>
                                        <p> xx/xx/xxxx</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.containerListaDoacoes}>
                                <img src={iconDoacoes} alt='Icone de Doações'></img>
                                <div className={style.containerTipoDoacao}>
                                    <p>Doação</p>
                                    <p className={style.Categoria}>Categoria</p>
                                </div>
                                <div >
                                    <div className={style.containerInformacoes}>
                                        <p className={style.paragrafo}> Nome Sobrenome</p>
                                        <div className={style.verticalLine}></div>
                                        <p> xx/xx/xxxx</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.containerListaDoacoes}>
                                <img src={iconDoacoes} alt='Icone de Doações'></img>
                                <div className={style.containerTipoDoacao}>
                                    <p>Doação</p>
                                    <p className={style.Categoria}>Categoria</p>
                                </div>
                                <div >
                                    <div className={style.containerInformacoes}>
                                        <p className={style.paragrafo}> Nome Sobrenome</p>
                                        <div className={style.verticalLine}></div>
                                        <p> xx/xx/xxxx</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.containerListaDoacoes}>
                                <img src={iconDoacoes} alt='Icone de Doações'></img>
                                <div className={style.containerTipoDoacao}>
                                    <p>Doação</p>
                                    <p className={style.Categoria}>Categoria</p>
                                </div>
                                <div >
                                    <div className={style.containerInformacoes}>
                                        <p className={style.paragrafo}> Nome Sobrenome</p>
                                        <div className={style.verticalLine}></div>
                                        <p> xx/xx/xxxx</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.containerListaDoacoes}>
                                <img src={iconDoacoes} alt='Icone de Doações'></img>
                                <div className={style.containerTipoDoacao}>
                                    <p>Doação</p>
                                    <p className={style.Categoria}>Categoria</p>
                                </div>
                                <div >
                                    <div className={style.containerInformacoes}>
                                        <p className={style.paragrafo}> Nome Sobrenome</p>
                                        <div className={style.verticalLine}></div>
                                        <p> xx/xx/xxxx</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>

    );
};

export default Historico;