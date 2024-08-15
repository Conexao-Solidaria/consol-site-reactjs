import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cadastro from "./pages/cadastro/Cadastro";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Teste from "./pages/teste/Teste";

const Rotas = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                    <Route path='/teste' element={<Teste />} />
                    <Route path='/home' element={<Dashboard />} />
                </Routes>
                <ToastContainer></ToastContainer>
            </BrowserRouter>
        </>
    );
};

export default Rotas;
