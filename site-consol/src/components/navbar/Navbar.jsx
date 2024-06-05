import React from 'react';
import styles from './Navbar.module.css';
import logo from "../../utils/assets/logo.png";

const NavBar = () => {
    return (
        <nav className={styles['header']}>
            <div className={styles["container-img"]}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles["container-navegacao"]}>
                <div className={styles["container-botoes"]}>
                    <input type="button" onclick="window.location = '#3'" className={styles["botao-sobre-nos"]} value="Sobre Nós" />
                    <input type="button" onclick="window.location = '#5'" className={styles["botao-nossos-projetos"]} value="Nossos projetos" />
                </div>
            </div>
        </nav>
    );
};
export default NavBar;