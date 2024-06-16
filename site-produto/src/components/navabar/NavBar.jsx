import { Link } from 'react-router-dom';
import React, { useState } from "react";
import styles from "./NavBar.module.css";
import iconIgreja from "../../utils/assets/icon_igreja.png";
import iconHome from "../../utils/assets/icon_home.png";
import iconHistorico from "../../utils/assets/icon_historico.png";
import iconDoacoes from "../../utils/assets/icon_doacoes.png";
import iconPerfil from "../../utils/assets/icon_perfil.png";

const NavBar = () => {

    const [showText, setShowText] = useState(false);

    const toggleText = () => {
        setShowText(!showText);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
            <div className={`${styles.container} ${showText ? styles.expandedContainer : ''}`}>
                <img src={iconIgreja} className={styles.iconIgreja} alt='Icone de uma igreja' />

                <div className={styles.line}></div>

                <a href='#'> <img src={iconHome} alt='Icone de uma casa' />       <p style={{ display: showText ? 'block' : 'none' }}> Início    </p> </a>
                <a href='#'> <img src={iconHistorico} alt='Icone de histórico' /> <p style={{ display: showText ? 'block' : 'none' }}> Histórico </p> </a>
                <a href='#'> <img src={iconDoacoes} alt='Icone de doações' />     <p style={{ display: showText ? 'block' : 'none' }}> Doações   </p> </a>
                <a href='#'> <img src={iconPerfil} alt='Icone de perfil' />       <p style={{ display: showText ? 'block' : 'none' }}> Donatários</p> </a>

                <div className={styles.containerBar} onClick={toggleText}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>

            </div>

            <div className={styles.menuMobile}>

                <button onClick={toggleMenu}>
                    <div className={styles.containerBar} onClick={toggleText}>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                    </div>
                </button>

                <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
                    <a href='#'> <img src={iconHome} alt='Icone de uma casa' />       <p> Início    </p> </a>
                    <a href='#'> <img src={iconHistorico} alt='Icone de histórico' /> <p> Histórico </p> </a>
                    <a href='#'> <img src={iconDoacoes} alt='Icone de doações' />     <p> Doações   </p> </a>
                    <a href='#'> <img src={iconPerfil} alt='Icone de perfil' />       <p> Donatários</p> </a>
                </nav>

            </div>

        </>
    );
};

export default NavBar;
