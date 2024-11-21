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
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (
      sessionStorage.getItem("token") == null &&
      sessionStorage.getItem("user") == undefined
    ) {
      navigate("/login");
    }
  });

  const cadastroDoacao = () => {
    navigate("/cadastro-doacao");
  };

  const yourConfig = {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
  };

  const fetchData = async (searchQuery = "") => {
    try {
      const url = searchQuery
        ? `/doacoes/por-nome?nome=${searchQuery}`
        : "/doacoes/listagem-com-familia";
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

  if (loading) {
    return <div>Carregando página...</div>;
  }

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
              <h2>Pesquisar titular da doação:</h2>
              <input
                type="text"
                placeholder="Quem recebeu a doação?"
                value={query}
                onChange={handleSearch}
              />
            </div>
            <div className={style.containerDoacoes}>
              <div className={style.containerFiltro}>
                <div className={style.botoes}>
                  <BotaoPadrao
                    texto="+ Cadastrar Doação"
                    onClick={cadastroDoacao}
                  />
                </div>
              </div>
              <div className={style.containerLista}>
                {Array.isArray(data) && data.length > 0 ? (
                  data.map((item, index) => (
                    <div key={index}>
                      <ListaDoacoes data={item} isClickable="true"/>
                    </div>
                  ))
                ) : (
                  <p>Nenhuma doação encontrada.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PesquisaDoacao;
