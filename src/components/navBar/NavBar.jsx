import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import iconIgreja from "../../utils/assets/iconIgreja.png";
import iconHome from "../../utils/assets/icon_home.png";
import iconHistorico from "../../utils/assets/icon_historico.png";
import iconDoacoes from "../../utils/assets/icon_doacoes.png";
import fechadura from "../../utils/assets/fechadura.png";
import iconPerfil from "../../utils/assets/icon_perfil.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const home = () => {
    navigate("/")
  }

  const historico = () => {
    navigate("/historico")
  }

  const doacao = () => {
    navigate("/doacoes")
  }

  const donatario = () => {
    navigate("/donatarios")
  }

  const acessos = () => {
    navigate("/acessos")
  }

  const [showText, setShowText] = useState();

  const expand = () => {
    setShowText(!showText);
    sessionStorage.setItem("navBarIsOpen", !showText);
  }

  useEffect(() => {
    if (sessionStorage.getItem("navBarIsOpen") === "true") {
      setShowText(true);
    } else {
      setShowText(false);
    }
  }, []);


  return (
    <>
      <div
        className={styles.container}
      >
        <div>
          <div className={styles.containerIconIgreja}>
            <img
              src={iconIgreja}
              className={styles.iconIgreja}
              alt="Icone de uma igreja"
            />
          </div>
          <hr />
          <div className={styles.navigation}>
            <div className={styles.linha} onClick={home}>
              <img src={iconHome} alt="Icone de uma casa" />{" "}
              {showText ? <p> Início </p> :
                <p className={styles.hidden}> Início </p>}
            </div>
            <br />
            <div className={styles.linha} onClick={historico}>
              <img src={iconHistorico} alt="Icone de histórico" />{" "}
              {showText ? <p> Histórico </p> :
                <p className={styles.hidden}> Histórico </p>}
            </div>
            <br />
            <div className={styles.linha} onClick={doacao}>
              <img src={iconDoacoes} alt="Icone de doações" />{" "}
              {showText ? <p> Doações </p> :
                <p className={styles.hidden}> Doações </p>}
            </div>
            <br />
            <div className={styles.linha} onClick={donatario}>
              <img src={iconPerfil} alt="Icone de perfil" />{" "}
              {showText ? <p> Donatários </p> :
                <p className={styles.hidden}> Donatários </p>}
            </div>
            <br />
            <div className={styles.linha} onClick={acessos}>
              <img src={fechadura} alt="Icone de acessos" />{" "}
              {showText ? <p> Acessos </p> :
                <p className={styles.hidden}> Acessos </p>}
            </div>
          </div>
        </div>

        <div className={styles.expand} onClick={expand}>
          <hr />
          <hr />
          <hr />
        </div>
      </div>
    </>
  );
};

export default NavBar;
