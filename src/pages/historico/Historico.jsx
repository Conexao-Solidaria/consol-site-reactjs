import React, { useState, useEffect } from "react";
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./Historico.module.css";
import BarChart from "../../components/graficos/GraficoFrequenciaDoacoes";
import ListaDoacoes from "../../components/doacoes/ListaDoacoes";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { mockDoacao } from "../../mocks/CsMocks";

const Historico = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      sessionStorage.getItem("token") == null &&
      sessionStorage.getItem("user") == undefined
    ) {
      navigate("/login");
    }
  });

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newDonation, setNewDonation] = useState(0);

  const yourConfig = {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  };

  const fetchData = async (url) => {
    try {
      let contador = 0;
      const response = await api.get(url + "/listagem-com-familia", yourConfig);

      setData(response.data);

      response.data.forEach((responseU) => {
        let date = new Date(responseU.dataDoacao);
        let dateNow = new Date();
        console.log(dateNow.getMonth() + " " + date.getMonth());
        if (
          dateNow.getMonth() - 1 == date.getMonth() ||
          (dateNow.getMonth() == date.getMonth() &&
            dateNow.getFullYear() == date.getFullYear())
        ) {
          contador += 1;
        }
      });
      setNewDonation(contador);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false when the data is ready
    }
  };

  useEffect(() => {
    fetchData("/doacoes");
  }, []);

  if (loading) {
    return <div>Carregando página...</div>;
  }

  return (
    <>
      <div className={style.container}>
        <NavBar />
        <div className={style.containerHead}>
          <Head />
          <div className={style.containerConteudo}>
            <div className={style.containerGeral}>
              <div className={style.containerCard}>
                <BarChart donations={data} />
              </div>
            </div>

            <div className={style.containerListas}>
              <div className={style.containerKpiHistorico}>
                <div className={style.kpiHistorico}>
                  <p>{newDonation} Novas Doações</p>
                </div>
              </div>
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
    </>
  );
};

export default Historico;
