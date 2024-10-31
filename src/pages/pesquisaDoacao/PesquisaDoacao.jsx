import React, { useState, useEffect } from "react";
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./PesquisaDoacao.module.css";
import ListaDoacoes from "../../components/doacoes/ListaDoacoes";
import { useNavigate } from "react-router-dom";
import { mockDoacao } from "../../mocks/CsMocks";
import api from "../../api";
import BotaoPadrao from "../../components/botoes/BotaoPadrao";

const PesquisaDoacao = ({ onSearch }) => {
  const navigate = useNavigate();

  const cadastroDoacao = () => {
    navigate("/cadastro-doacao");
  };

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await api.get(
        `/doacoes/por-nome?nome=${query}`,
        yourConfig,
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const yourConfig = {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
  };

  const fetchData = async (url) => {
    try {
      const response = await api.get(url, yourConfig);
      setData(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData("/doacoes");
  }, []);

  const handleDate = (event) => {
    const date = document.getElementById("inputData").value;

    setLoading(true);
    fetchData(`/doacoes/filtro/por-data?data=${date}`);
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
            <div className={style.nomePesquisa}>
              <b>Pesquisar por nome donatario:</b>
            </div>
            <div className={style.inputBarraPesquisa}>
              <input type="text" onChange={handleInputChange} />
              <BotaoPadrao texto="Pesquisar" onClick={handleSearch} />
            </div>
          </div>

          <div className={style.containerListaDoacoes}>
            <div className={style.filtroMaisAdicionaDoacao}>
              <div className={style.containerFiltros}>
                <p>Filtros data:</p>
                <input type="date" id="inputData" />
                <BotaoPadrao texto="Pesquisar Por Data" onClick={handleDate} />
              </div>
              <div className={style.containerAdicionarDoacao}>
                <BotaoPadrao texto="+ Adicionar Doação" onClick={cadastroDoacao} />
              </div>
            </div>
            <hr />
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
