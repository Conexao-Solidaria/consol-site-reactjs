import React from "react";
import style from "./BotaoPadrao.module.css"
import { useNavigate } from "react-router-dom";

const BotaoPadrao = ({texto, to, onClick}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    }
  };

  return (
  <>
    <button className={style.botao} onClick={handleClick}>
      {texto}
    </button>
  </>
  )
}

export default BotaoPadrao;
