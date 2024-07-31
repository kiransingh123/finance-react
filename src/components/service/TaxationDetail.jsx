import React from 'react';
import { Link } from 'react-router-dom';
import ServicesDetailsList from './ServicesDetailsList';

export default function TaxationDetail (){
    return(<>
        <div className="page-title-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="title-content">
                            <h2>Taxation Details</h2>
                            <ul>
                                <li>
                                   <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <span>Service</span>
                                </li>
                                <li>
                                    <span>Taxation Details</span>
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
                                <p>Taxation Services are designed to help individuals and businesses navigate the complexities of tax laws and regulations. We provide expert guidance to optimize tax positions, ensure compliance, and minimize tax liabilities.</p>
                            </div>

                            <div className="details-client">
                                <h3>Our Taxation Services</h3>
                                <h5>1. Tax Planning and Consultancy</h5>
                                <ul>
                                    <li>Developing tax-efficient strategies tailored to your specific financial situation and business goals.</li>
                                    <li>Advising on tax implications of business decisions and transactions.</li>
                                    <li>Structuring business operations to maximize tax benefits and minimize liabilities.</li>                                   
                                </ul>

                                <h5>2. GST Compliance and Advisory</h5>
                                <ul>
                                    <li>Assisting with Goods and Services Tax (GST) registration and compliance.</li>
                                    <li>Preparing and filing GST returns accurately and timely.</li>
                                    <li>Advising on GST planning, input tax credit optimization, and dispute resolution.</li>                                   
                                </ul>

                                <h5>3. Income Tax Filing </h5>
                                <ul>
                                    <li>Preparing and filing income tax returns for individuals, businesses, and other entities.</li>
                                    <li>Ensuring accurate calculation of tax liabilities and claiming eligible deductions and credits.</li>
                                    <li>Representing clients in dealings with tax authorities and handling tax assessments.</li>
                                </ul>

                                <h5>4. Transfer Pricing</h5>
                                <ul>
                                    <li>Advising on transfer pricing policies and documentation requirements.</li>
                                    <li>Conducting transfer pricing studies and preparing reports.</li>
                                    <li>Assisting with transfer pricing audits and dispute resolution with tax authorities.</li>
                                </ul>
                                <h5>5. Corporate Tax Services</h5>
                                <ul>
                                    <li>Providing end-to-end corporate tax compliance and advisory services.</li>
                                    <li>Assisting with tax planning for mergers, acquisitions, and reorganizations.</li>
                                    <li>Advising on tax-efficient financing structures and cross-border transactions.
                                    </li>
                                </ul>
                                <h5>6. Indirect Tax Services </h5>
                                <ul>
                                    <li>Advising on indirect taxes such as VAT, excise duty, and customs duty.</li>
                                    <li>Assisting with compliance, documentation, and reporting requirements.</li>
                                    <li>Providing support in indirect tax audits and dispute resolution.</li>
                                </ul>
                                <h5>7. International Taxation</h5>
                                <ul>
                                    <li>Advising on international tax planning and compliance.</li>
                                    <li>Assisting with cross-border tax issues, including double taxation avoidance.</li>
                                    <li>Structuring international operations to optimize global tax positions.</li>
                                </ul>
                                <h5>8. Tax Dispute Resolution</h5>
                                <ul>
                                    <li>Representing clients in tax audits, investigations, and appeals.</li>
                                    <li>Negotiating settlements and resolving tax disputes with authorities.</li>
                                    <li>Providing litigation support and expert testimony in tax-related cases.</li>
                                </ul>
        
                            </div>
                            <div className="details-client">
                            <h3>Benefits of Our Taxation  Services</h3>
                            <h5>1. Optimized Tax Positions</h5>
                            <p>Our strategic tax planning helps you minimize tax liabilities and take advantage of available tax benefits and incentives.

</p>
                            <h5>2. Reduced Compliance Risk</h5>
                           <p>We ensure that you comply with all relevant tax laws and regulations, reducing the risk of penalties and disputes with tax authorities.</p>
                           
                            <h5>3. Informed Decision Making</h5>
                            <p>Our expert advice on tax implications of business decisions enables you to make informed choices that align with your financial goals.</p>
                          
                            <h5>4. Efficient Tax Processes</h5>
                            <p>Our streamlined processes and use of advanced technology ensure efficient preparation and filing of tax returns, saving you time and effort.
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