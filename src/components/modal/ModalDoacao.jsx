import React from "react";
import iconDoacoes from "../../utils/assets/icon_doacoes_azul.png";
import iconPerfil from "../../utils/assets/icon_perfil_usuario.png";
import style from "../modal/Modal.module.css";
import DoacaoCompleta from "../doacao-completa/DoacaoCompleta";
import iconFechar from "../../utils/assets/fechar.png";
import BotaoPadrao from "../botoes/BotaoPadrao";

const ModalDoacao = ({ data, isModalOpen, handleModal, closeModal }) => {
  const [isDoacaoCompleta, setIsDoacaoCompleta] = React.useState(false);

  const handleDoacaoCompleta = () => {
    setIsDoacaoCompleta(!isDoacaoCompleta);
  };
  function teste() {
    console.log(data)
  }

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
                    <b>Doação</b>
                  </div>
                  <div className={style.info}>
                    <p>Data/Hora:</p>
                    <b>{data.data}</b>
                    <p>{data.hora}</p>
                  </div>
                  <div className={style.info}>
                    <p>Categoria:</p>
                    <b>{data.categoria}</b>
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
                  <p className={style.descricao}>{data.descricao}</p>
                  <button onClick={teste}>teste</button>
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
                    <b>{data.nomeCompleto.split(" ")[0]}</b>
                  </div>
                  <div className={style.info}>
                    <p>Sobrenome:</p>
                    <b>{data.nomeCompleto.split(" ").slice(1).join(" ")}</b>
                  </div>
                  <div className={style.info}>
                    <p>Endereço:</p>
                    <b>{data.endereco}</b>
                    <p>{data.complemento}</p>
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
                    <b>{data.telefone}</b>
                  </div>
                  <div className={style.info}>
                    <p>Celular:</p>
                    <b>{data.celular}</b>
                  </div>
                  <div className={style.info}>
                    <p>Email:</p>
                    <b>{data.email}</b>
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
          </div>
        </div>
      </div>
      <DoacaoCompleta
        data={data}
        isVisible={isDoacaoCompleta}
        onClose={handleDoacaoCompleta}
      />
    </>
  );
};

export default ModalDoacao;
