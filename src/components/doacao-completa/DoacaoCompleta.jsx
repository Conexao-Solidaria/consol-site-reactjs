import React from "react";
import modalStyle from "../modal/Modal.module.css";
import iconPerfil from "../../utils/assets/icon_perfil_usuario.png";
import iconDoacoes from "../../utils/assets/icon_doacoes_azul.png";
import style from "../doacoes/ListaDoacoes.module.css";

const DoacaoCompleta = ({ data, isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <>
      <div className={style.containerModal}
        style={{ display: "flex" }}>
      </div>
      <div className={modalStyle.modal}
        style={{ display: "flex" }}>
        <div className={modalStyle.modalHeader} onClick={onClose}>
          <b>X</b>
        </div>


      </div>
    </>
  );
}

export default DoacaoCompleta;
