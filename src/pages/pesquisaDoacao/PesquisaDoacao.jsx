// ...other imports remain the same
import React, { useState, useEffect } from 'react';
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./PesquisaDoacao.module.css";
import ListaDoacoes from "../../components/doacoes/ListaDoacoes";
import { useNavigate } from "react-router-dom";
import api from "../../api";

const PesquisaDoacao = ({ onSearch }) => {
    const navigate = useNavigate();

    const cadastroDoacao = () => {
        navigate("/cadastro-doacao")
    }

    const [query, setQuery] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = async () => {
		setLoading(true); // Set loading to true while fetching data
        try {
            const response = await api.get(`/doacoes/por-nome?nome=${query}`, yourConfig);
            setData(response);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false); // Set loading to false after data fetched
        }
    };

    const yourConfig = {
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token")
        }
    }

    const fetchData = async (url) => {
        try {
            const response = await api.get(url, yourConfig);
            setData(response);
        } 
        catch (error) {
            console.error('Error fetching data:', error);
        } 
        finally {
            setLoading(false); // Set loading to false when the data is ready
        }
    }

    useEffect(() => {
        fetchData("/doacoes"); // Initial fetch for all donations
    }, []);

    const handleDate = (event) => {
        const data = document.getElementById("inputData").value;

		setLoading(true);
        fetchData(`/doacoes/filtro/por-data?data=${data}`); // Fetch data based on the selected date
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

                        <div className={style.containerBarraPesquisa}>
                            <p><b>Pesquisar por nome donatario:</b></p>
                            <div className={style.inputBarraPesquisa}>
                                <input type="text" onChange={handleInputChange} />
                                <button value={"PESQUISAR"} onClick={handleSearch}>PESQUISAR</button>
                            </div>
                        </div>

                        <div className={style.containerListaDoacoes}>

                            <div className={style.filtroMaisAdicionaDoacao}>
                                <div className={style.containerFiltros}>
                                    <p>Filtros data:</p>
                                    <input type="date" id="inputData" />
                                    <button value={"PESQUISAR POR DATA"} onClick={handleDate}> 
										PESQUISAR POR DATA 
									</button>
                                </div>
                                <div className={style.containerAdicionarDoacao}>
                                    <button onClick={cadastroDoacao}>+ Adicionar Doação</button>
                                </div>
                            </div>
                            <div className={style.line}>‎‎‎‎‎‎‎‎ㅤ</div>
                            {
                                data.data && data.data.map((item, index) => (
                                    <div key={index} >
                                        <ListaDoacoes data={item} />
                                    </div>
                                ))
                            }
                            <div className={style.containerDoacao}>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default PesquisaDoacao;
