import React from 'react';
import styles from './Footer.module.css';
import logo from "../../utils/assets/logo.png";

const Footer = () => {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["container"]}>
                <img src={logo} alt="logo" />

                <div className={styles["direita"]}>
                    <h6>
                        Copyright © 2025 ConSol. Todos os direitos reservados.
                    </h6>
                </div>
            </div>
        </footer>
    );
};
export default Footer;