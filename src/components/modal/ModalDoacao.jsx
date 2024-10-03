import React from "react";
import iconDoacoes from "../../utils/assets/icon_doacoes_azul.png";
import iconPerfil from "../../utils/assets/icon_perfil_usuario.png";
import style from "../modal/Modal.module.css";
import DoacaoCompleta from "../doacao-completa/DoacaoCompleta";
import iconFechar from "../../utils/assets/fechar.png";

const ModalDoacao = ({ data, isModalOpen, handleModal, closeModal }) => {
  const [isDoacaoCompleta, setIsDoacaoCompleta] = React.useState(false);

  const handleDoacaoCompleta = () => {
    setIsDoacaoCompleta(!isDoacaoCompleta);
  };

  return (
    <>
      {/* Modal Blur */}
      <div
        className={style.containerModal}
        style={{ display: isModalOpen ? 'block' : 'none' }}
        onClick={closeModal}
      ></div>

      {/* Modal */}
      <div
        className={style.modal}
        style={{ display: isModalOpen ? 'flex' : 'none' }}
      >
        <div className={style.modalHeader}>
          <img
            src={iconFechar}
            alt=""
            className={style.iconFechar}
            onClick={handleModal}
          />
        </div>
        <div className={style.line}>
          <div className={style.background}>
            <div className={style.content}>
              <div className={style.titulo}>
                <h1>Informações da doação</h1>
              </div>
              <div className={style.informacoesDoacao}>
                <div className={style.modalImagem}>
                  <img
                    src={iconDoacoes}
                    alt='Icone de Doações'
                    className={style.iconDoacoes}
                  />
                </div>
                <div className={style.coluna}>
                  <p>Título:
                    <br /><b>Doacao</b></p>
                  <p>Categoria:
                    <br /><b>{data.categoria}</b></p>
                </div>
                <div className={style.coluna}>
                  <p>Data/Hora:
                    <br /><b>{data.hora}</b>
                    <br />{data.data}</p>
                  <button
                    className={style.botao}
                    onClick={handleDoacaoCompleta}
                  >
                    Ver Mais
                  </button>
                </div>
              </div>
            </div>
            <div className={style.content}>
              <div className={style.informacoesDoacao}>
                <div className={style.coluna}>
                  <p><b>Descrição: </b></p>
                  <br />{data.descricao}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.line}>
          <div className={style.background}>
            <div className={style.content}>
              <div className={style.titulo}>
                <h1>Informações do donatário</h1>
              </div>
              <div className={style.informacoesDoacao}>
                <div className={style.modalImagem}>
                  <img
                    src={iconPerfil}
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                    alt='Icone de Doações'></img>
                </div>
                <div className={style.coluna}>
                  <p>Nome:
                    <br /><b>{data.nomeCompleto.split(' ')[0]}</b></p>
                  <p>Sobrenome:
                    <br /><b>{data.nomeCompleto.split(' ').slice(1).join(' ')}</b></p>
                </div>
                <div className={style.coluna}>
                  <p>Endereço:
                    <br /><b>{data.endereco}</b>
                    <br />{data.complemento}</p>
                  <button className={style.botao}>Ver Mais</button>
                </div>
              </div>
            </div>
            <div className={style.content}>
              <div className={style.titulo}>
                <h1>Contato</h1>
              </div>
              <div className={style.informacoesDoacao}>
                <div className={style.coluna}>
                  <p>Telefone:
                    <br /><b>{data.telefone}</b>
                  </p>
                  <p>Celular:
                    <br /><b>{data.celular}</b>
                  </p>
                </div>
                <div className={style.coluna}>
                  <p>Email:
                    <br /><b>{data.email}</b>
                  </p>
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
