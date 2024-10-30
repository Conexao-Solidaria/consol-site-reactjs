import React from 'react';
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./Dashboard.module.css";
import iconeFamilia from "../../utils/assets/familia.svg";
import iconeTPose from "../../utils/assets/t-pose.svg";
import iconeAlerta from "../../utils/assets/alerta.svg";
import GraficoNumeroDoacoes from "../../components/graficos/GraficoNumeroDoacoes";
import GraficoIdade from '../../components/graficos/GraficoIdade';

const Dashboard = () => {
  const data = {
    qtdFamilias: 32,
    qtdCriancas: 15,
    cadastrosProximosVencimento: 9,
    doacoesMes: [
      { mes: "Jan", qtdDoacoes: 10 },
      { mes: "Fev", qtdDoacoes: 22 },
      { mes: "Mar", qtdDoacoes: 23 },
      { mes: "Abr", qtdDoacoes: 17 },
      { mes: "Mai", qtdDoacoes: 30 },
      { mes: "Jun", qtdDoacoes: 35 },
    ]
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
                      <p>{data?.qtdFamilias}</p>
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
                        <GraficoIdade />
                      </div>
                      <hr></hr>
                      <div className={style.legenda}>
                        <p><div style={{ backgroundColor: "#EB4C46" }} />0 - 12</p>
                        <p><div style={{ backgroundColor: "#104892" }} />13 - 25</p>
                        <p><div style={{ backgroundColor: "#DEE8EC" }} />25 - 60</p>
                        <p><div style={{ backgroundColor: "#A9A9A9" }} />60+</p>
                      </div>
                    </div>
                  </div>
                  <div className={style.card}>
                    <h1>Quantidade de Doações por mês</h1>
                    <hr></hr>
                    <div className={style.contentGrafico}>
                      <GraficoNumeroDoacoes data={data.doacoesMes} />
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
