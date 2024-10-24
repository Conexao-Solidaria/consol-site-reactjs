import React, { useState } from "react";
import iconDoacoes from "../../utils/assets/icon_doacoes_azul.png";
import style from "./ListaDoacoes.module.css";
import DoacaoCompleta from "../doacao-completa/DoacaoCompleta";
import api from "../../api";

const ListaDoacoes = ({ data }) => {
  var dataDia = data.dataDoacao.split('T')[0]
  dataDia = dataDia.split('-')
  dataDia = dataDia[2] + '/' + dataDia[1] + '/' + dataDia[0]
  

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={style.containerListaDoacoes} onClick={handleModal}>
        <img src={iconDoacoes} alt='Icone de Doações' />
        <div className={style.containerTipoDoacao}>
          <p><b>Doação</b></p>
          <p>ID</p>
          <p className={style.Categoria}>{data.id}</p>
        </div>
        <div>
          <div className={style.containerInformacoes}>
            <p className={style.paragrafo}>{data.donatario.nome}</p>
            <div className={style.verticalLine}></div>
            <p>{dataDia + " " + data.dataDoacao.split('T')[1]}</p>
          </div>
        </div>
      </div>
      <div
        className={modalStyle.containerModal}
        style={{ display: isModalOpen ? 'block' : 'none' }}
        onClick={closeModal}
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
                    <br /><b>Doacao</b>
                  </p>
                  <p>Id doacao:
                    <br /><b>{data.id}</b>
                  </p>
                  <p>Status:
                    <br /><b>{data.flagDoacaoEntregue}</b>
                  </p>
                </div>
                <div className={modalStyle.coluna}>
                  <p>Data/Hora:
                    <br /><b>{dataDia + " " + data.dataDoacao.split('T')[1]}</b>
                  </p>
                  <button
                    className={modalStyle.botao}
                    onClick={handleDoacaoCompleta}
                  >
                    Ver Mais
                  </button>
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
                    <br /><b>{data.donatario.nome.split(' ')[0]}</b></p>
                  <p>Sobrenome:
                    <br /><b>{data.donatario.nome.split(' ').slice(1).join(' ')}</b></p>
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
                    <br /><b>{data.donatario.telefone1}</b>
                  </p>
                  <p>Celular:
                    <br /><b>{data.donatario.telefone2}</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DoacaoCompleta
        data={data}
        isModalOpen={isModalOpen}
        handleModal={handleModal}
        closeModal={closeModal}
      />
    </>
  );
};

export default ListaDoacoes;
