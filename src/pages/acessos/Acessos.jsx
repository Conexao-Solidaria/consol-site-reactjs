import React from "react";
import style from "./Acessos.module.css";
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";

function Acessos() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      <div className={style.container}>
        <NavBar />
        <div className={style.containerHead}>
          <Head />
        </div>
        <div className={style.pesquisa}>
          <span className={style.tituloTexto}> Pesquisar Usuários: </span>
          <input type="text" placeholder="Pesquisar Usuário"/>
        </div>
        <div className={style.gerenciar}>
          <div className={style.gerenciarTitulo}>
            <div className={style.titulo}>
              <span className={style.tituloTexto}>
                Temas e Acessibilidade
              </span>
            </div>
            <hr className="hr"></hr>
          </div>
          <div className={style.cartoes}>
            <div className={style.cartao}>
              <div>
                <h2>Nome de usuário</h2>
                <span>xxxxx@xxxx.xxx</span>
              </div>
              <div>
                <button className={style.button1}> <i class="material-icons"> arrow_forward</i> Aceitar</button>
                <button className={style.button2}> <i class="material-icons"> close</i>Negar</button>
              </div>
            </div>
            <div className={style.cartao}>
              <div>
                <h2>Nome de usuário</h2>
                <span>xxxxx@xxxx.xxx</span>
              </div>
              <div>
                <button className={style.button1}> <i class="material-icons"> arrow_forward</i> Aceitar</button>
                <button className={style.button2}> <i class="material-icons"> close</i>Negar</button>
              </div>
            </div>
            <div className={style.cartao}>
              <div>
                <h2>Nome de usuário</h2>
                <span>xxxxx@xxxx.xxx</span>
              </div>
              <div>
                <button className={style.button1}> <i class="material-icons"> arrow_forward</i> Aceitar</button>
                <button className={style.button2}> <i class="material-icons"> close</i>Negar</button>
              </div>
            </div>
            <div className={style.cartao}>
              <div>
                <h2>Nome de usuário</h2>
                <span>xxxxx@xxxx.xxx</span>
              </div>
              <div>
                <button className={style.button1}> <i class="material-icons"> arrow_forward</i> Aceitar</button>
                <button className={style.button2}> <i class="material-icons"> close</i>Negar</button>
              </div>
            </div>
            <div className={style.cartao}>
              <div>
                <h2>Nome de usuário</h2>
                <span>xxxxx@xxxx.xxx</span>
              </div>
              <div>
                <button className={style.button1}> <i class="material-icons"> arrow_forward</i> Aceitar</button>
                <button className={style.button2}> <i class="material-icons"> close</i>Negar</button>
              </div>
            </div>
            <div className={style.cartao}>
              <div>
                <h2>Nome de usuário</h2>
                <span>xxxxx@xxxx.xxx</span>
              </div>
              <div>
                <button className={style.button1}> <i class="material-icons"> arrow_forward</i> Aceitar</button>
                <button className={style.button2}> <i class="material-icons"> close</i>Negar</button>
              </div>
            </div>
            <div className={style.cartao}>
              <div>
                <h2>Nome de usuário</h2>
                <span>xxxxx@xxxx.xxx</span>
              </div>
              <div>
                <button className={style.button1}> <i class="material-icons"> arrow_forward</i> Aceitar</button>
                <button className={style.button2}> <i class="material-icons"> close</i>Negar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Acessos;
