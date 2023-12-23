import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

class Faqs extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <Fragment>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ultrices grad </p>
                        </div>
                        <div className="faq-item">
                            <ul className="accordion">
                                <li>
                                    <a>
                                        What kind of financial consultancy you need
                                        <i className='bx bx-plus'></i>
                                        <i className="bx bx-minus two"></i>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ultrices grad </p>
                                </li>
                                <li>
                                    <a>
                                        How we help you for your business
                                        <i className='bx bx-plus'></i>
                                        <i className="bx bx-minus two"></i>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ultrices grad </p>
                                </li>
                                <li>
                                    <a>
                                        What is Firewall and why it is used?
                                        <i className='bx bx-plus'></i>
                                        <i className="bx bx-minus two"></i>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ultrices grad </p>
                                </li>
                                <li>
                                    <a>
                                        What is  Finance & Investment?
                                        <i className='bx bx-plus'></i>
                                        <i className="bx bx-minus two"></i>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ultrices grad </p>
                                </li>
                                <li>
                                    <a>
                                        Why you need consulting service for business?
                                        <i className='bx bx-plus'></i>
                                        <i className="bx bx-minus two"></i>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ultrices grad </p>
                                </li>
                                <li>
                                    <a>
                                        How to benefited from business?
                                        <i className='bx bx-plus'></i>
                                        <i className="bx bx-minus two"></i>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ultrices grad </p>
                                </li>
                                <li>
                                    <a>
                                        What steps will you take to remove risk of finance
                                        <i className='bx bx-plus'></i>
                                        <i className="bx bx-minus two"></i>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ultrices grad </p>
                                </li>
                                <li>
                                    <a>
                                        How we will hrlp to you
                                        <i className='bx bx-plus'></i>
                                        <i className="bx bx-minus two"></i>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ultrices grad </p>
                                </li>
                                <li>
                                    <a>
                                        How is our Terms & Conditions?
                                        <i className='bx bx-plus'></i>
                                        <i className="bx bx-minus two"></i>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ultrices grad </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="widget-area">

                            <div className="services widget-item">
                                <h3>Services List</h3>
                                <ul>
                                    <li>
                                        <a href="#">
                                            Cash Investment
                                            <i className='bx bx-right-arrow-alt'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Personal Insurance
                                            <i className='bx bx-right-arrow-alt'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Education Loan
                                            <i className='bx bx-right-arrow-alt'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Financial Planning
                                            <i className='bx bx-right-arrow-alt'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="consultation">
                                <img src="images/services/service-details4.jpg" alt="Details" />
                                <div className="inner">
                                    <h3>Need Any Consultation</h3>
                                    <a className="common-btn" href="contact.html">
                                        Send Message
                                        <span></span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* End FAQ */}
        </Fragment>;
    }
}

export default Faqs;