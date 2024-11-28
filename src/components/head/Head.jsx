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

  const logOut = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("usuario");
    navigate("/login");
  };

  return (
    <>
      {/* container com header */}
      <div className={styles.container}>
        <img
          src={iconConfig}
          alt="Icone de configuração"
          onClick={navigate("/configuracoes")}
        />

        <img src={iconPerfil} alt="Icone de perfil" onClick={toggleMenu} />
      </div>

      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <div className={styles.menuItem} onClick={navigate("/login")}>
          <img src={iconSair} alt="" />
          <p>Sair</p>
        </div>
      </div>
    </>
  );
};
export default Head;
