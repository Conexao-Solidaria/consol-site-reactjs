import Cadastro from './pages/cadastro/Cadastro'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Cadastro />} />
    </Routes>
    <ToastContainer></ToastContainer>
  </BrowserRouter>
);
