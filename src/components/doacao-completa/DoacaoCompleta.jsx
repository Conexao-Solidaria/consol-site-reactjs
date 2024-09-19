import React from "react";
import modalStyle from "../modal/Modal.module.css";
import style from "./DoacaoCompleta.module.css";
import iconDoacoes from "../../utils/assets/icon_doacoes_azul.png";
import iconPerfil from "../../utils/assets/icon_perfil_usuario.png";

const DoacaoCompleta = ({ data, isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <>
      <div className={modalStyle.modal}
        style={{ display: "flex", width: "90vw" }}>
        <div className={modalStyle.modalHeader} onClick={onClose}>
          <b>X</b>
        </div>
        <div className={modalStyle.line}>
          <div className={modalStyle.background}>
            <div className={style.linha}>
              <div className={modalStyle.content}>
                <div className={modalStyle.titulo}>
                  <h1>Mais informacoes da doacao</h1>
                </div>
                <div className={style.informacaoDoacaoCompleta}>
                  <div className={style.modalImagem}
                    style={{ maxWidth: '5vw' }}>
                    <img
                      src={iconDoacoes}
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                      alt='Icone de Doações'></img>
                  </div>
                  <div className={style.coluna}>
                    <p>Horario:
                      <br /><b>{data.hora}</b></p>
                    <p>Data:
                      <br />{data.data}</p>
                  </div>
                  <div className={style.coluna}>
                    <p>Local:
                      <br /><b>{data.endereco}</b>
                      <br />{data.complemento}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.linha}>
              <div className={style.coluna}>
                <div className={modalStyle.content}>
                  <div className={modalStyle.titulo}>
                    <h1>Mais informacoes da doacao</h1>
                  </div>
                  <div className={style.donatarioBeneficiado}>
                    <div className={style.colunaImagem}>
                      <div className={style.modalImagem}
                        style={{ width: '10vw' }}>
                        <img
                          src={iconPerfil}
                          style={{
                            width: '100%',
                            height: '100%',
                          }}
                          alt='Icone de Doações'></img>
                      </div>
                    </div>
                    <div className={style.coluna}>
                      <p>Nome:
                        <br /><b>{data.nomeCompleto.split(' ')[0]}</b></p>
                      <p>Sobrenome:
                        <br /><b>{data.nomeCompleto.split(' ').slice(1).join(' ')}</b></p>
                      <p>Endereco:
                        <br /><b>{data.endereco}</b>
                        <br />{data.complemento}</p>
                    </div>
                  </div>
                </div>
                <div className={modalStyle.content}>
                  <div className={modalStyle.titulo}>
                    <h1>Contatos do Donatario</h1>
                  </div>
                  <div className={style.contatoDonatario}>
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
              <div className={modalStyle.content}>
                <div className={modalStyle.titulo}>
                  <h1>Descricao da Doacao</h1>
                </div>
                <div className={style.descricaoDoacao}>
                  <br />{data.descricao}</div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default DoacaoCompleta;
