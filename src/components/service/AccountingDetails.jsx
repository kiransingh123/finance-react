import React from 'react';
import { Link } from 'react-router-dom';
import ServicesDetailsList from './ServicesDetailsList';

export default function AccountingDetails (){
    return(<>
       <div className="page-title-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="title-content">
                            <h2>Accounting and Outsourcing Details</h2>
                            <ul>
                                <li>
                                   <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <span>Service</span>
                                </li>
                                <li>
                                    <span>Accounting and Outsourcing Details</span>
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
                                <img src="/images/services/loan-main.jpg" alt="Details" />
                                {/* <h2>Investment Trading</h2> */}
                               <p>At SMCA, we understand that efficient and accurate accounting is crucial for the success of any business. Our Accounting and Outsourcing Services are designed to help businesses of all sizes manage their financial operations effectively. By outsourcing your accounting functions to us, you can focus on your core business activities while ensuring that your financial records are in expert hands.</p>
                            </div>
                            <div className="details-client">
                                <h3>Benefits of Accounting and Outsourcing Services</h3>

                                <h5>1. Cost Savings</h5>
                                <p>Outsourcing your accounting functions can reduce overhead costs associated with hiring and training in-house staff, and investing in accounting software and infrastructure.</p>
                               
                                <h5>2. Improved Focus</h5>
                                <p>By entrusting your accounting tasks to us, you can focus on your core business activities, enhancing productivity and growth.</p>
                               
                                <h5>3. Expertise and Reliability</h5>
                                <p>Our team of experts ensures that your financial operations are managed with the highest level of expertise and reliability, reducing the risk of errors and non-compliance.</p>
                                
                                <h5>4. Scalability</h5>
                                <p>Our services are scalable, allowing you to adjust the level of support as your business grows or your needs change.</p>                   

                                <h5>5. Timely and Accurate Reporting</h5>
                                <p>We provide timely and accurate financial reports, giving you the insights needed to make informed business decisions and plan for the future.</p>
                           
                           </div>
                            <div className="details-client">
                                <h3>Our Accounting and Outsourcing Services</h3>
                                <ul>
                                    <li>Bookkeeping Services</li>
                                    <li>Payroll Processing</li>
                                    <li>Financial Reporting</li>
                                    <li>Management Accounting</li>
                                    <li>Accounts Payable and Receivable Management</li>
                                    <li>Tax Compliance and Preparation</li>
                                    <li>Virtual CFO Services</li>
                                    <li>Outsourced Controller Services</li>
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