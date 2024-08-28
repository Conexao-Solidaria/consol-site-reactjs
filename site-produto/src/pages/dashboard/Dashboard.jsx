import React from 'react';
import NavBar from "../../components/sideBar/sideBar";
import Head from "../../components/head/Head";
import style from "./Dashboard.module.css";
import iconFamilia from "../../utils/assets/icon_familia.png";
import iconCrianca from "../../utils/assets/icon_Crianca.png";
import iconAlerta from "../../utils/assets/icon_Alerta.png";
import GraficoIdade from '../../components/graficos/GraficoIdade';
import GraficoDoacoes from '../../components/graficos/GraficoNumeroDoacoes';
import iconDoacoes from "../../utils/assets/icons_doacoes_azul.png";

const Dashboard = () => {
    return (
        <>
            <div className={style.container}>
                <NavBar />
                <div className={style.containerHead}>
                    <Head />

                    <div className={style.containerConteudo}>

                        <div className={style.containerGeral}>
                            <div className={style.containerCard}>
                                <div className={style.containerTexto}>
                                    <p> Famílias Cadastradas </p>
                                </div>
                                <div className={style.line}></div>
                                <div className={style.containerMetrica}>
                                    <img src={iconFamilia} alt="Icone de família" />
                                    <p> 32 </p>
                                </div>
                            </div>

                            <div className={style.containerCard}>
                                <div className={style.containerTexto}>
                                    <p> Crianças Cadastradas</p>
                                </div>
                                <div className={style.line}></div>
                                <div className={style.containerMetrica}>
                                    <img src={iconCrianca} alt="Icone de criança" />
                                    <p> 15  </p>
                                </div>
                            </div>

                            <div className={style.containerCard}>
                                <div className={style.containerTexto}>
                                    <p> Cadastros Proxímos do Vencimento</p>
                                </div>
                                <div className={style.line}></div>
                                <div className={style.containerMetrica}>
                                    <img src={iconAlerta} alt="Icone de Alerta" />
                                    <p> 9 </p>
                                </div>
                            </div>
                        </div>

                        <div className={style.containerGraficos}>
                            <div className={style.containerIdade}>
                                <GraficoIdade />
                            </div>

                            <div className={style.containerDoacoes}>
                                <GraficoDoacoes />
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
                        </div>

                        <div className={style.containerListas}>
                            <p>Lista de Famílias com Criança</p>
                            <div className={style.line}></div>

                            <div className={style.containerListaDoacoes}>
                                <img src={iconCrianca} alt='Icone de Criança'></img>
                                <div className={style.containerTipoDoacao}>
                                    <p>Nome da Família</p>
                                </div>
                                <div >
                                    <div className={style.containerInformacoes}>
                                         <p className={style.paragrafo}> XXXX </p>
                                    </div>
                                </div>
                            </div>

                            <div className={style.containerListaDoacoes}>
                                <img src={iconCrianca} alt='Icone de Criança'></img>
                                <div className={style.containerTipoDoacao}>
                                    <p> Nome da Família</p>
                                </div>
                                <div >
                                    <div className={style.containerInformacoes}>
                                         <p className={style.paragrafo}> XXXX </p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.containerListaDoacoes}>
                                <img src={iconCrianca} alt='Icone de Criança'></img>
                                <div className={style.containerTipoDoacao}>
                                    <p>Nome da Família</p>
                                </div>
                                <div >
                                    <div className={style.containerInformacoes}>
                                        <p className={style.paragrafo}> XXXX </p>
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
export default Dashboard;
