import React from 'react';
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./Historico.module.css";
import LineChart from '../../components/graficos/GraficoFrequenciaDoacoes';
import { mockDoacao } from '../../mocks/CsMocks';
import ListaDoacoes from '../../components/doacoes/ListaDoacoes';

const Historico = () => {

  return (
    <>
      <div className={style.container}>
        <NavBar />
        <div className={style.containerHead}>
          <Head />

          <div className={style.containerConteudo}>

            <div className={style.containerGeral}>

              <div className={style.containerCard}>
                {/* <LineChart /> */}
              </div>
            </div>

            <div className={style.containerListas}>
              <div className={style.containerKpiHistorico}>
                <div className={style.kpiHistorico}>
                  <p>14 Doações Periódicas</p>
                </div>
                <div className={style.kpiHistorico}>
                  <p>11 Novas Doações</p>
                </div>
              </div>
              {mockDoacao?.map((data, index) => (
                <div key={index} >
                  <ListaDoacoes data={data} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Historico;
