import React from "react";
import NavBar from "../../components/sideBar/sideBar";
import Head from "../../components/head/Head";
import style from "./stylesTeste.module.css";

const Teste = () => {
    return (
        <>
            <div className={style.containerComponetes}>
                <NavBar />
                <div className={style.container}>
                    <Head />
                </div>
            </div>

        </>

    );
};
export default Teste;
