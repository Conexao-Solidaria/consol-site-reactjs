import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cadastro from "./pages/cadastro/Cadastro";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import PesquisaDoacoes from "./pages/pesquisaDoacoes/PesquisaDoacoes"
import Historico from "./pages/historico/Historico";
import Acessos from "./pages/acessos/Acessos";
import Doacoes from "./pages/doacoes/Doacoes";
import Donatarios from "./pages/donatarios/Donatarios";


const Rotas = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/pesquisaDoacoes' element={<PesquisaDoacoes />} />

                    <Route path='/home' element={<Dashboard />} />
                    <Route path='/historico' element={<Historico />} />
                    <Route path='/acessos' element={<Acessos />} />
                    <Route path='/doacoes' element={<Doacoes />} />
                    <Route path='/donatarios' element={<Donatarios />} />
                </Routes>
                <ToastContainer></ToastContainer>
            </BrowserRouter>
        </>
    );
};

export default Rotas;
