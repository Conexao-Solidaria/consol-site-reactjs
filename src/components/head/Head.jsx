import React, { useState } from "react";
import styles from "./Head.module.css";
import iconPerfil from "../../utils/assets/icon_perfil_usuario.png";
import iconConfig from "../../utils/assets/icon_configuracoes.png";
import iconSair from "../../utils/assets/icon_sair.png";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const config = () => {
    navigate("/configuracoes");
  }

  const logOut = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("usuario");
    navigate("/login");
  };

  const goToSettings = () => {
    navigate("/configuracao");
  };

  return (
    <>
      {/* Container com header */}
      <div className={styles.container}>
        <img
          className={styles.conf}
          src={iconConfig}
          alt="Icone de configuração"
          onClick={goToSettings}
        />

        <img className={styles.logo} src={iconPerfil} alt="Icone de perfil" onClick={toggleMenu} />
      </div>

      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <div className={styles.menuItem} onClick={logOut}>
          <img src={iconSair} alt="Icone de sair" />
          <p>Sair</p>
        </div>
      </div>
    </>
  );
};

export default Head;
