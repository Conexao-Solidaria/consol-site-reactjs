import React, { useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./PesquisaDoacao.module.css";
import iconCrianca from "../../utils/assets/icon_Crianca.png";
import iconDoacoes from "../../utils/assets/icon_doacoes_azul.png";
import iconLupa from "../../utils/assets/icon_lupa.png";


const PesquisaDoacao = ({ onSearch }) => {
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
                            <p><b>Pesquisar Doações Realizadas:</b></p>
                            <div className={style.inputBarraPesquisa}>
                                <input type="text"
                                    placeholder='Pesquisar doação'
                                    value={query}
                                    onChange={handleInputChange}
                                />
                                <button onClick={handleSearch}><img src={iconLupa} alt="icone de pesquisar" style={{ width: "20px", height: "20px" }} /></button>
                            </div>
                        </div>

                        <div className={style.containerListaDoacoes}>

                            <div className={style.filtroMaisAdicionaDoacao}>
                                <div className={style.containerFiltros}>
                                    <p>Filtrar por: </p>
                                    <button>filtros</button>
                                    <p>Filtros:</p>
                                    <button>00h00</button>
                                    <button>DD mm YYYY</button>


                                </div>
                                <div className={style.containerAdicionarDoacao}>
                                    <button>+ Adicionar Doação</button>
                                </div>
                            </div>
                            <div className={style.line}>‎‎‎‎‎‎‎‎ㅤ</div>

                            <div className={style.containerDoacao}>
                                <img src={iconDoacoes} alt='Icone de Doações'></img>
                                <div className={style.containerIdDoBanco}>
                                    <p>ID DO BANCO</p>
                                    <p className={style.Categoria}>Categoria</p>
                                </div>
                                <div >
                                    <div className={style.containerInformacoes}>
                                        <div className={style.hora}></div>
                                        <p>00h00</p>
                                        <div className={style.verticalLine}></div>
                                        <div className={style.data}>
                                            <p> xx/xx/xxxx</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={style.containerDoacao}>
                                <img src={iconDoacoes} alt='Icone de Doações'></img>
                                <div className={style.containerIdDoBanco}>
                                    <p>ID DO BANCO</p>
                                    <p className={style.Categoria}>Categoria</p>
                                </div>
                                <div >
                                    <div className={style.containerInformacoes}>
                                        <div className={style.hora}></div>
                                        <p>00h00</p>
                                        <div className={style.verticalLine}></div>
                                        <div className={style.data}>
                                            <p> xx/xx/xxxx</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={style.containerDoacao}>
                                <img src={iconDoacoes} alt='Icone de Doações'></img>
                                <div className={style.containerIdDoBanco}>
                                    <p>ID DO BANCO</p>
                                    <p className={style.Categoria}>Categoria</p>
                                </div>
                                <div >
                                    <div className={style.containerInformacoes}>
                                        <div className={style.hora}></div>
                                        <p>00h00</p>
                                        <div className={style.verticalLine}></div>
                                        <div className={style.data}>
                                            <p> xx/xx/xxxx</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className={style.containerDoacao}>
                                <img src={iconDoacoes} alt='Icone de Doações'></img>
                                <div className={style.containerIdDoBanco}>
                                    <p>ID DO BANCO</p>
                                    <p className={style.Categoria}>Categoria</p>
                                </div>
                                <div >
                                    <div className={style.containerInformacoes}>
                                        <div className={style.hora}></div>
                                        <p>00h00</p>
                                        <div className={style.verticalLine}></div>
                                        <div className={style.data}>
                                            <p> xx/xx/xxxx</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className={style.containerDoacao}>
                                <img src={iconDoacoes} alt='Icone de Doações'></img>
                                <div className={style.containerIdDoBanco}>
                                    <p>ID DO BANCO</p>
                                    <p className={style.Categoria}>Categoria</p>
                                </div>
                                <div >
                                    <div className={style.containerInformacoes}>
                                        <div className={style.hora}></div>
                                        <p>00h00</p>
                                        <div className={style.verticalLine}></div>
                                        <div className={style.data}>
                                            <p> xx/xx/xxxx</p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className={style.containerDoacao}>
                                <img src={iconDoacoes} alt='Icone de Doações'></img>
                                <div className={style.containerIdDoBanco}>
                                    <p>ID DO BANCO</p>
                                    <p className={style.Categoria}>Categoria</p>
                                </div>
                                <div >
                                    <div className={style.containerInformacoes}>
                                        <div className={style.hora}></div>
                                        <p>00h00</p>
                                        <div className={style.verticalLine}></div>
                                        <div className={style.data}>
                                            <p> xx/xx/xxxx</p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className={style.containerDoacao}>
                                <img src={iconDoacoes} alt='Icone de Doações'></img>
                                <div className={style.containerIdDoBanco}>
                                    <p>ID DO BANCO</p>
                                    <p className={style.Categoria}>Categoria</p>
                                </div>
                                <div >
                                    <div className={style.containerInformacoes}>
                                        <div className={style.hora}></div>
                                        <p>00h00</p>
                                        <div className={style.verticalLine}></div>
                                        <div className={style.data}>
                                            <p> xx/xx/xxxx</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className={style.containerDoacao}>
                                <img src={iconDoacoes} alt='Icone de Doações'></img>
                                <div className={style.containerIdDoBanco}>
                                    <p>ID DO BANCO</p>
                                    <p className={style.Categoria}>Categoria</p>
                                </div>
                                <div >
                                    <div className={style.containerInformacoes}>
                                        <div className={style.hora}></div>
                                        <p>00h00</p>
                                        <div className={style.verticalLine}></div>
                                        <div className={style.data}>
                                            <p> xx/xx/xxxx</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className={style.containerDoacao}>
                                <img src={iconDoacoes} alt='Icone de Doações'></img>
                                <div className={style.containerIdDoBanco}>
                                    <p>ID DO BANCO</p>
                                    <p className={style.Categoria}>Categoria</p>
                                </div>
                                <div >
                                    <div className={style.containerInformacoes}>
                                        <div className={style.hora}></div>
                                        <p>00h00</p>
                                        <div className={style.verticalLine}></div>
                                        <div className={style.data}>
                                            <p> xx/xx/xxxx</p>
                                        </div>
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

export default PesquisaDoacao;
