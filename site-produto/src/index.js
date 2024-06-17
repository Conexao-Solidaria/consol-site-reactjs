import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';
import Teste from './pages/teste/Teste';
import Dashboard from './pages/dashboard/Dashboard';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/cadastro' element={<Cadastro />} />
      <Route path='/teste' element={<Teste />} />
      <Route path='/home' element={<Dashboard />} />
    </Routes>
    <ToastContainer></ToastContainer>
  </BrowserRouter>
);
