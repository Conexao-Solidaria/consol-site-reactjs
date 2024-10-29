import modalStyle from "../modal/Modal.module.css";
import style from "./ModalDonatario.module.css";
import iconDoacoes from "../../utils/assets/icon_doacoes_azul.png";
import iconPerfil from "../../utils/assets/icon_perfil_usuario.png";
import iconFechar from "../../utils/assets/fechar.png";
import { toast } from "react-toastify";
import api from "../../api";
import { React, useEffect, handleClose } from "react";
import { useNavigate } from "react-router-dom";
import BotaoPadrao from "../botoes/BotaoPadrao";

const ModalDonatario = ({ data, isVisible, onClose }) => {
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
      const response = await api.delete(`doacoes/${id}`, yourConfig);
      toast.success("Doacao apagada com sucesso!");
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error deletando doacao:", error);
    }
  }

  async function handleEdit(id) {
    if (mostrarEdit == false) {
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
      const response = await api.put(
        `doacoes/atualizar-flag/${id}`,
        requestBody,
        yourConfig,
      );
    } catch (error) {
      console.error("Error updating flag:", error);
    }
  }

  if (!isVisible) return null;
  return (
    <>
      <div
        className={modalStyle.modal}
        style={{ display: "flex", width: "90vw" }}
      >
        <div className={modalStyle.modalHeader}>
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
                  <h1>Informações adicionais do donatário</h1>
                </div>
                <div className={style.informacaoModalDonatario}>
                  <div className={style.areaDonatario}>
                    <img
                      src={iconPerfil}
                      alt="Icone de Perfil"
                      className={style.iconPerfil}
                    />
                    <div className={style.infoDonatario}>
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
                      <div className={modalStyle.info}>
                        <p>Cep:</p>
                        <b>{data.donatario.cep}</b>
                      </div>
                    </div>
                  </div>

                  <div className={style.botoes}>
                    <BotaoPadrao
                      texto="Editar Donatário"
                      onClick={() => handleDelete(data.id)}
                    />
                    <BotaoPadrao
                      texto="Apagar Donatário"
                      onClick={() => handleFlag(data.id)}
                    />
                  </div>
                  {/* <div className={modalStyle.coluna}>
                    <br />
                    <button onClick={() => handleDelete(data.id)}>
                      Apagar doação
                    </button>
                  </div>
                  <div className={style.coluna}>
                    <br />
                    <button
                      style={{ backgroundColor: "#6C9BD9" }}
                      onClick={() => {
                        handleFlag(data.id);
                      }}
                    >
                      Mudar status
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
            {/* Informações de contatos do donatário */}
            <div className={style.linha}>
              <div className={style.coluna}>
                <div className={modalStyle.content}>
                  <div className={modalStyle.titulo}>
                    <h1>Contatos</h1>
                  </div>
                  <div className={style.donatarioBeneficiado}>
                    <div className={style.colunaImagem}>
                      <div
                        className={style.modalImagem}
                        style={{ width: "10vw" }}
                      ></div>
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
                    <h1>Dados pessoais</h1>
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
                  <h1>Doações recebidas</h1>
                </div>
                <div className={style.descricaoDoacao}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDonatario;
