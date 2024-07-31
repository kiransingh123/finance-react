import React from 'react';
import { Link } from 'react-router-dom';
import ServicesDetailsList from './ServicesDetailsList';

export default function ConsultingDetails (){
    return(<>
        <div className="page-title-area">
             <div className="d-table">
                 <div className="d-table-cell">
                     <div className="container">
                         <div className="title-content">
                             <h2>Consulting Details</h2>
                             <ul>
                                 <li>
                                    <Link to="/">Home</Link>
                                 </li>
                                 <li>
                                     <span>Service</span>
                                 </li>
                                 <li>
                                     <span>Consulting Details</span>
                                 </li>
                             </ul>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
        {/* End Page Title */}
 
        {/* Project Details */}
          <div className="project-details-area ptb-100">
             <div className="container">
                 <div className="row">
 
                     <div className="col-lg-8">
                         <div className="details-item">
 
                             <div className="details-img">
                                 <img src="/images/services/project-details1.jpg" alt="Details" />
                                 {/* <h2>Investment Trading</h2> */}
                                <p>At Sandeep Midha and Company, our Consulting Services are designed to provide strategic insights and practical solutions that help businesses thrive in a competitive environment. Our team of experienced consultants brings a wealth of expertise across various industries to help you achieve your business goals and navigate complex challenges.</p>
                             </div>
                             <div className="details-client">
                                 <h3>Benefits of Consulting Services</h3>
 
                                 <h5>1. Enhanced Business Performance</h5>
                                 <p>Our consulting services help you identify opportunities for improvement, streamline operations, and drive growth.</p>
                                 <h5>2. Strategic Advantage</h5>
                                 <p>We provide strategic insights and guidance to help you stay ahead of the competition and achieve long-term success.</p>
                                 <h5>3. Risk Mitigation</h5>
                                 <p>Our risk management consulting helps you identify and mitigate potential risks, safeguarding your business.</p>
                                 <h5>4. Operational Efficiency</h5>
                                 <p>We help you optimize your business processes, reduce costs, and improve productivity.</p>
                               
                            </div>
                             <div className="details-client">
                                 <h3>Our Consulting Services</h3>
                                 <ul>
                                     <li>Business Strategy Consulting</li>
                                     <li>Financial Advisory Consulting</li>
                                     <li>Operational Efficiency Consulting</li>
                                     <li>Human Resources Consulting</li>
                                     <li>IT and Digital Transformation Consulting</li>
                                     <li>Risk Management Consulting</li>
                                     <li>Marketing and Sales Consulting</li>
                                     <li>Sustainability and CSR Consulting</li>
                                 </ul>
                               
                             </div>
 
                            
 
                         </div>
                     </div>
 
                    <ServicesDetailsList />
                 </div>
             </div>
         </div> 
        {/* End Project Details */}
     </>)
}