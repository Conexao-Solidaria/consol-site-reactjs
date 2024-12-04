import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./Dashboard.module.css";
import iconeFamilia from "../../utils/assets/familia.svg";
import iconeTPose from "../../utils/assets/t-pose.svg";
import iconeAlerta from "../../utils/assets/alerta.svg";
import GraficoNumeroDoacoes from "../../components/graficos/GraficoNumeroDoacoes";
import GraficoIdade from "../../components/graficos/GraficoIdade";
import api from "../../api";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    qtdFamilia: 0,
    qtdCriancas: 0,
    cadastrosProximosVencimento: 0,
    distribuicaoIdades: {
      zeroDoze: 0,
      trezeVinteCinco: 0,
      vinteCincoSessenta: 0,
      maisSessenta: 0,
    },
    qtdDoacoesMes: {},
  });
  const [qtdDoacoesMes, setQtdDoacoesMes] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (
      sessionStorage.getItem("token") == null &&
      sessionStorage.getItem("user") == undefined
    ) {
      navigate("/login");
    }
  });

  const getDataAtual = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;

    return today;
  };

  const yourConfig = {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
  };

  const fetchData = async (url) => {
    try {
      const uri = `${url}?data=${getDataAtual()}`;
      const response = await api.get(uri, yourConfig);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchDataQtdDoacao = async (url) => {
    try {
      const uri = `${url}?data=${getDataAtual()}`;
      const response = await api.get(uri, yourConfig);
      setQtdDoacoesMes(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData("/dashboard/data-atual");
    fetchDataQtdDoacao("/dashboard/data-base")
    const interval = setInterval(
      () => fetchData("/dashboard/data-atual"),
      60000,
    );
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            fontSize: "2rem",
          }}>
          Carregando página...
        </div>;
      </>
    );
  }

  return (
    <>
      <div className={style.container}>
        <NavBar />
        <div className={style.containerGeral}>
          <div className={style.containerHead}>
            <Head />
          </div>
          <div className={style.containerContent}>
            <div className={style.linhaKPI}>
              <div className={style.cardFundo}>
                <div className={style.linha}>
                  <div className={style.card}>
                    <h1>Familias</h1>
                    <hr></hr>
                    <div className={style.contentKPI}>
                      <img src={iconeFamilia} alt="Familia" />
                      <p>{data?.qtdFamilia}</p>
                    </div>
                  </div>
                  <div className={style.card}>
                    <h1>Quantidade de Crianças</h1>
                    <hr></hr>
                    <div className={style.contentKPI}>
                      <img src={iconeTPose} alt="T Pose" />
                      <p>{data?.qtdCriancas}</p>
                    </div>
                  </div>
                  <div className={style.card}>
                    <h1>Cadastros perto do vencimento</h1>
                    <hr></hr>
                    <div className={style.contentKPI}>
                      <img src={iconeAlerta} alt="Alerta" />
                      <p>{data?.cadastrosProximosVencimento}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.linha}>
              <div className={style.cardFundo}>
                <div className={style.linha}>
                  <div className={style.cardGrafico}>
                    <div className={style.card}>
                      <h1>Faixa etária dos membros das famílias</h1>
                      <hr></hr>
                      <div className={style.contentGraficoPizza}>
                        <GraficoIdade
                          distribuicaoIdades={data?.distribuicaoIdades}
                        />
                      </div>
                      <hr></hr>
                      <div className={style.legenda}>
                        <p style={{fontSize: "1rem", color:"black"}}>
                          <div style={{backgroundColor: "#EB4C46" }} />0 - 12
                        </p>
                        <p style={{fontSize: "1rem", color:"black"}}>
                          <div style={{ backgroundColor: "#104892" }} />
                          13 - 25
                        </p>
                        <p style={{fontSize: "1rem", color:"black"}}>
                          <div style={{ backgroundColor: "#DEE8EC" }} />
                          25 - 60
                        </p>
                        <p style={{fontSize: "1rem", color:"black"}}>
                          <div style={{ backgroundColor: "#A9A9A9" }} />
                          60+
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={style.card}>
                    <h1>Quantidade de Doações por mês</h1>
                    <hr></hr>
                    <div className={style.contentGrafico}>
                      <GraficoNumeroDoacoes data={qtdDoacoesMes} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
