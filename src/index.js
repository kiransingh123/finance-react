import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './modules/Home';
import Navbar from './common/Navbar';
import reportWebVitals from './reportWebVitals';
import Footer from './common/Footer';
import About from './modules/About';
import Services from './modules/Services';
import Faqs from './modules/Faqs';
import Blogs from './modules/Blogs';
import Contactus from './modules/Contactus';
import BlogDetails from './modules/BlogDetails';
import ServicesDetails from './modules/ServicesDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/service-details' element={<ServicesDetails />}/>
        <Route path='/faqs' element={<Faqs />}/>
        <Route path='/blogs' element={<Blogs />}/>
        <Route path='/blog-details' element={<BlogDetails />}/>
        <Route path='/contactus' element={<Contactus />}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
