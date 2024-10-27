import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./CadastroDoacao.module.css";
import FotoDoacao from "../../utils/assets/foto-cadastro-doacao.png";
import api from "../../api";
import BotaoPadrao from "../../components/botoes/BotaoPadrao";
import InputPesquisa from "../../components/inputs/InputPesquisa";
import AreaTextoPadrao from "../../components/inputs/AreaTextoPadrao";
import { mockTitular } from "../../mocks/CsMocks";

const CadastroDoacao = () => {
  const [titular, setTitular] = useState("");
  const [descricao, setDescricao] = useState("");
  const [options, setOptions] = useState([]);

  async function executarBusca() {
    if (titular.length > 0) {
      const yourConfig = {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      };

      try {
        // const response = await api.get(
        //   `titulares/filtro/por-nome?nome=${titular}`,
        //   yourConfig,
        // );

        // setOptions(response.data);
        const resultadosFiltrados = mockTitular.filter(t =>
          t.nome.toLowerCase().includes(titular.toLowerCase())
        );
        setOptions(resultadosFiltrados);
      } catch (error) {
        console.error("Error updating flag:", error);
      }
    } else {
      setOptions([]);
    }
  }

  async function cadastrarDoacao() {
    const elementoDropDown = document.getElementById("dropdown");
    const areaTexto = document.getElementById("descricao");

    if (elementoDropDown.value != null && areaTexto.value.length > 0) {
      const yourConfig = {
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJqb2FvQGV4YW1wbGUuY29tIiwiaWF0IjoxNzI4NDA5MzQ0LCJleHAiOjE3MzIwMDkzNDR9.Hd-dTzDW4s7hoMHz584ZIPm2pCa3F0snHHQ-O7-Px1CBEwZcHnlIR-ceTLkx6zaJ",
          "Content-Type": "application/json",
        },
      };
      const bodyDoacao = {
        descricao: areaTexto.value,
        dataDoacao: "2024-07-07 14:25:04",
      };

      try {
        await api.post(
          `doacoes/titular/${elementoDropDown.value}/instituicao/1`,
          bodyDoacao,
          yourConfig,
        );
        alert("DOAÇÃO CRIADA");
      } catch (error) {
        console.error("Error updating flag:", error);
      }
    } else {
      alert("Preencha todos os campos");
    }
  }

  useEffect(() => {
    executarBusca();
  }, [titular]);

  const handleOptionSelect = (option) => {
    setTitular(option.nome);
    setOptions([]);
  };

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
              <p>Cadastrar Doação</p>
              <hr />
            </div>
            <div className={style.containerFormulario}>
              <div className={style.formulario}>
                <div className={style.formLine} id={style.formLine1}>
                  <InputPesquisa
                    className={style.titular}
                    label="Quem está recebendo a doação?"
                    placeholder="Pesquisar donatário"
                    onlyLetters={true}
                    value={titular}
                    onChange={(value) => setTitular(value)}
                    options={options}
                    onOptionSelect={handleOptionSelect}
                    id={"titular"}
                  />
                </div>
                <div className={style.formLine} id={style.formLine2}>
                  <AreaTextoPadrao
                    className={style.descricao}
                    label="Descrição:"
                    placeholder="Descrição da doação"
                    value={descricao}
                    onChange={(value) => setDescricao(value)}
                    id={"descricao"}
                  />
                </div>
                <div className={style.formLine} id={style.formLine3}>
                <BotaoPadrao texto="Adicionar Doação" onClick={ cadastrarDoacao }/>
                </div>
              </div>
              <div className={style.imagem}>
                <img src={FotoDoacao} alt="Foto de itens de uma doação" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CadastroDoacao;
