import React from "react";
import modalStyle from "../modal/Modal.module.css";
import iconPerfil from "../../utils/assets/icon_perfil_usuario.png";
import iconDoacoes from "../../utils/assets/icon_doacoes_azul.png";
import style from "../doacoes/ListaDoacoes.module.css";

const DoacaoCompleta = ({ data }) => {
  return (
    <>
      <div
        className={modalStyle.modal}
      >
        <div className={modalStyle.modalHeader}><b>X</b></div>
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

export default DoacaoCompleta;
