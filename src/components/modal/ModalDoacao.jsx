import React from "react";
import iconDoacoes from "../../utils/assets/icon_doacoes_azul.png";
import iconPerfil from "../../utils/assets/icon_perfil_usuario.png";
import style from "../modal/Modal.module.css";
import DoacaoCompleta from "../doacao-completa/DoacaoCompleta";
import iconFechar from "../../utils/assets/fechar.png";
import BotaoPadrao from "../botoes/BotaoPadrao";
import ModalDonatario from "../modalDonatario/ModalDonatario";

const ModalDoacao = ({ data, isModalOpen, handleModal, closeModal }) => {
  const [isDoacaoCompleta, setIsDoacaoCompleta] = React.useState(false);
  const [isModalDonatario, setIsModalDonatario] = React.useState(false);

  const handleDoacaoCompleta = () => {
    setIsDoacaoCompleta(!isDoacaoCompleta);
  };

  const handleModalDonatario = () => {
    setIsModalDonatario(!isModalDonatario);
  };

  return (
    <>
      {/* Modal Blur */}
      <div
        className={style.containerModal}
        style={{ display: isModalOpen ? "block" : "none" }}
        onClick={closeModal}
      ></div>

      {/* Modal */}
      <div
        className={style.modal}
        style={{ display: isModalOpen ? "flex" : "none" }}
      >
        <div className={style.modalHeader}>
          <img
            src={iconFechar}
            alt=""
            className={style.iconFechar}
            onClick={handleModal}
          />
        </div>

        {/* Informações sobre a doação */}
        <div className={style.line}>
          <div className={style.background}>
            <div className={style.content}>
              <div className={style.titulo}>
                <h1>Informações da doação</h1>
              </div>
              <div className={style.informacoes}>
                <img
                  src={iconDoacoes}
                  alt="Icone de Doações"
                  className={style.icon}
                />
                <div className={style.containerInfo}>
                  <div className={style.info}>
                    <p>Titulo:</p>
                    <b>Doação nº{data.id}</b>
                  </div>
                  <div className={style.info}>
                    <p>Data:</p>
                    <b>
                      {(() => {
                        const [date] = data?.dataDoacao.split("T");
                        const [year, month, day] = date.split("-");
                        return `${day}/${month}/${year}`;
                      })()}
                    </b>
                  </div>
                  <div className={style.info}>
                    <p>Hora:</p>
                    <b>
                      {(() => {
                        const [, time] = data?.dataDoacao.split("T");
                        return time;
                      })()}
                    </b>
                  </div>

                  <div className={style.info}>
                    <BotaoPadrao
                      texto="Ver Mais"
                      onClick={handleDoacaoCompleta}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={style.content}>
              <div className={style.informacoes}>
                <div className={style.coluna}>
                  <p>
                    <b>Descrição:</b>
                  </p>
                  <p className={style.descricao}>{data?.descricao}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informações sobre o donatário */}
        <div className={style.line}>
          <div className={style.background}>
            <div className={style.content}>
              <div className={style.titulo}>
                <h1>Informações do donatário</h1>
              </div>
              <div className={style.informacoes}>
                <img
                  src={iconPerfil}
                  className={style.icon}
                  alt="Ícone de Perfil"
                />
                <div className={style.containerInfo}>
                  <div className={style.info}>
                    <p>Nome:</p>
                    <b>{data?.donatario.nome.split(" ")[0]}</b>
                  </div>
                  <div className={style.info}>
                    <p>Sobrenome:</p>
                    <b>{data?.donatario.nome.split(" ").slice(1).join(" ")}</b>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.content}>
              <div className={style.titulo}>
                <h1>Contato</h1>
              </div>
              <div className={style.informacoes}>
                <div className={`${style.containerInfo} ${style.contato}`}>
                  <div className={style.info}>
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
                  <div className={style.info}>
                    <p>Telefone:</p>
                    <b>
                      {data?.donatario.telefone2
                        ? (() => {
                            const tel = data.donatario.telefone1;
                            const formattedTel = `(${tel.slice(0, 2)}) ${tel.slice(2, 7)}-${tel.slice(7)}`;
                            return formattedTel;
                          })()
                        : "Não disponível"}
                    </b>
                  </div>
                  <div className={style.info}>
                    <BotaoPadrao
                      texto="Ver Mais"
                      onClick={handleModalDonatario}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DoacaoCompleta
        data={data}
        isVisible={isDoacaoCompleta}
        onClose={handleDoacaoCompleta}
      />
      <ModalDonatario
        data={data}
        isVisible={isModalDonatario}
        onClose={handleModalDonatario}
      />
    </>
  );
};

export default ModalDoacao;
