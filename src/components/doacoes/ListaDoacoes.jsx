import React from "react";
import iconDoacoes from "../../utils/assets/icon_doacoes_azul.png";
import iconPerfil from "../../utils/assets/icon_perfil_usuario.png";
import modalStyle from "../modal/Modal.module.css";
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
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setIsDonatarioCompleto(false);
    setIsDoacaoCompleta(false);
  }

  const [isDoacaoCompleta, setIsDoacaoCompleta] = React.useState(false);

  const handleDoacaoCompleta = () => {
    setIsDoacaoCompleta(!isDoacaoCompleta);
  }

  const [isDonatarioCompleto, setIsDonatarioCompleto] = React.useState(false);

  const handleDonatarioCompleto = () => {
    setIsDonatarioCompleto(!isDonatarioCompleto);
  }

  return (
    <>
      <div className={style.containerListaDoacoes} onClick={handleModal}>
        <img src={iconDoacoes} alt='Icone de Doações'></img>
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
        isVisible={isDoacaoCompleta}
        onClose={handleDoacaoCompleta}
      />
    </>
  );
}

export default ListaDoacoes;