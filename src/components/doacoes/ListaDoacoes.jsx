import React, { useState } from "react";
import iconDoacoes from "../../utils/assets/icon_doacoes_azul.png";
import style from "./ListaDoacoes.module.css";
import ModalDoacao from "../modal/ModalDoacao";
import DoacaoCompleta from "../doacao-completa/DoacaoCompleta";
import iconPerfil from "../../utils/assets/icon_perfil_usuario.png"
import api from "../../api";

const ListaDoacoes = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formatarData = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);

    if (isNaN(date)) return dateString;

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <div className={style.containerListaDoacoes} onClick={handleModal}>
        <div className={style.identificador}>
          <img
            src={iconDoacoes}
            className={style.iconDoacoes}
            alt='Icone de Doações'
          />
          <b>Doação nº{data.id}</b>
        </div>
        <div className={style.dados}>
          <p> Criado em {formatarData(data.dataDoacao)}</p>
          <div className={style.vl} />
          <p className={style.paragrafo}>
            {data.flagDoacaoEntregue? 'Entregue' : 'Não entregue'}
          </p>
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
