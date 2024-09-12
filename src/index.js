import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';
import Teste from './pages/teste/Teste';
import Dashboard from './pages/dashboard/Dashboard';
import Historico from './pages/historico/Historico';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';

import 'react-toastify/dist/ReactToastify.css'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/cadastro' element={<Cadastro />} />
      <Route path='/teste' element={<Teste />} />
      <Route path='/home' element={<Dashboard />} />
      <Route path='/historico' element={<Historico />} />S
    </Routes>
    <ToastContainer></ToastContainer>
  </BrowserRouter>
);
