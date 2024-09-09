import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./CadastrarDonatario.module.css";
import FotoFamilia from "../../utils/assets/familiares_image.png";
import InputPadrao from "../../components/inputs/InputPadrao";
import { useState } from "react";

const CadastrarDonatario = () => {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");

  return (
    <>
      <div className={style.container}>
        <div className={style.navbarContainer}>
          <NavBar />
        </div>
        <div className={style.containerGeral}>
          <div className={style.containerHead}>
            <Head />
          </div>
          <div className={style.containerConteudo}>
            <div className={style.tituloPagina}>
              <p>Cadastrar Donatário</p>
              <hr />
            </div>
            <div className={style.containerFormulario}>
              <div className={style.formulario}>
                <InputPadrao
                label="Nome:"
                placeholder="Primeiro nome"
                onlyLetters={true}
                value={nome}
                onChange={(value) => setNome(value)}
                />
                <InputPadrao
                label="CPF:"
                placeholder="___.___.___-__"
                mask="999.999.999-99"
                value={cpf}
                onChange={(value) => setCpf(value)}
                />
              </div>
              <div className={style.imagem}>
                <img src={FotoFamilia} alt="foto familia feliz" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CadastrarDonatario;
