import React, { useState } from "react";
import iconDoacoes from "../../utils/assets/icon_doacoes_azul.png";
import style from "./ListaDoacoes.module.css";
import ModalDoacao from "../modal/ModalDoacao";
import DoacaoCompleta from "../doacao-completa/DoacaoCompleta";
import iconPerfil from "../../utils/assets/icon_perfil_usuario.png"
import api from "../../api";

const ListaDoacoes = ({ data }) => {
  // var dataDia = data?.dataDoacao.split('T')[0]
  // dataDia = dataDia.split('-')
  // dataDia = dataDia[2] + '/' + dataDia[1] + '/' + dataDia[0]

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={style.containerListaDoacoes} onClick={handleModal}>
        <img src={iconDoacoes} alt='Icone de Doações' />
        <div className={style.containerTipoDoacao}>
          <p><b>Doação</b></p>
          <p className={style.Categoria}>{data.categoria}</p>
        </div>
        <div>
          <div className={style.containerInformacoes}>
            <p className={style.paragrafo}>{data.nomeCompleto}</p>
            <div className={style.verticalLine}></div>
            <p>{data.data}</p>
          </div>
        </div>
      </div>
      <ModalDoacao
        data={data}
        isModalOpen={isModalOpen}
        handleModal={handleModal}
        closeModal={closeModal}
      />
    </>
  );
};

export default ListaDoacoes;
