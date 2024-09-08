import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./Donatarios.module.css";

function Donatarios() {
  return <>
    <div className={style.container}>
      <div className={style.navbarContainer}>
        <NavBar />
      </div>
      <div className={style.containerGeral}>
        <div className={style.containerHead}>
          <Head />
        </div>
        <div className={style.containerConteudo}>
          <div className={style.containerPesquisa}>
            <h2>Pesquisar Donatário:</h2>
            <input type="text" placeholder="Pesquisar Donátario"/>
          </div>
          <div className={style.containerLista}>

          </div>
        </div>
      </div>
    </div>
  </>;
}

export default Donatarios;
