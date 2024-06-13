import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';
import Teste from './pages/teste/Teste';

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
    </Routes>
    <ToastContainer></ToastContainer>
  </BrowserRouter>
);
