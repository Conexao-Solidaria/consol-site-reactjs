import React, { useEffect, useState } from "react";
import style from "./Configuracao.module.css";
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import { useNavigate } from "react-router-dom";
import applyFilter from "../../applyFilter";

function Configuracao() {
  const navigate = useNavigate();
  const [filterValue, setFilterValue] = useState(() => {
	if(localStorage.getItem('tipoDaltonismo') != 1){
		return localStorage.getItem('tipoDaltonismo') || '1';
	}
  });
  
  useEffect(() => {
    if (sessionStorage.getItem("token") == null && sessionStorage.getItem("user") == undefined) {
      navigate("/login");
    }
  }, [navigate]);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    localStorage.setItem("tipoDaltonismo", selectedValue);
	applyFilter();
	if(localStorage.getItem('tipoDaltonismo') == 1){
		setFilterValue('1');
	}
	else{
		setFilterValue(selectedValue);
	}
  };

  return (
    <div className={style.container}>
      <NavBar />
      <div className={style.main}>
        <div className={style.containerHead}>
          <Head />
        </div>
        <div className={style.temas}>
          <span className={style.tituloTexto}>Temas e Acessibilidade</span>
          <hr className="hr" />
          <div className={style.temasItens}>
            <div>
              <span>Modo daltonismo:</span>
              <select value={filterValue} id="daltonismo" name="daltonismo" className={style.select} onChange={handleSelectChange}>
                <option value="1">Sem filtro</option>
                <option value="2">Pronatopia</option>
                <option value="3">Deuteranopia</option>
                <option value="4">Tritanopia</option>
              </select>
            </div>
          </div>
        </div>
        <div className={style.suporte}>
          <h2>Suporte</h2>
          <div className={style.faq}>
            <span>FAQ - Perguntas frequentes</span>
            <input type="button" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Configuracao;
