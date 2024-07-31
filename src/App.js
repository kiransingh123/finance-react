import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import About from './components/about/About';
import Services from './components/service/Services';
import AuditDetail from './components/service/AuditDetail';
import TaxationDetail from './components/service/TaxationDetail';
import FinancialDetail from './components/service/FinancialDetail';
import ConsultingDetails from './components/service/CounsultingDetails';
import AccountingDetails from './components/service/AccountingDetails';
import CorporateDetails from './components/service/CorporateDetails'
// import ServicesDetails from './components/service/ServicesDetails';
import Faqs from './components/faq/Faqs';
import EssentialsLink from './components/essentialsLink/EssentialsLink';
// import Blogs from './components/blog/Blogs';
import BlogDetails from './components/blog/BlogDetails';
import Career from './components/career/Career';
import Contactus from './components/contact/Contactus';



function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home />}/>
     <Route path='/about' element={<About />}/>
       <Route path='/services' element={<Services />}/>
      {/* <Route path='/service-details' element={<ServicesDetails />}/> */}
      <Route path='/services/audit-details' element={<AuditDetail />}/>
      <Route path='/services/taxation-details' element={<TaxationDetail />}/>
      <Route path='/services/financials-details' element={<FinancialDetail />}/>
      <Route path='/services/consulting-details' element={<ConsultingDetails />}/>
      <Route path='/services/accounting-details' element={<AccountingDetails />}/>
      <Route path='/services/corporate-details' element={<CorporateDetails />}/>
      <Route path='/faqs' element={<Faqs />}/>
      <Route path='/essential-link' element={<EssentialsLink />}/>
      {/* <Route path='/blogs' element={<Blogs />}/> */}
      <Route path='/blog-details' element={<BlogDetails />}/>
      <Route path='/apply-now' element={<Career />}/>
      <Route path='/contactus' element={<Contactus />}/>
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
  );
}

export default App;
