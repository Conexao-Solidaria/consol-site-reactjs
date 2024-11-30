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
import { toast } from "react-toastify";
import { mockTitular } from "../../mocks/CsMocks";
import { useNavigate } from 'react-router-dom';

const CadastroDoacao = () => {
  const [titular, setTitular] = useState("");
  const [idTitular, setIdTitular] = useState("");
  const [descricao, setDescricao] = useState("");
  const [options, setOptions] = useState([]);

  const navigate = useNavigate();

	useEffect(() => {
		if (sessionStorage.getItem("token") == null && sessionStorage.getItem("user") == undefined) {
			navigate("/login")
		}
	})

  async function executarBusca() {
    if (titular.length > 0) {
      const yourConfig = {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      };

      try {
        const response = await api.get(
          `titulares/filtro/por-nome?nome=${titular}`,
          yourConfig,
        );

        const resultadosFiltrados = response.data.filter(t =>
          t.nome.toLowerCase().includes(titular.toLowerCase())
        );
        setOptions(resultadosFiltrados);
        // const resultadosFiltrados = mockTitular.filter(t =>
        //   t.nome.toLowerCase().includes(titular.toLowerCase())
        //);
        // setOptions(resultadosFiltrados);
      } catch (error) {
        console.error("Error updating flag:", error);
      }
    } else {
      setOptions([]);
    }
  }

  async function cadastrarDoacao() {
    const areaTexto = document.getElementById("descricao");

    if (idTitular && descricao.length > 0) {
      const yourConfig = {
        headers: {
          Authorization:
          "Bearer " + sessionStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      };

      let today = new Date();
      let dd = String(today.getDate()).padStart(2,'0');
      let mm = String(today.getMonth() + 1).padStart(2,'0');
      let yyyy = today.getFullYear();

      let hours = today.getHours();
      let minutes = today.getMinutes();
      let seconds = today.getSeconds();

      if (seconds < 10){
        today = `${yyyy}-${mm}-${dd} ${hours}:${minutes}:0${seconds}`;
      } else {
        today = `${yyyy}-${mm}-${dd} ${hours}:${minutes}:${seconds}`;
      }


      const bodyDoacao = {
        descricao: areaTexto.value,
        dataDoacao: today
      };

      try {
        await api.post(
          `doacoes/titular/${idTitular}/instituicao/1`,
          bodyDoacao,
          yourConfig,
        );

        toast.success("Doação cadastrada com sucesso")
      } 
      catch (error) {
        toast.error("Erro ao cadastrar doação");
      }
    }
    else {
      toast.error("Preencha todos os campos");
    }
  }

  useEffect(() => {
    executarBusca();
  }, [titular]);

  const handleOptionSelect = (option) => {
    setIdTitular(option.id)
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
                <AreaTextoPadrao
                  className={style.descricao}
                  label="Descrição:"
                  placeholder="Descrição da doação"
                  value={descricao}
                  onChange={(value) => setDescricao(value)}
                  id={"descricao"}
                />
                <div className={style.formLine} id={style.formLine2}>
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
