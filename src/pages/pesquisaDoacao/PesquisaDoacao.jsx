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
	useEffect(() => {
		if (sessionStorage.getItem("token") == null && sessionStorage.getItem("user") == undefined) {
			navigate("/login")
		}
	})
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
            const url = searchQuery ? `/doacoes/por-nome?nome=${searchQuery}` : "/doacoes";
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
        fetchData();
    }, []);

    const handleSearch = (event) => {
        const searchValue = event.target.value;
        setQuery(searchValue);
        fetchData(searchValue);
    };

    const downloadCSV = async () => {
        try {
            const response = await api.get('/doacoes/baixar-csv', yourConfig);
    
            const rawData = response.data;
            const lines = rawData.split('\n');
    
            const headers = lines[0].split(',').map(header => header.trim()).join(';');
            
            const formattedLines = lines.slice(1).map(line => {
                const columns = line.split(',');
                if (columns[0] === undefined || (columns[1] === undefined && columns[2] === undefined && columns[3] === undefined && columns[4] === undefined)) {
                    return '';
                }
                if (columns.length > 0) {
                    return `${columns[0].trim()};${columns[1].trim()};${columns[2].trim()};${columns[3].trim()};${columns[4].trim()}`;
                }
                return '';
            });
    
            const formattedCSV = [headers, ...formattedLines].join('\n');
    
            const bom = '\uFEFF';
            const blob = new Blob([bom + formattedCSV], { type: 'text/csv;charset=utf-8;' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');

            link.href = url;

            link.setAttribute('download', `doacoes ${new Date().toLocaleDateString()}.csv`);
            document.body.appendChild(link);

            link.click();
            link.remove();
        } catch (error) {
            console.error('Error downloading CSV:', error);
        }
    };

    const downloadTXT = async () => {
        try {
            const response = await api.get('/doacoes/baixar-txt', yourConfig);

            const blob = new Blob([response.data], { type: 'text/plain;charset=utf-8;' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');

            link.href = url;
            link.setAttribute('download', `doacoes ${new Date().toLocaleDateString()}.txt`);

            document.body.appendChild(link);

            link.click();
            link.remove();
        } catch (error) {
            console.error('Error downloading TXT:', error);
        }
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
                            <div className={style.containerBotao}>
                                <BotaoPadrao texto="Baixar planilha de doações" onClick={downloadCSV} />
                                <BotaoPadrao texto="Baixar texto de doações" onClick={downloadTXT} />
                            </div>
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
