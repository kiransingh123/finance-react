import React from 'react';
import { Link } from 'react-router-dom';
import ServicesDetailsList from '../service/ServicesDetailsList'
import { useState } from 'react';

export default function Faqs () {
    const [openFAQ, setOpenFAQ] = useState(null);
    const toggleFAQ = (id)=>{
        setOpenFAQ(openFAQ === id ? null : id);
    }

    return(<>
     {/* Page Title */}
     <div className="page-title-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="title-content">
                            <h2>FAQ</h2>
                            <ul>
                                <li>
                                <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <span>FAQ</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Page Title */}

        {/* FAQ */}
        <section className="faq-area ptb-100">
            <div className="container">
                <div className="row">

                    <div className="col-lg-8">
                        <div className="section-title">
                            <span className="sub-title">Finon FAQ</span>
                            <h2>Frequently Asked Questions</h2>
                        </div>
                        <div className="faq-item">
                            <ul className="accordion">
                                <li>
                                    <a onClick={() => toggleFAQ(1)} className={`${openFAQ === 1 ? 'active' : ''}`}>
                                    How can a CA help with tax planning?
                                        <i className={`bx ${openFAQ === 1 ? 'bx-minus two' : 'bx-plus'}`}></i>
                                    </a>
                                    <p style={{ display: openFAQ === 1 ? 'block' : 'none' }}>A CA can help optimize your tax liability through effective tax planning strategies, ensuring compliance with tax laws and regulations while maximizing tax benefits. </p>
                                </li>
                                <li>
                                    <a onClick={() => toggleFAQ(2)} className={`${openFAQ === 2 ? 'active' : ''}`}>
                                    What documents are required for tax filing?
                                        <i className={`bx ${openFAQ === 2 ? 'bx-minus two' : 'bx-plus'}`}></i>
                                    </a>
                                    <p style={{ display: openFAQ === 2 ? 'block' : 'none' }}>Common documents include income statements, expense receipts, investment proofs, previous year’s tax returns, and any other relevant financial documents.</p>
                                </li>

                                <li>
                                    <a onClick={() => toggleFAQ(3)} className={`${openFAQ === 3 ? 'active' : ''}`}>
                                    Do I need a CA for bookkeeping?
                                        <i className={`bx ${openFAQ === 3 ? 'bx-minus two' : 'bx-plus'}`}></i>
                                    </a>
                                    <p style={{ display: openFAQ === 3 ? 'block' : 'none' }}>While bookkeeping can be handled by trained staff, a CA ensures accuracy and compliance, and can provide higher-level financial insights and advice.</p>
                                </li>
                                <li>
                                    <a onClick={() => toggleFAQ(4)} className={`${openFAQ === 4 ? 'active' : ''}`}>
                                    What accounting software do you recommend?
                                        <i className={`bx ${openFAQ === 4 ? 'bx-minus two' : 'bx-plus'}`}></i>
                                    </a>
                                    <p style={{ display: openFAQ === 4 ? 'block' : 'none' }}>We recommend using software like QuickBooks, Tally, or Zoho Books depending on your business size and requirements.</p>
                                </li>

                                <li>
                                    <a onClick={() => toggleFAQ(5)} className={`${openFAQ === 5 ? 'active' : ''}`}>
                                    What is the importance of an audit?
                                        <i className={`bx ${openFAQ === 5 ? 'bx-minus two' : 'bx-plus'}`}></i>
                                    </a>
                                    <p style={{ display: openFAQ === 5 ? 'block' : 'none' }}>An audit provides an independent examination of financial statements, enhancing the credibility of the financial information and ensuring compliance with statutory requirements.</p>
                                </li>
                                <li>
                                    <a onClick={() => toggleFAQ(6)} className={`${openFAQ === 6 ? 'active' : ''}`}>
                                    How often should my business be audited?
                                        <i className={`bx ${openFAQ === 6 ? 'bx-minus two' : 'bx-plus'}`}></i>
                                    </a>
                                    <p style={{ display: openFAQ === 6 ? 'block' : 'none' }}>The frequency of audits depends on the size and nature of your business, but generally, an annual audit is recommended.</p>
                                </li>
                               
                                <li>
                                    <a onClick={() => toggleFAQ(7)} className={`${openFAQ === 7 ? 'active' : ''}`}>
                                    Can you help with financial forecasting?
                                        <i className={`bx ${openFAQ === 7 ? 'bx-minus two' : 'bx-plus'}`}></i>
                                    </a>
                                    <p style={{ display: openFAQ === 7 ? 'block' : 'none' }}>Yes, we provide financial forecasting services to help you predict future revenues, expenses, and profitability, aiding in strategic planning and decision-making.</p>
                                </li>
                                <li>
                                    <a onClick={() => toggleFAQ(8)} className={`${openFAQ === 8 ? 'active' : ''}`}>
                                    What is the process for obtaining financial advisory services?
                                        <i className={`bx ${openFAQ === 8 ? 'bx-minus two' : 'bx-plus'}`}></i>
                                    </a>
                                    <p style={{ display: openFAQ === 8 ? 'block' : 'none' }}>The process typically involves an initial consultation to understand your needs, followed by a detailed analysis of your financial situation, and then providing tailored advice and solutions.</p>
                                </li>

                                <li>
                                    <a onClick={() => toggleFAQ(9)} className={`${openFAQ === 9 ? 'active' : ''}`}>
                                    What compliance services do you offer?
                                        <i className={`bx ${openFAQ === 9 ? 'bx-minus two' : 'bx-plus'}`}></i>
                                    </a>
                                    <p style={{ display: openFAQ === 9 ? 'block' : 'none' }}>We offer services to ensure compliance with statutory requirements such as GST, income tax, corporate laws, and other regulatory frameworks.</p>
                                </li>
                                <li>
                                    <a onClick={() => toggleFAQ(10)} className={`${openFAQ === 10 ? 'active' : ''}`}>
                                    How can I stay updated with changes in tax laws?
                                        <i className={`bx ${openFAQ === 10 ? 'bx-minus two' : 'bx-plus'}`}></i>
                                    </a>
                                    <p style={{ display: openFAQ === 10 ? 'block' : 'none' }}>We provide regular updates and advisory services to keep you informed about changes in tax laws and regulations.</p>
                                </li>

                                <li>
                                    <a onClick={() => toggleFAQ(12)} className={`${openFAQ === 12 ? 'active' : ''}`}>
                                    How can a CA help with business strategy?
                                        <i className={`bx ${openFAQ === 12 ? 'bx-minus two' : 'bx-plus'}`}></i>
                                    </a>
                                    <p style={{ display: openFAQ === 12 ? 'block' : 'none' }}>A CA can provide insights on financial health, assist in budgeting, and offer advice on cost management and investment strategies to drive business growth.</p>
                                </li>
                                <li>
                                    <a onClick={() => toggleFAQ(11)} className={`${openFAQ === 11 ? 'active' : ''}`}>
                                    What is the benefit of hiring a CA for business consulting?
                                        <i className={`bx ${openFAQ === 11 ? 'bx-minus two' : 'bx-plus'}`}></i>
                                    </a>
                                    <p style={{ display: openFAQ === 11 ? 'block' : 'none' }}>Hiring a CA ensures expert financial guidance, helps in making informed decisions, and provides strategic advice to improve business performance.</p>
                                </li>

                                <li>
                                    <a onClick={() => toggleFAQ(13)} className={`${openFAQ === 13 ? 'active' : ''}`}>
                                    How are your fees structured?
                                        <i className={`bx ${openFAQ === 13 ? 'bx-minus two' : 'bx-plus'}`}></i>
                                    </a>
                                    <p style={{ display: openFAQ === 13 ? 'block' : 'none' }}>Our fees are structured based on the complexity and scope of the services required. We offer competitive rates and can provide a detailed quote upon consultation.</p>
                                </li>
                                <li>
                                    <a onClick={() => toggleFAQ(14)} className={`${openFAQ === 14 ? 'active' : ''}`}>
                                    How can I schedule an appointment?
                                        <i className={`bx ${openFAQ === 14 ? 'bx-minus two' : 'bx-plus'}`}></i>
                                    </a>
                                    <p style={{ display: openFAQ === 14 ? 'block' : 'none' }}>You can schedule an appointment by contacting us via phone, email, or through our website’s contact form.</p>
                                </li>
                                <li>
                                    <a onClick={() => toggleFAQ(15)} className={`${openFAQ === 15 ? 'active' : ''}`}>
                                    Do you offer international tax consultancy?
                                        <i className={`bx ${openFAQ === 15 ? 'bx-minus two' : 'bx-plus'}`}></i>
                                    </a>
                                    <p style={{ display: openFAQ === 15 ? 'block' : 'none' }}>Yes, we provide international tax consultancy services to help businesses navigate cross-border tax issues and optimize their global tax strategy.</p>
                                </li>
                               
                            </ul>
                        </div>
                    </div>

                    <ServicesDetailsList />

                </div>
            </div>
        </section>
        {/* End FAQ */}
    </>) 
}
