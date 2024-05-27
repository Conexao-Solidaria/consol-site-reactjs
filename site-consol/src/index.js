import Site from './pages/Site';
import './pages/Site.module.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Site />} />
    </Routes>
    {/* <ToastContainer></ToastContainer> */}
  </BrowserRouter>
);
