import React, { useState, useEffect } from "react";
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./PesquisaDoacao.module.css";
import ListaDoacoes from "../../components/doacoes/ListaDoacoes";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import BotaoPadrao from "../../components/botoes/BotaoPadrao";

const PesquisaDoacao = () => {
    const navigate = useNavigate();
  
  	if (sessionStorage.getItem("token") == null && sessionStorage.getItem("user") == undefined){
		navigate("/")
  	}

    const cadastroDoacao = () => {
        navigate("/cadastro-doacao");
    };

    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const yourConfig = {
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
    };

    const fetchData = async (searchQuery = '') => {
        try {
            const url = searchQuery ? `/doacoes/por-nome?nome=${searchQuery}` : "/doacoes"; // Update API endpoint here
            const response = await api.get(url, yourConfig);
            if (Array.isArray(response.data)) {
                setData(response.data);
            } else {
                console.error('Expected an array but received:', response.data);
                setData([]);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setData([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(); // Fetch all donations initially
    }, []);

    const handleSearch = (event) => {
        const searchValue = event.target.value;
        setQuery(searchValue);
        fetchData(searchValue); // Fetch donations based on search query
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className={style.container}>
                <NavBar />
                <div className={style.containerHead}>
                    <Head />
                    <div className={style.containerConteudo}>
                        <div className={style.containerPesquisa}>
                            <h2>Pesquisar Doação:</h2>
                            <input
                                type="text"
                                placeholder="Pesquisar Donatário"
                                value={query}
                                onChange={handleSearch}
                            />
                        </div>

                        <div className={style.containerListaDoacoes}>
                            <div className={style.filtroMaisAdicionaDoacao}>
                                <div className={style.containerAdicionarDoacao}>
                                    <BotaoPadrao texto="+ Adicionar Doação" onClick={cadastroDoacao} />
                                </div>
                            </div>
                            {Array.isArray(data) && data.length > 0 ? (
                                data.map((item, index) => (
                                    <div key={index}>
                                        <ListaDoacoes data={item} />
                                    </div>
                                ))
                            ) : (
                                <p>Nenhuma doação encontrada.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PesquisaDoacao;
