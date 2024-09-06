import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./Donatarios.module.css";

function Donatarios() {
  return <>
    <div className={style.container}>
      <NavBar />
      <div className={style.containerGeral}>
        <div className={style.containerHead}>
          <Head />
        </div>
        <div className={style.containerConteudo}>
          <div className={style.containerPesquisa}>

          </div>
          <div className={style.containerLista}>

          </div>
        </div>
      </div>
    </div>
  </>;
}

export default Donatarios;
