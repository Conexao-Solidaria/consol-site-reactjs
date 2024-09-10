import React from "react";
import iconDoacoes from "../../utils/assets/icon_doacoes_azul.png";
import style from "./ListaDoacoes.module.css";
import modalStyle from "../modal/Modal.module.css";

const ListaDoacoes = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
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
      <div
        className={modalStyle.containerModal}
        style={{ display: isModalOpen ? 'block' : 'none' }}
        onClick={handleModal}
      ></div>

      <div
        className={modalStyle.modal}
        style={{ display: isModalOpen ? 'flex' : 'none' }}
      >
        <div className={modalStyle.modalHeader}><b onClick={handleModal}>X</b></div>
        <div className={modalStyle.line}>
          <div className={modalStyle.background}>
            <div className={modalStyle.content}>
            </div>
            <div className={modalStyle.content}>
            </div>
          </div>
        </div>
        <div className={modalStyle.line}>
          <div className={modalStyle.background}>
            <div className={modalStyle.content}>
            </div>
            <div className={modalStyle.content}>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default ListaDoacoes;
