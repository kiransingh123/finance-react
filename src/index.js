import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './modules/Home';
import Navbar from './common/Navbar';
import reportWebVitals from './reportWebVitals';
import Footer from './common/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
