import React from "react";
import { Link } from 'react-router-dom';
import NossaHistoria from "../components/nossaHistoria/NossaHistoria"
import Integrantes from "../components/integrantes/Integrantes";
import NavBar from "../components/navbar/Navbar"
import BannerProjeto from "../components/bannerProjeto/BannerProjeto"
import Footer from "../components/footer/Footer"
import banner from "../utils/assets/banner.png";
import styles from './Site.module.css';

const Site = () => {
    return (
        <>
            <NavBar />
            <img src={banner} alt="Eduardo Seba" ></img>
            <NossaHistoria />
            <Integrantes integrantes={[{"xpto": "dauihduishduias"},{"xpto": "dauihduishduias"},{"xpto": "dauihduishduias"},]} />
            <BannerProjeto />
            <Footer />
        </>
    );
};
export default Site;