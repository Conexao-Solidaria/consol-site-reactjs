import React, { useState, useEffect } from "react";
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./Donatarios.module.css";
import DonatarioDetalhes from "../../components/detalhesLista/donatarioDetalhes/DonatarioDetalhes";
import BotaoPadrao from "../../components/botoes/BotaoPadrao";
import { useNavigate } from "react-router-dom";
import api from "../../api";

function Donatarios() {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [dataMonth, setDataMonth] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (
            sessionStorage.getItem("token") == null &&
            sessionStorage.getItem("user") == undefined
        ) {
            navigate("/login");
        }
    });
    const yourConfig = {
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token")
        }
    }

    const CadastroFamilia = () => {
        sessionStorage.removeItem("idFamilia")
        navigate("/cadastrar-familia");
    };

    const CadastroDonatario = () => {
        sessionStorage.removeItem("idFamilia")
        navigate("/cadastrar-donatario");
    }

    const fetchData = async (searchQuery = "") => {
        try {
            const url = searchQuery
                ? `titulares/filtro/por-nome?nome=${searchQuery}`
                : "/titulares";
            const response = await api.get(url, yourConfig);
            if (Array.isArray(response.data)) {
                setData(response.data);
            } else {
                console.error("Expected an array but received:", response.data);
                setData([]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setData([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch = (event) => {
        const searchValue = event.target.value;
        setQuery(searchValue);

        fetchData(searchValue);
    };

    return (
        <>
            <div className={style.container}>
                <div className={style.navbarContainer}>
                    <NavBar />
                </div>
                <div className={style.containerGeral}>
                    <div className={style.containerHead}>
                        <Head />
                    </div>
                    <div className={style.containerConteudo}>
                        <div className={style.containerPesquisa}>
                            <h2>Pesquisar Donatário:</h2>
                            <input
                                type="text"
                                placeholder="Pesquisar Donátario"
                                value={query}
                                onChange={handleSearch}
                            />
                        </div>
                        <div className={style.containerDonatarios}>
                            <div className={style.containerFiltro}>
                                <div className={style.botoes}>
                                    <BotaoPadrao texto="+ Cadastrar Família" onClick={CadastroFamilia} />
                                    <BotaoPadrao texto="+ Cadastrar Donatário" onClick={CadastroDonatario} />
                                </div>
                            </div>
                            <div className={style.containerLista}>
                                {data.map((donatario, index) => (
                                    <DonatarioDetalhes
                                        key={index}
                                        dados={donatario}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Donatarios;
