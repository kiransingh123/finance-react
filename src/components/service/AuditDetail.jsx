import React from 'react';
import { Link } from 'react-router-dom';
import ServicesDetailsList from './ServicesDetailsList';

export default function AuditDetail (){
    return(<>
        <div className="page-title-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="title-content">
                            <h2>Audit Details</h2>
                            <ul>
                                <li>
                                   <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <span>Service</span>
                                </li>
                                <li>
                                    <span>Audit Details</span>
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
                                <p>Our approach combines rigorous standards with a deep understanding of our clients' businesses to enhance transparency, ensure compliance, and foster stakeholder confidence </p>
                            </div>

                            <div className="details-client">
                                <h3>Our Audit and Assurance Services</h3>
                                <h5>1. Statutory Audits</h5>
                                <ul>
                                    <li>Conducting audits as mandated by law to ensure financial statements present a true and fair view.</li>
                                    <li>Evaluating compliance with applicable accounting standards and regulatory requirements.</li>
                                    <li>Providing stakeholders with assurance on the integrity of financial reporting.</li>                                   
                                </ul>

                                <h5>2. Internal Audits</h5>
                                <ul>
                                    <li>Assessing the effectiveness of internal controls and risk management processes.</li>
                                    <li>Identifying areas for operational improvement and cost savings.</li>
                                    <li>Delivering actionable insights to enhance efficiency and governance.</li>                                   
                                </ul>

                                <h5>3. Tax Audits </h5>
                                <ul>
                                    <li>Verifying the accuracy of tax returns and compliance with tax laws.</li>
                                    <li>Identifying potential tax liabilities and ensuring timely tax payments.</li>
                                    <li>Advising on tax planning strategies to optimize tax positions.</li>
                                </ul>

                                <h5>4. Risk Assurance </h5>
                                <ul>
                                    <li>Evaluating and managing business risks to safeguard assets and reputation.</li>
                                    <li>Conducting risk assessments and developing mitigation strategies.</li>
                                    <li>Enhancing risk awareness and preparedness across the organization.</li>
                                </ul>
                                <h5>5. Forensic Audits</h5>
                                <ul>
                                    <li>Investigating financial discrepancies and fraud.</li>
                                    <li>Providing expert analysis and reporting for legal and regulatory proceedings.</li>
                                    <li>Recommending controls to prevent future occurrences of fraud.
                                    </li>
                                </ul>
                                <h5>6. Compliance Audits </h5>
                                <ul>
                                    <li>Ensuring adherence to industry-specific regulations and standards.</li>
                                    <li>Conducting detailed reviews of compliance frameworks and practices.</li>
                                    <li>Providing recommendations to strengthen compliance and reduce risk exposure.</li>
                                </ul>
        
                            </div>
                            <div className="details-client">
                            <h3>Benefits of Our Audit and Assurance Services</h3>
                            <h5>1. Enhanced Credibility and Trust</h5>
                            <p>Independent audits enhance the credibility of your financial statements, building trust with investors, regulators, and other stakeholders.</p>
                            <h5>2. Improved Risk Management</h5>
                            <p>Our audits help identify and mitigate risks, ensuring that your business is better prepared to face uncertainties and challenges.
                            </p>
                            <h5>3. Regulatory Compliance</h5>
                            <p>We ensure that your financial reporting complies with all relevant laws and regulations, reducing the risk of legal and regulatory issues.
                            </p>
                            <h5>4. Operational Efficiency</h5>
                            <p>Through our audits, we identify inefficiencies and provide recommendations to streamline operations and reduce costs.
                            </p>                     
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