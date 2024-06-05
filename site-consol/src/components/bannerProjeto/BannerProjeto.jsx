import React from 'react';
import styles from './BannerProjeto.module.css';
import img from "../../utils/assets/bannerProj.png";

const BannerProjeto = () => {
    return (
        <div id="5" className={styles["banner-projeto"]}>

            <div className={styles["container-projeto"]}>
                <div className={styles["container-paragrafo"]}>
                    <h4>Gestão de Doações e Divulgação</h4>

                    <h5>Para quem recebe:</h5>

                    <p>
                        Nesse projeto criamos um sistema que ajuda a gerenciar a distribuição de doações, além de
                        integrar as diversas igrejas para coibir ações como pegar mais de uma cesta basíca para vender.
                    </p>

                    <h5>Para quem doa:</h5>
                    <p>
                        Temos um website onde você pode ver os locais que estão necessitando de doações e que estão mais
                        próximos de onde você está.
                    </p>
                </div>

                <div className={styles["container"]}>
                    <img src={img} alt='imagem de frutas' />
                    <input type="button" value="Quero Conhecer" />
                </div>
            </div>
        </div>
    );
};
export default BannerProjeto;
