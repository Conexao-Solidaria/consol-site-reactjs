import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cadastro from "./pages/cadastro/Cadastro";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Historico from "./pages/historico/Historico";
import Acessos from "./pages/acessos/Acessos";
import Doacoes from "./pages/doacoes/Doacoes";
import Donatarios from "./pages/donatarios/Donatarios";
import PesquisaDoacao from "./pages/pesquisaDoacao/PesquisaDoacao";


const Rotas = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                    <Route path='/pesquisaDoacao' element={<PesquisaDoacao />} />
                    <Route path='/dashboard' element={<Dashboard />} />
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
