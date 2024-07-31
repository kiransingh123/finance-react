import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesDetailsList(){
    return(<>
    
    <div className="col-lg-4">
                        <div className="widget-area">

                            <div className="services widget-item">
                                <h3>Services List</h3>
                                <ul>
                                    <li>
                                        <Link to="/services/audit-details" >
                                        Audit and Assurance
                                            <i className='bx bx-right-arrow-alt'></i>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="/services/taxation-details" >
                                        Taxation (Direct / Indirect)
                                            <i className='bx bx-right-arrow-alt'></i>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="/services/financials-details" >
                                        Financial Advisory
                                            <i className='bx bx-right-arrow-alt'></i>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="/services/corporate-details" >
                                        IT Risk Advisory (Corporate)
                                            <i className='bx bx-right-arrow-alt'></i>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="/services/accounting-details" >
                                        Accounting and Outsourcing
                                            <i className='bx bx-right-arrow-alt'></i>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="/services/consulting-details" >
                                        Business Advisory (Consulting)
                                            <i className='bx bx-right-arrow-alt'></i>
                                       </Link>
                                    </li>
                                </ul>
                            </div>

                           

                            <div className="consultation">
                                <img src="/images/services/service-details2.jpg" alt="Details" />
                                <div className="inner">
                                    <h3>Need Any Consultation</h3>
                                    <Link to="/contactus" className="common-btn" >
                                        Send Message
                                        <span></span>
                                   </Link>
                                </div>
                            </div>

                        </div>
                    </div>

    </>)
}