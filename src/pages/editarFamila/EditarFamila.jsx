import React from 'react';
import NavBar from "../../components/navBar/navBar";
import Head from "../../components/head/Head";
import style from "./EditarFamilia.module.css";

const EditarFamila = () => {
    return (
        <>
            <div className={style.container}>
                <NavBar />
                <div className={style.containerHead}>
                    <Head />

                    

                </div>
            </div>
        </>
    );
};
export default EditarFamila;