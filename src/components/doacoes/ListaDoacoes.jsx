import React from "react";
import iconDoacoes from "../../utils/assets/icon_doacoes_azul.png";
import style from "./ListaDoacoes.module.css";

const ListaDoacoes = ({ data }) => {

  return (
    <>
      <div className={style.containerListaDoacoes}>
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

    </>
  );
}

export default ListaDoacoes;
