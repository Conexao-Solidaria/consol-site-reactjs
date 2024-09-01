import React from 'react';
import SideBar from "../../components/sideBar/sideBar";
import Head from "../../components/head/Head";
import style from "./EditarFamilia.module.css";

const EditarFamila = () => {
    return (
        <>
            <div className={style.container}>
                <SideBar />
                <div className={style.containerHead}>
                    <Head />



                </div>
            </div>
        </>
    );
};
export default EditarFamila;