import React, { useState } from "react";
import styles from "./Head.module.css";
import iconPerfil from "../../utils/assets/icon_perfil_usuario.png";
import iconConfig from "../../utils/assets/icon_configuracoes.png";
import iconTrocarConta from "../../utils/assets/icon_trocar.png";
import iconSair from "../../utils/assets/icon_sair.png";

const Head = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.container}>
        <a>
          <img src={iconConfig} alt="Icone de configuração" />
        </a>
        <p>SGD</p>

        <button onClick={toggleMenu}>
          <img src={iconPerfil} alt="Icone de perfil" />
        </button>

        <nav className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
          <ul>
            <li>
              <a href="#home">
                {" "}
                <img src={iconTrocarConta} alt=""/> Trocar de Usuário
              </a>
            </li>
            <li>
              <a href="#about">
                {" "}
                <img src={iconSair} alt=""/> Sair
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Head;
