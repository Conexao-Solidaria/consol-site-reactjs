import React from "react";
import style from "./DonatarioDetalhes.module.css"
import iconPerfil from "../../../utils/assets/icon_perfil_usuario.png"

const DonatarioDetalhes = ({nome, telefone1}) => {
  return (
  <>
    <div className={style.container}>
      <div className={style.donatarioDetalhes}>
        <div className={style.iconContainer}>
          <img src={iconPerfil} alt="" />
        </div>
        <div className={style.contentContainer}>
          <span>{nome}</span>
          <p>Donatário</p>
        </div>
      </div>
      <div className={style.enderecoDetalhes}>
        <span>{telefone1}</span>
        <p>Telefone</p>
      </div>
    </div>
  </>
  )
}

export default DonatarioDetalhes;
