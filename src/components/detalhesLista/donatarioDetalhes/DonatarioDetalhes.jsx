import React from "react";
import style from "./DonatarioDetalhes.module.css";
import iconPerfil from "../../../utils/assets/icon_perfil_usuario.png";

const DonatarioDetalhes = ({ nome, CPF, RG }) => {
  return (
    <div className={style.container}>
      <div className={style.donatarioDetalhes}>
        <div className={style.iconContainer}>
          <img src={iconPerfil} alt="Perfil do Donatário" />
        </div>
        <div className={style.contentContainer}>
          <span>{nome}</span>
          <p>Donatário</p>
        </div>
      </div>
      <div className={style.enderecoDetalhes}>
        <span>{CPF}, {RG}</span>
        <p>Cpf - Rg</p>
      </div>
    </div>
  );
};

export default DonatarioDetalhes;
