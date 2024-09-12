import React from "react";
import iconDoacoes from "../../utils/assets/icon_doacoes_azul.png";
import iconPerfil from "../../utils/assets/icon_perfil_usuario.png";
import modalStyle from "../modal/Modal.module.css";
import style from "./ListaDoacoes.module.css";

const ListaDoacoes = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <div className={style.containerListaDoacoes} onClick={handleModal}>
        <img src={iconDoacoes} alt='Icone de Doações'></img>
        <div className={style.containerTipoDoacao}>
          <p><b>Doação</b></p>
          <p className={style.Categoria}>{data.categoria}</p>
        </div>
        <div>
          <div className={style.containerInformacoes}>
            <p className={style.paragrafo}>{data.nomeCompleto}</p>
            <div className={style.verticalLine}></div>
            <p>{data.data}</p>
          </div>
        </div>
      </div>
      <div
        className={modalStyle.containerModal}
        style={{ display: isModalOpen ? 'block' : 'none' }}
        onClick={handleModal}
      ></div>

      <div
        className={modalStyle.modal}
        style={{ display: isModalOpen ? 'flex' : 'none' }}
      >
        <div className={modalStyle.modalHeader}><b onClick={handleModal}>X</b></div>
        <div className={modalStyle.line}>
          <div className={modalStyle.background}>
            <div className={modalStyle.content}>
              <div className={modalStyle.titulo}>
                <h1>Informacoes da doacao</h1>
              </div>
              <div className={style.informacoesDoacao}>
                <div className={style.modalImagem}>
                  <img
                    src={iconDoacoes}
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                    alt='Icone de Doações'></img>
                </div>
                <div className={modalStyle.coluna}>
                  <p>Titulo:
                    <br /><b>Doacao</b></p>
                  <p>Categoria:
                    <br /><b>{data.categoria}</b></p>
                </div>
                <div className={modalStyle.coluna}>
                  <p>Data/Hora:
                    <br /><b>{data.hora}</b>
                    <br />{data.data}</p>
                  <button className={modalStyle.botao}>Ver Mais</button>
                </div>
              </div>
            </div>
            <div className={modalStyle.content}>
              <div className={style.informacoesDoacao}>
                <div className={modalStyle.coluna}>
                  <p><b>Descricao: </b></p>
                  <br />{data.descricao}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={modalStyle.line}>
          <div className={modalStyle.background}>
            <div className={modalStyle.content}>
              <div className={modalStyle.titulo}>
                <h1>Informacoes do donatario</h1>
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
                <div className={modalStyle.coluna}>
                  <p>Nome:
                    <br /><b>{data.nomeCompleto.split(' ')[0]}</b></p>
                  <p>Sobrenome:
                    <br /><b>{data.nomeCompleto.split(' ').slice(1).join(' ')}</b></p>
                </div>
                <div className={modalStyle.coluna}>
                  <p>Endereco:
                    <br /><b>{data.endereco}</b>
                    <br />{data.complemento}</p>
                  <button className={modalStyle.botao}>Ver Mais</button>
                </div>
              </div>
            </div>
            <div className={modalStyle.content}>
              <div className={modalStyle.titulo}>
                <h1>Contato</h1>
              </div>
              <div className={style.informacoesDoacao}>
                <div className={modalStyle.coluna}>
                  <p>Telefone:
                    <br /><b>{data.telefone}</b>
                  </p>
                  <p>Celular:
                    <br /><b>{data.celular}</b>
                  </p>
                </div>
                <div className={modalStyle.coluna}>
                  <p>Email:
                    <br /><b>{data.email}</b>
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaDoacoes;
