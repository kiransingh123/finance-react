import React from 'react';
import { Link } from 'react-router-dom';
import ServicesDetailsList from './ServicesDetailsList';

export default function FinancialDetail (){
    return(<>
        <div className="page-title-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="title-content">
                            <h2>Financial Details</h2>
                            <ul>
                                <li>
                                   <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <span>Service</span>
                                </li>
                                <li>
                                    <span>Financial Details</span>
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
                                <img src="/images/services/service-details1.jpg" alt="Details" />
                                {/* <h2>Investment Trading</h2> */}
                               <p>Our expert advisors bring a wealth of experience and industry knowledge to provide strategic guidance and innovative solutions tailored to your unique needs.</p>
                            </div>
                            <div className="details-client">
                                <h3>Benefits of Our Financial Advisory Services</h3>

                                <h5>1. Financial Advisory</h5>
                                <p>Our expert advice and detailed analyses empower you to make well-informed financial decisions.</p>
                               
                                <h5>2. Enhanced Value</h5>
                                <p>Whether you are buying, selling, or restructuring, our services aim to enhance the value of your business and investments.
                                </p>
                               
                                <h5>3. Strategic Growth</h5>
                                <p>Our strategic planning and investment advisory services help you achieve sustainable growth and long-term success.
                                </p>
                                
                                <h5>4. Risk Mitigation</h5>
                                <p>Our risk management services identify and mitigate potential risks, safeguarding your financial health.
                                </p>                     
                           </div>
                            <div className="details-client">
                                <h3>Our Financial Advisory Services</h3>
                                <ul>
                                    <li>Business Valuation</li>
                                    <li>Mergers and Acquisitions (M&A)</li>
                                    <li>Financial Due Diligence</li>
                                    <li>Investment Advisory</li>
                                    <li>Capital Raising</li>
                                    <li>Financial Restructuring</li>
                                    <li>Strategic Planning</li>
                                    <li>Performance Management</li>
                                    <li>Risk Management</li>
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