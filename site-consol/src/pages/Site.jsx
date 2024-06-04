import React from "react";
import { Link } from 'react-router-dom';
import NossaHistoria from "../components/nossaHistoria/NossaHistoria"
import Integrantes from "../components/integrantes/Integrantes";

const Site = () => {
    return (
        <>
            <NossaHistoria />
            <Integrantes integrantes={[{"xpto": "dauihduishduias"},{"xpto": "dauihduishduias"},{"xpto": "dauihduishduias"},]} />
        </>
    );
};
export default Site;