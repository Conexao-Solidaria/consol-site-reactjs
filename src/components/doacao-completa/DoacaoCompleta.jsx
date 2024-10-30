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
                            color: data.flagDoacaoEntregue ? 'green' : 'red !important'
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
                    <div className={style.colunaImagem}>
                      <div
                        className={style.modalImagem}
                        style={{ width: "10vw" }}
                      >
                        <img
                          src={iconPerfil}
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                          alt="Icone de Doações"
                        ></img>
                      </div>
                    </div>
                    <div className={style.coluna}>
                      <p>
                        Nome:
                        <br />
                        <b>{data.donatario.nome}</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={modalStyle.content}>
                  <div className={modalStyle.titulo}>
                    <h1>Contatos do donatário</h1>
                  </div>
                  <div className={style.contatoDonatario}>
                    <div className={modalStyle.coluna}>
                      <p>
                        Telefone:
                        <br />
                        <b>{data.donatario.telefone1}</b>
                      </p>
                      <p>
                        Celular:
                        <br />
                        <b>{data.donatario.telefone2}</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={modalStyle.content}>
                <div className={modalStyle.titulo}>
                  <h1>Descrição da doação</h1>
                </div>
                <div className={style.descricaoDoacao}>
                  <br />
                  <p id="descricaoDoacao">{data.descricao}</p>

                  <br></br>
                  <textarea
                    id="descricaoDoacaoEdit"
                    style={{ display: "none" }}
                  ></textarea>
                </div>
                <div
                  className={style.divBotao}
                  onClick={() => handleEdit(data.id)}
                >
                  <button>Editar Descrição</button>
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
