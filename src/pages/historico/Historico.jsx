import React from 'react';
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./Historico.module.css";
import iconDoacoes from "../../utils/assets/icon_doacoes_azul.png";
import LineChart from '../../components/graficos/GraficoFrequenciaDoacoes';

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
                            <LineChart/>
                            </div>
                        </div>

                        <div className={style.containerListas}>
                            <div className={style.containerKpiHistorico}>
                            <div className={style.kpiHistorico}>
                                <p>14 Doações Periódicas</p>
                            </div>
                            <div className={style.kpiHistorico}>
                                <p>11 Novas Doações</p>
                            </div>
                            </div>

                            <div className={style.line}>‎‎‎‎‎‎‎‎ㅤ</div>


                            <div className={style.containerListaDoacoes}>
                                <img src={iconDoacoes} alt='Icone de Doações'></img>
                                <div className={style.containerTipoDoacao}>
                                    <p><b>Doação</b></p>
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
                                    <p><b>Doação</b></p>
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
                                    <p><b>Doação</b></p>
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
                                    <p><b>Doação</b></p>
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
                                    <p><b>Doação</b></p>
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
                                    <p><b>Doação</b></p>
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
                                    <p><b>Doação</b></p>
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
                                    <p><b>Doação</b></p>
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
                                    <p><b>Doação</b></p>
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
                                    <p><b>Doação</b></p>
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
                                    <p><b>Doação</b></p>
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
                                    <p><b>Doação</b></p>
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
                                    <p><b>Doação</b></p>
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
                                    <p><b>Doação</b></p>
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
                                    <p><b>Doação</b></p>
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
