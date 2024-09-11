import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./CadastrarDonatario.module.css";
import FotoFamilia from "../../utils/assets/familiares_image.png";
import InputPadrao from "../../components/inputs/InputPadrao";
import { useState } from "react";
import BotaoPadrao from "../../components/botoes/BotaoPadrao";
import ComboBox from "../../components/comboBox/ComboBox";

const CadastrarDonatario = () => {
  const [nome, setNome] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [celular, setCelular] = useState("");
  const [telefone, setTelefone] = useState("");
  const [ocupacao, setOcupacao] = useState("");
  const [familia, setFamilia] = useState("");

  const [estadoCivil, setEstadoCivil] = useState("");
  const optEstadoCivil = ["Opção 1", "Opção 2", "Opção 3", "Opção 4"];
  const [escolaridade, setEscolaridade] = useState("");
  const optEscolaridade = ["Opção 1", "Opção 2", "Opção 3", "Opção 4"];
  const [trabalhando, isTrabalhando] = useState("");
  const optTrabalhando = ["Sim", "Não"];

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
                <div className={style.formLine} id={style.formLine1}>
                  <InputPadrao
                    label="Nome Completo:"
                    placeholder="Nome Completo"
                    onlyLetters={true}
                    value={nome}
                    onChange={(value) => setNome(value)}
                  />
                </div>
                <div className={style.formLine} id={style.formLine2}>
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
                <div className={style.formLine} id={style.formLine3}>
                <InputPadrao
                    label="Data de Nascimento:"
                    placeholder="DD/MM/YY"
                    mask="99/99/99"
                    value={dataNasc}
                    onChange={(value) => setDataNasc(value)}
                  />
                  <ComboBox
                    label="Estado Civil:"
                    defaultOption="Selecione"
                    options={optEstadoCivil}
                    value={estadoCivil}
                    onChange={(e) => setEstadoCivil(e.target.value)}
                  />
                  <ComboBox
                    label="Escolaridade:"
                    defaultOption="Selecione"
                    options={optEscolaridade}
                    value={escolaridade}
                    onChange={(e) => setEscolaridade(e.target.value)}
                  />
                </div>
                <div className={style.formLine} id={style.formLine4}>
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
                <div className={style.formLine} id={style.formLine5}>
                <ComboBox
                  label="Trabalhando?"
                  options={optTrabalhando}
                  value={trabalhando}
                  onChange={(e) => isTrabalhando(e.target.value)}
                />
                <InputPadrao
                  label="Ocupação:"
                  placeholder="Ocupação"
                  value={ocupacao}
                  onChange={(value) => setOcupacao(value)}
                />
                </div>
                <div className={style.formLine} id={style.formLine6}>
                <InputPadrao
                    label="A qual familía pertence?"
                    placeholder="Nome da Família"
                    value={familia}
                    onChange={(value) => setFamilia(value)}
                />
                </div>
                <div className={style.formLine} id={style.formLine7}>
                  <BotaoPadrao texto="Cadastrar"/>
                </div>
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
