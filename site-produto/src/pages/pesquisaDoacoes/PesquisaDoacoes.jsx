import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NavBar from "../../components/navabar/NavBar";
import Head from "../../components/head/Head";
import style from "./PesquisaDoacoes.module.css";
import iconCrianca from "../../utils/assets/icon_Crianca.png";
import iconDoacoes from "../../utils/assets/icons_doacoes_azul.png";
import iconLupa from "../../utils/assets/icon_lupa.png"
import iconFiltro from "../../utils/assets/icon_filtro.png"


const pesquisaDoacoes = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <>
            <div className={style.container}>
                <NavBar />
                <div className={style.containerHead}>
                    <Head />

                    <div className={style.containerConteudo}>

                        <div className={style.containerBarraPesquisa}>
                            <p>Pesquisar Doações Realizadas:</p>
                            <div className={style.containerBarraPesquisa}>
                                <input type="text"
                                    placeholder='Pesquisar doação'
                                    value={query}
                                    onChange={handleInputChange} 
                                    />
                                    <button onClick={handleSearch}><img src={iconLupa} alt="icone de pesquisar" style={{with: "20px", height:"20px"}}/></button>
                            </div>


                        </div>

                        <div className={style.containerListas}>
                            <p>Filtrar por: </p>
                            <button 
                            // onClick={}
                            ><img src={iconFiltro} alt="icone de filtro" /></button>
                            <div className={style.line}></div>

                            <div className={style.containerListaDoacoes}>
                                <img src={iconDoacoes} alt='Icone de Doações'></img>
                                <div className={style.containerIdDoBanco}>
                                    <p>ID DO BANCO</p>
                                    <p className={style.Categoria}>Categoria</p>
                                </div>
                                <div >
                                    <div className={style.containerInformacoes}>
                                        <div className={style.hora}></div>
                                        <p>00h00</p>
                                        <div className={style.data}>
                                        <p> xx/xx/xxxx</p>
                                        </div>
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
    )
}
