import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
    return(<>
            {/*Page Title */}
            <div className="page-title-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="title-content">
                            <h2>Services</h2>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <span>Services</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*End Page Title */}

        {/*Projects */}
        <section className="projects-area-two two ptb-100">
            <div className="container">
                <div className="row">

                    <div className="col-sm-6 col-lg-4">
                        <div className="projects-item-two">
                            <img src="images/projects/project-shape1.png" alt="Shape" />
                            <img src="images/projects/project-shape2.png" alt="Shape" />
                            <i className="flaticon-goal icon"></i>
                            <h3>
                                   
                                    <Link to="/services/audit-details">Audit and Assurance </Link>
                            </h3>
                            <p>We provide a comprehensive suite of Audit and Assurance Services designed to deliver accurate, reliable, and insightful financial information. </p>
                                
                                <Link className="projects-btn" to="/services/audit-details">Read More
                                    <i className='bx bx-right-arrow-alt'></i>
                                </Link>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="projects-item-two">
                            <img src="images/projects/project-shape1.png" alt="Shape" />
                            <img src="images/projects/project-shape2.png" alt="Shape" />
                            <i className="flaticon-bar-chart icon"></i>
                            <h3>
                                   
                                    <Link to="/services/taxation-details">Taxation (Direct / Indirect)</Link>
                            </h3>
                            <p>We provide expert guidance to optimize tax positions, ensure compliance, and minimize tax liabilities.   </p>
                            <Link className="projects-btn" to="/services/taxation-details">Read More
                                    <i className='bx bx-right-arrow-alt'></i>
                                </Link>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="projects-item-two">
                            <img src="images/projects/project-shape1.png" alt="Shape" />
                            <img src="images/projects/project-shape2.png" alt="Shape" />
                            <i className="flaticon-investment-insurance icon"></i>
                            <h3>
                                   
                                    <Link to="/services/financials-details">Financial Advisory </Link>
                            </h3>
                            <p>SMCA, offer a full spectrum of Financial Advisory Services designed to help businesses and individuals make informed financial decisions.</p>
                            <Link className="projects-btn" to="/services/financials-details">Read More
                                    <i className='bx bx-right-arrow-alt'></i>
                                </Link>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="projects-item-two">
                            <img src="images/projects/project-shape1.png" alt="Shape" />
                            <img src="images/projects/project-shape2.png" alt="Shape" />
                           
                            <i className="flaticon-investment icon"></i>
                            <h3>
                                   
                                    <Link to="/services/corporate-details"> IT Risk Advisory (Corporate)</Link>
                            </h3>
                            <p>We offer a broad range of Corporate Services designed to support businesses in managing their legal, regulatory, and administrative requirements.</p>
                            <Link className="projects-btn" to="/services/corporate-details">Read More
                                    <i className='bx bx-right-arrow-alt'></i>
                                </Link>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="projects-item-two">
                            <img src="images/projects/project-shape1.png" alt="Shape" />
                            <img src="images/projects/project-shape2.png" alt="Shape"/>
                            <i className="flaticon-refinancing icon"></i>
                            <h3>
                                   
                                   <Link to="/services/accounting-details">Accounting and Outsourcing</Link>
                           </h3>
                            <p> Our Accounting and Outsourcing Services are designed to help businesses of all sizes manage their financial operations effectively.</p>
                            <Link className="projects-btn" to="/services/accounting-details">Read More
                                    <i className='bx bx-right-arrow-alt'></i>
                                </Link>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="projects-item-two">
                            <img src="images/projects/project-shape1.png" alt="Shape" />
                            <img src="images/projects/project-shape2.png" alt="Shape" />
                          
                            <i className="flaticon-support icon"></i>
                            <h3>
                                   
                                    <Link to="/services/consulting-details">Business Advisory (Consulting)</Link>
                            </h3>
                            <p>our Consulting Services are designed to provide strategic insights and practical solutions that help businesses thrive in a competitive environment.</p>
                            <Link className="projects-btn" to="/services/consulting-details">Read More
                                    <i className='bx bx-right-arrow-alt'></i>
                                </Link>
                        </div>
                    </div>

                </div>
                {/* <div className="pagination-area">
                    <ul>
                        <li>
                            <a href="#">
                                <i className='bx bx-chevron-left'></i>
                            </a>
                        </li>
                        <li>
                            <a className="active" href="#">
                                1
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                2
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                3
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className='bx bx-chevron-right'></i>
                            </a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </section>
        {/*End Projects */}
        </>) 
}
