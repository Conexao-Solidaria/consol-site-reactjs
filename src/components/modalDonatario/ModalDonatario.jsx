import modalStyle from "../modal/Modal.module.css";
import style from "./ModalDonatario.module.css";
import iconPerfil from "../../utils/assets/icon_perfil_usuario.png";
import iconFechar from "../../utils/assets/fechar.png";
import { toast } from "react-toastify";
import api from "../../api";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BotaoPadrao from "../botoes/BotaoPadrao";

const ModalDonatario = ({ data, isVisible, onClose }) => {
  const [dataDonatario, setDataDonatario] = useState(null);
  const navigate = useNavigate();

  const buscaDadosDonatario = async () => {
    const yourConfig = {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await api.get(`/titular/${data.donatario.id}`, yourConfig);
      setDataDonatario(response.data);
    } catch (error) {
      console.log("Erro ao busacar titular: ", error);
    }
  }

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

  useEffect(() => {
    if (isVisible && data?.donatario?.id) {
      buscaDadosDonatario();
    }
  }, [isVisible, data]);

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
                      <div className={modalStyle.info}>
                        <p>Cep:</p>
                        <b>{data.donatario.cep}</b>
                      </div>
                    </div>
                  </div>
                  <div className={style.botoes}>
                    <BotaoPadrao
                      texto="Editar Donatário"
                      onClick={() => navigate("/editar-donatario")}
                    />
                    <BotaoPadrao
                      texto="Apagar Donatário"
                      onClick={() => handleDelete(data.id)}
                    />
                  </div>
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
                  <div className={style.infoContainer}>
                    <div className={style.infoWrapper}>
                      <div className={modalStyle.info}>
                        <p>Telefone:</p>
                        <b>
                          {(() => {
                            const tel = data.donatario.telefone1;
                            const formattedTel = `(${tel.slice(0, 2)})${tel.slice(2, 7)}-${tel.slice(7)}`;
                            return formattedTel;
                          })()}
                        </b>
                      </div>
                      <div className={modalStyle.info}>
                        <p>Celular:</p>
                        <b>
                          {(() => {
                            const tel = data.donatario.telefone2;
                            const formattedTel = `(${tel.slice(0, 2)})${tel.slice(2, 7)}-${tel.slice(7)}`;
                            return formattedTel;
                          })()}
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={modalStyle.content}>
                  <div className={modalStyle.titulo}>
                    <h1>Dados pessoais</h1>
                  </div>
                  <div className={style.infoContainer}>
                    <div className={style.infoWrapper}>
                      <div className={modalStyle.info}>
                        <p>CPF:</p>
                        <b>{dataDonatario?.cpf}</b>
                      </div>
                      <div className={modalStyle.info}>
                        <p>Data de Nascimento:</p>
                        <b>
                          {dataDonatario?.dataNascimento}
                        </b>
                      </div>
                      <div className={modalStyle.info}>
                        <p>RG:</p>
                        <b>{dataDonatario?.rg}</b>
                      </div>
                      <div className={modalStyle.info}>
                        <p>Estado Civil:</p>
                        <b>{dataDonatario?.estadoCivil}</b>
                      </div>
                      <div className={modalStyle.info}>
                        <p>Trabalhando:</p>
                        <b>{dataDonatario?.trabalhando ? "Sim" : "Não"}</b>
                      </div>
                      <div className={modalStyle.info}>
                        <p>Escolaridade:</p>
                        <b>{dataDonatario?.escolaridade}</b>
                      </div>
                      <div className={modalStyle.info}>
                        <p>Ocupação:</p>
                        <b>{dataDonatario?.ocupacao}</b>
                      </div>
                      <div className={modalStyle.info}>
                        <p>Família:</p>
                        <b>{dataDonatario?.familia.nome}</b>
                      </div>
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
