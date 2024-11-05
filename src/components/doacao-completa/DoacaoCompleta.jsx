import modalStyle from "../modal/Modal.module.css";
import style from "./DoacaoCompleta.module.css";
import iconDoacoes from "../../utils/assets/icon_doacoes_azul.png";
import iconPerfil from "../../utils/assets/icon_perfil_usuario.png";
import { toast } from "react-toastify";
import api from "../../api";
import { React, useEffect, handleClose } from "react";
import { useNavigate } from "react-router-dom";
import BotaoPadrao from "../botoes/BotaoPadrao";
import iconFechar from "../../utils/assets/fechar.png";

const DoacaoCompleta = ({ data, isVisible, onClose }) => {
  const navigate = useNavigate();
  var mostrarEdit = false;

  async function handleDelete(id) {
    const yourConfig = {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    };

    try {
      await api.delete(`doacoes/${id}`, yourConfig);
      toast.success("Doacao apagada com sucesso!");
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error deletando doacao:", error);
    }
  }

  async function handleEdit(id) {
    if (mostrarEdit === false) {
      document.getElementById("descricaoDoacao").style.display = "none";
      document.getElementById("descricaoDoacaoEdit").style.display = "block";
      mostrarEdit = true;
      return;
    }

    const yourConfig = {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    };

    const requestBody = {
      descricao: document.getElementById("descricaoDoacaoEdit").value,
    };

    try {
      const response = await api.put(
        `doacoes/atualizar-descricao/${id}`,
        requestBody,
        yourConfig,
      );

      toast.success("Descricao atualizada com sucesso!");
      document.getElementById("descricaoDoacao").innerHTML =
        response.data.descricao;

      document.getElementById("descricaoDoacao").style.display = "block";
      document.getElementById("descricaoDoacaoEdit").style.display = "none";

      mostrarEdit = false;
    } catch (error) {
      console.error("Error deletando doacao:", error);
    }
  }

  // Fetch data from the API
  async function handleFlag(id) {
    const yourConfig = {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    };

    const requestBody = {
      flagDoacaoEntregue: 1,
    };

    try {
      console.log(id);
      await api.put(`doacoes/atualizar-flag/${id}`, requestBody, yourConfig);
    } catch (error) {
      console.error("Error updating flag:", error);
    }
  }

  const formatarData = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);

    if (isNaN(date)) return dateString;

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  if (!isVisible) return null;
  return (
    <>
      <div
        className={modalStyle.modal}
        style={{ display: "flex", width: "90vw" }}
      >
        <div className={modalStyle.modalHeader} onClick={onClose}>
          <img
            src={iconFechar}
            alt=""
            className={modalStyle.iconFechar}
            onClick={onClose}
          />
        </div>
        <div className={modalStyle.line}>
          <div className={modalStyle.background}>
            <div className={style.linha}>
              <div className={modalStyle.content}>
                <div className={modalStyle.titulo}>
                  <h1>Informações adicionais da doação</h1>
                </div>
                <div className={style.informacaoDoacaoCompleta}>
                  <div className={style.areaDoacao}>
                    <img
                      src={iconDoacoes}
                      className={style.iconDoacoes}
                      alt="Icone de Doações"
                    />
                    <div className={style.infoWrapper}>
                      <div className={modalStyle.info}>
                        <p>Horário:</p>
                        <b>{data.dataDoacao.split("T")[1]}</b>
                      </div>
                      <div className={modalStyle.info}>
                        <p>Data:</p>
                        <b>{formatarData(data.dataDoacao.split("T")[0])}</b>
                      </div>
                      <div className={modalStyle.info}>
                        <p>Status de entrega:</p>
                        <p
                          style={{
                            fontWeight: "bold",
                            color: data.flagDoacaoEntregue
                              ? "green"
                              : "red !important",
                          }}
                        >
                          {data.flagDoacaoEntregue
                            ? "Entregue"
                            : "Não entregue"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={style.botoes}>
                    <BotaoPadrao
                      texto="Mudar status de entrega"
                      onClick={() => handleFlag(data.id)}
                    />
                    <BotaoPadrao
                      texto="Apagar Doação"
                      onClick={() => handleDelete(data.id)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={style.linha}>
              <div className={style.coluna}>
                <div className={modalStyle.content}>
                  <div className={modalStyle.titulo}>
                    <h1>Informações do donatário</h1>
                  </div>
                  <div className={style.donatarioBeneficiado}>
                    <img
                      src={iconPerfil}
                      className={style.iconPerfil}
                      alt="Icone de Perfil"
                    />
                    <div className={style.infoWrapper}>
                      <div className={modalStyle.info}>
                        <p>Nome:</p>
                        <b>{data.donatario.nome.split(" ")[0]}</b>
                      </div>
                      <div className={modalStyle.info}>
                        <p>Sobrenome:</p>
                        <b>
                          {data.donatario.nome.split(" ").slice(1).join(" ")}
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={modalStyle.content}>
                  <div className={modalStyle.titulo}>
                    <h1>Contatos do donatário</h1>
                  </div>
                  <div className={style.infoContainer}>
                    <div className={style.infoWrapper}>
                      <div className={modalStyle.info}>
                        <p>Telefone:</p>
                        <b>
                          {data?.donatario.telefone1
                            ? (() => {
                                const tel = data.donatario.telefone1;
                                const formattedTel = `(${tel.slice(0, 2)}) ${tel.slice(2, 7)}-${tel.slice(7)}`;
                                return formattedTel;
                              })()
                            : "Não disponível"}
                        </b>
                      </div>
                      <div className={modalStyle.info}>
                        <p>Telefone:</p>
                        <b>
                          {data?.donatario.telefone2
                            ? (() => {
                                const tel = data.donatario.telefone2;
                                const formattedTel = `(${tel.slice(0, 2)}) ${tel.slice(2, 7)}-${tel.slice(7)}`;
                                return formattedTel;
                              })()
                            : "Não disponível"}
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={modalStyle.content}>
                <div className={modalStyle.titulo}>
                  <h1>Descrição da doação</h1>
                </div>
                <div className={style.descricaoDoacao}>
                  <p id="descricaoDoacao">{data.descricao}</p>
                  <textarea
                    id="descricaoDoacaoEdit"
                    style={{ display: "none" }}
                  ></textarea>
                </div>
                <div className={style.botaoDescricao}>
                  <BotaoPadrao
                    texto="Editar Descrição"
                    onClick={() => handleEdit(data.id)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoacaoCompleta;
