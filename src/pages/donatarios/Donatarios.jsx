import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./Donatarios.module.css";
import DonatarioDetalhes from "../../components/detalhesLista/donatarioDetalhes/DonatarioDetalhes"
import BotaoPadrao from "../../components/botoes/BotaoPadrao";
import { useNavigate } from "react-router-dom";

function Donatarios() {
  const navigate = useNavigate();

  const CadastroFamilia = () => {
    navigate("/cadastrar-familia")
  }

  return <>
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
            <h2>Pesquisar Donatário:</h2>
            <input type="text" placeholder="Pesquisar Donátario"/>
          </div>
          <div className={style.containerDonatarios}>
            <div className={style.containerFiltro}>
              <div className={style.filtros}>
                <p>Filtar por:</p>
                <span> Nome </span>
                <p>Filtros:</p>
                <BotaoPadrao texto="Nome" />
                <BotaoPadrao texto="Rua" />
                <BotaoPadrao texto="Bairro" />
              </div>
              <div className={style.botoes}>
                <BotaoPadrao texto="+ Cadastrar Família" onClick={CadastroFamilia} />
                <BotaoPadrao texto="+ Cadastrar Donatário" to="/cadastrar-donatario"/>
              </div>
            </div>
            <div className={style.containerLista}>
              <DonatarioDetalhes />
              <DonatarioDetalhes />
              <DonatarioDetalhes />
              <DonatarioDetalhes />
              <DonatarioDetalhes />
              <DonatarioDetalhes />
              <DonatarioDetalhes />
              <DonatarioDetalhes />
              <DonatarioDetalhes />
              <DonatarioDetalhes />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default Donatarios;
