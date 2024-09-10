import React from 'react';
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./Historico.module.css";
import LineChart from '../../components/graficos/GraficoFrequenciaDoacoes';
import ListaDoacoes from '../../components/doacoes/ListaDoacoes';

const Historico = () => {
  const vetorMockup = [
    { categoria: "teste", data: "xx-xx-xxxx", nomeCompleto: "braian braga" },
    { categoria: "gba", data: "18-05-2005", nomeCompleto: "Gabriel Bazante de Araujo" },
  ];
  return (
    <>
      <div className={style.container}>
        <NavBar />
        <div className={style.containerHead}>
          <Head />

          <div className={style.containerConteudo}>

            <div className={style.containerGeral}>

              <div className={style.containerCard}>
                <LineChart />
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

              <div className={style.line}>‎‎‎‎‎‎‎‎ㅤ</div>


              {vetorMockup && vetorMockup.map((data, index) => (
                <div key={index} >
                  <ListaDoacoes data={data} />
                </div>
              ))}
            </div>
          </div>
          <div className={style.containerModal}></div>
          <div className={style.modal}>
            <div className={style.modalHeader}>X</div>
            <div className={style.containerInfoDoacao}>
              <div className={style.background}>
                <div className={style.infoDoacao}>
                </div>
                <div className={style.descricao}>
                </div>
              </div>
            </div>
          <div className={style.containerInfoDonatario}>
            <div className={style.background}>
              <div className={style.infoDonatario}>
              </div>
              <div className={style.contato}>
              </div>
            </div>
          </div>
        </div>
      </div>
          </div>
    </>

  );
};

export default Historico;
