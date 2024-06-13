import React, { useState } from "react";
import styles from "./NavBar.module.css";
import iconIgreja from "../../utils/assets/icon_igreja.png";
import iconHome from "../../utils/assets/icon_home.png";
import iconHistorico from "../../utils/assets/icon_historico.png";
import iconDoacoes from "../../utils/assets/icon_doacoes.png";
import iconPerfil from "../../utils/assets/icon_perfil.png";

const NavBar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { img: iconHome, text: "Início", link: "/" },
        { img: iconHistorico, text: "Histórico", link: "/historico" },
        { img: iconDoacoes, text: "Doações", link: "/doacoes" },
        { img: iconPerfil, text: "Donatário", link: "/donatario" }
    ];

    return (
        <>
            <div className={`${styles.container} ${showLinks ? styles.expandedContainer : ''}`}>
                <img src={iconIgreja} alt="Ícone Home" />
                <div className={styles.line}></div>

                {menuItems.map((item, index) => (
                    <div key={index} className={`${styles.containerIcon} ${showLinks ? `${styles.open} ${styles.leftAlign}` : ''}`}>
                        <img src={item.img} alt={`Ícone ${item.text}`} />
                        <a href={item.link} style={{ display: showLinks ? 'block' : 'none' }}>{item.text}</a>
                    </div>
                ))}

                <div className={styles.containerNavbar} onClick={toggleLinks}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
            </div>

            <nav className={`${styles.navBar} ${isOpen ? styles.open : ''}`}>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.link}>
                                <img src={item.img} alt={`Ícone ${item.text}`} /> {item.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className={styles.menuHamburguer} onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
        </>
    );
};

export default NavBar;
