import React from "react";
import style from "./DonatarioDetalhes.module.css";
import iconPerfil from "../../../utils/assets/icon_perfil_usuario.png";

const DonatarioDetalhes = ({ key, dados }) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.donatarioDetalhes}>
          <div className={style.iconContainer}>
            <img src={iconPerfil} alt="Profile Icon" />
          </div>
          <div className={style.contentContainer}>
            <span>{dados.nome}</span>
            <p>Donatário</p>
            <p>CPF: {dados.cpf}</p>
            <p>RG: {dados.rg}</p>
          </div>
        </div>
        <div className={style.enderecoDetalhes}>
          <span>{dados.telefone1} | {dados.telefone2}</span>
          <p>Telefone | Celular</p>
        </div>
      </div>
    </>
  );
};

export default DonatarioDetalhes;
