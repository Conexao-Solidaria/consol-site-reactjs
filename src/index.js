import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';
import EditarFamila from './pages/editarFamila/EditarFamila';
import Dashboard from './pages/dashboard/Dashboard';
import Historico from './pages/historico/Historico';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/cadastro' element={<Cadastro />} />
      <Route path='/editarFamilia' element={<EditarFamila />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/historico' element={<Historico />} />
    </Routes>
    <ToastContainer></ToastContainer>
  </BrowserRouter>
);
