import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ logoInicio }) => {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["container"]}>
                <img src={logoInicio} alt="logo" />

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