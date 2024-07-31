import React from 'react';
import { Link } from 'react-router-dom';
import ServicesDetailsList from './ServicesDetailsList';

export default function CorporateDetails (){
    return(<>
        <div className="page-title-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="title-content">
                            <h2>Corporate Details</h2>
                            <ul>
                                <li>
                                   <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <span>Service</span>
                                </li>
                                <li>
                                    <span>Corporate Details</span>
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
                                <img src="/images/services/blog-details1.jpg" alt="Details" />
                                {/* <h2>Investment Trading</h2> */}
                               <p>At Sandeep Midha and Company, we offer a broad range of Corporate Services designed to support businesses in managing their legal, regulatory, and administrative requirements. Our team of experts provides comprehensive solutions to help you focus on your core business activities while ensuring compliance and operational efficiency.</p>
                            </div>
                            <div className="details-client">
                                <h3>Benefits of Our Corporate Services</h3>

                                <h5>1. Streamlined Operations</h5>
                                <p>Our services help streamline your corporate operations, enhancing efficiency and reducing administrative burdens.</p>
                               
                                <h5>2. Regulatory Compliance</h5>
                                <p>We ensure that your business complies with all relevant laws and regulations, mitigating the risk of legal issues and penalties.</p>
                               
                                <h5>3. Enhanced Governance</h5>
                                <p>Our corporate governance services enhance transparency and accountability, fostering trust with stakeholders and investors.</p>
                                
                                <h5>4. Strategic Support</h5>
                                <p>Our advisory services provide strategic support to help you navigate complex corporate challenges and achieve your business goals.</p>                   
                           </div>
                            <div className="details-client">
                                <h3>Our Corporate Services</h3>
                                <ul>
                                    <li>Company Formation and Registration</li>
                                    <li>Corporate Governance</li>
                                    <li>Secretarial Compliance</li>
                                    <li>Regulatory Approvals</li>
                                    <li>Corporate Restructuring</li>
                                    <li>Shareholder and Investor Relations</li>
                                    <li>Legal Compliance and Advisory</li>
                                    <li>Corporate Social Responsibility (CSR)</li>
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