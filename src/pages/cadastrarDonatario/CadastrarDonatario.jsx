import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./CadastrarDonatario.module.css";
import FotoFamilia from "../../utils/assets/familiares_image.png";
import InputPadrao from "../../components/inputs/InputPadrao";
import { useState } from "react";
import BotaoPadrao from "../../components/botoes/BotaoPadrao";

const CadastrarDonatario = () => {
  const [nome, setNome] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [celular, setCelular] = useState("");
  const [telefone, setTelefone] = useState("");
  const [ocupacao, setOcupacao] = useState("");
  const [familia, setFamilia] = useState("");

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
                <div className={style.formLine} id="1">
                  <InputPadrao
                    label="Nome:"
                    placeholder="Primeiro nome"
                    onlyLetters={true}
                    value={nome}
                    onChange={(value) => setNome(value)}
                  />
                </div>
                <div className={style.formLine} id="2">
                  <InputPadrao
                    label="RG:"
                    placeholder="__.___.___-_"
                    mask="99.999.999-9"
                    value={rg}
                    onChange={(value) => setRg(value)}
                  />
                  <InputPadrao
                    label="CPF:"
                    placeholder="___.___.___-__"
                    mask="999.999.999-99"
                    value={cpf}
                    onChange={(value) => setCpf(value)}
                  />
                </div>
                <div className={style.formLine} id="3">
                <InputPadrao
                    label="Data de Nascimento:"
                    placeholder="DD/MM/YY"
                    mask="99/99/99"
                    value={dataNasc}
                    onChange={(value) => setDataNasc(value)}
                  />
                  <InputPadrao
                    label="Estado Civil:"
                    placeholder="Selecione"
                    value={cpf}
                    onChange={(value) => setCpf(value)}
                  />
                  <InputPadrao
                    label="Escolaridade:"
                    placeholder="Selecione"
                    value={cpf}
                    onChange={(value) => setCpf(value)}
                  />
                </div>
                <div className={style.formLine} id="4">
                <InputPadrao
                  label="Celular:"
                  placeholder="(__) _____-____"
                  mask="(99) 99999-99"
                  value={celular}
                  onChange={(value) => setCelular(value)}
                />
                <InputPadrao
                  label="Telefone:"
                  placeholder="(__) _____-____"
                  mask="(99) 99999-99"
                  value={telefone}
                  onChange={(value) => setTelefone(value)}
                />
                </div>
                <div className={style.formLine} id="5">
                <InputPadrao
                    label="Trabalhando?:"
                    placeholder="Selecione"
                    value={cpf}
                    onChange={(value) => setCpf(value)}
                />
                <InputPadrao
                  label="Ocupação:"
                  placeholder="Ocupação"
                  mask="999.999.999-99"
                  value={ocupacao}
                  onChange={(value) => setOcupacao(value)}
                />
                </div>
                <div className={style.formLine} id="6">
                <InputPadrao
                    label="A qual familía pertence?"
                    placeholder="Nome da Família"
                    value={familia}
                    onChange={(value) => setFamilia(value)}
                />
                </div>
                <BotaoPadrao texto="Cadastrar"/>
              </div>
              <div className={style.imagem}>
                <img src={FotoFamilia} alt="Foto de uma familia unida" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CadastrarDonatario;
