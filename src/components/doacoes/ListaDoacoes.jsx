import React from "react";
import iconDoacoes from "../../utils/assets/icon_doacoes_azul.png";
import style from "./ListaDoacoes.module.css";
import ModalDoacao from "../modal/ModalDoacao"

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
      <div className={style.container} onClick={handleModal}>
        <div className={style.donatarioDetalhes}>
          <div className={style.iconContainer}>
            <img src={iconDoacoes} alt="" />
          </div>
          <div className={style.contentContainer}>
            <b>Doação feita para { data.titular.nome }</b>
            <p>Titular recebedor: { data.titular.nome }</p>
          </div>
        </div>
        <div className={style.detalhesExtras}>
          <p> {data.cep} </p>
          <p>Doação feita em { formatarData(data.dataDoacao) }</p>
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
