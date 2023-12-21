import React, { Fragment } from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
class Home extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <Fragment>
        {/* Banner */}
        <div className="banner-area banner-bg-one">
            <div className="banner-shape">
                <img src="images/banner/banner-shape1.jpg" alt="Shape" />
            </div>
            <div className="banner-slider owl-theme owl-carousel">
                <div className="banner-item">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="banner-content">
                                    <span>Your Financial Status Is Good Hands</span>
                                    <h1>Our Company Provide Best Financial Solutions</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo </p>
                                    <div className="banner-btn-area">
                                        <a className="banner-btn common-btn" href="apply.html">
                                            Get Started
                                            <span></span>
                                        </a>
                                        <a className="common-btn" href="contact.html">
                                            Contact Us
                                            <span></span>
                                        </a>
                                    </div>
                                </div>
                                <div className="banner-slider-img">
                                    <img src="images/banner/banner-main1.png" alt="Banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner-item">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="banner-content">
                                    <span>Your Financial Status Is Good Hands</span>
                                    <h1>Your First Steps Into The Financial Markets Investment</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo </p>
                                    <div className="banner-btn-area">
                                        <a className="banner-btn common-btn" href="apply.html">
                                            Get Started
                                            <span></span>
                                        </a>
                                        <a className="common-btn" href="contact.html">
                                            Contact Us
                                            <span></span>
                                        </a>
                                    </div>
                                </div>
                                <div className="banner-slider-img two">
                                    <img src="images/banner/banner-main2.png" alt="Banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner-item">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="banner-content">
                                    <span>Your Financial Status Is Good Hands</span>
                                    <h1>Finon Will Give Business Opportunity To You</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo </p>
                                    <div className="banner-btn-area">
                                        <a className="banner-btn common-btn" href="apply.html">
                                            Get Started
                                            <span></span>
                                        </a>
                                        <a className="common-btn" href="contact.html">
                                            Contact Us
                                            <span></span>
                                        </a>
                                    </div>
                                </div>
                                <div className="banner-slider-img three">
                                    <img src="images/banner/banner-main3.png" alt="Banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        {/* End Banner */}

        {/* About */}
        <div className="about-area ptb-100">
            <div className="about-shape">
                <img src="images/about/about-shape1.png" alt="Shape" />
                <img src="images/about/about-shape2.png" alt="Shape" />
                <img src="images/about/about-shape3.png" alt="Shape" />
            </div>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-5 left-padding">
                        <div className="about-img">
                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="one">
                                        <img src="images/about/about1.jpg" alt="About" />
                                        <img src="images/about/about-shape4.png" alt="Shape" />
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-6">
                                    <div className="three">
                                        <img src="images/about/about3.jpg" alt="About" />
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-6">
                                    <div className="two">
                                        <img src="images/about/about2.jpg" alt="About" />
                                    </div>
                                </div>

                            </div>
                        </div>  
                    </div>

                    <div className="col-lg-7">
                        <div className="about-content">
                            <div className="section-title">
                                <span className="sub-title">About Company</span>
                                <h2>We Help Our Clients To Achieve Their Desire Goals</h2>
                            </div>
                            <div className="middle">
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra </span>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.</p>
                            </div>
                            <div className="bottom">
                                <ul>
                                    <li>
                                        <i className="flaticon-workflow"></i>
                                        <h3>
                                            <span className="odometer" data-count="462">00</span>
                                        </h3>
                                        <p>Successful Projects</p>
                                    </li>
                                    <li>
                                        <i className="flaticon-project"></i>
                                        <h3>
                                            <span className="odometer" data-count="362">00</span>
                                        </h3>
                                        <p>Running Projects</p>
                                    </li>
                                    <li>
                                        <i className="flaticon-team"></i>
                                        <h3>
                                            <span className="odometer" data-count="562">00</span>
                                        </h3>
                                        <p>Skilled Members</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="years">
                                <ul className="align-items-center">
                                    <li>
                                        <div className="years-inner">
                                            <span>25</span>
                                            <h4>Years Of Experience</h4>
                                            <i className="flaticon-handshake"></i>
                                            <img src="images/about/about-shape5.png" alt="Shape" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="video-wrap">
                                            <a href="http://www.youtube.com/watch?v=0O2aH4XLbto" className="popup-youtube">
                                                <i className='bx bx-play'></i>
                                            </a>
                                            <span>Watch Video</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        {/* End About */}

        {/* Services */}
        <section className="services-area pt-100 pb-70">
            <div className="services-shape">
                <img src="images/services/services-shape1.png" alt="Shape" />
                <img src="images/services/services-shape2.png" alt="Shape" />
            </div>
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">What Services We Provide</span>
                    <h2>Get Exceptional Finon Service For Growth</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum suspendisse ultrices gravida. Risus commodo</p>
                </div>
                <div className="row">

                    <div className="col-sm-6 col-lg-4">
                        <div className="services-item">
                            <i className="flaticon-deposit icon"></i>
                            <h3>
                                <a href="service-details.html">Invest Planning</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  dolore magna</p>
                            <div className="services-btn">
                                <i className='bx bx-right-arrow-alt'></i>
                                <a href="service-details.html">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="services-item">
                            <i className="flaticon-loan icon"></i>
                            <h3>
                                <a href="service-details.html">Financial Consultancy</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  dolore magna</p>
                            <div className="services-btn">
                                <i className='bx bx-right-arrow-alt'></i>
                                <a href="service-details.html">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="services-item">
                            <i className="flaticon-online-banking icon"></i>
                            <h3>
                                <a href="service-details.html">Online Banking & Loans</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  dolore magna</p>
                            <div className="services-btn">
                                <i className='bx bx-right-arrow-alt'></i>
                                <a href="service-details.html">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="services-item">
                            <i className="flaticon-education-cost icon"></i>
                            <h3>
                                <a href="service-details.html">Education Loans</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  dolore magna</p>
                            <div className="services-btn">
                                <i className='bx bx-right-arrow-alt'></i>
                                <a href="service-details.html">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="services-item">
                            <i className="flaticon-loan-1 icon"></i>
                            <h3>
                                <a href="service-details.html">House Loans</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  dolore magna</p>
                            <div className="services-btn">
                                <i className='bx bx-right-arrow-alt'></i>
                                <a href="service-details.html">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="services-item">
                            <i className="flaticon-consulting icon"></i>
                            <h3>
                                <a href="service-details.html">Consultancy</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  dolore magna</p>
                            <div className="services-btn">
                                <i className='bx bx-right-arrow-alt'></i>
                                <a href="service-details.html">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* End Services */}

        {/* Works */}
        <section className="works-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">How It Works</span>
                    <h2>Get Your Loan In 3 Easy Steps</h2>
                </div>
                <div className="row">

                    <div className="col-sm-6 col-lg-4">
                        <div className="works-item">
                            <i className="flaticon-accounting"></i>
                            <h3><a href="dfgdf">Select Account & Terms</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt   </p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="works-item">
                            <i className="flaticon-personal-information"></i>
                            <h3><a href="dfgdf">Enter Your Personal Information</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt   </p>
                        </div>
                    </div>

                    <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                        <div className="works-item">
                            <i className="flaticon-contract"></i>
                            <h3><a href="dfgdf">Get Approved in 24 Hours</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt   </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* End Works */}

        {/* Book */}
        <div className="book-area ptb-100">
            <div className="container">
                <div className="book-content">
                    <div className="book-shape">
                        <img src="images/book-shape1.png" alt="Shape" />
                        <img src="images/book-shape2.png" alt="Shape" />
                    </div>
                    <h2>Are You Ready? Book Appointment Now</h2>
                    <p>Get your Quote or Call <a href="tel:080569899563">(080) 569 899 563</a></p>
                    <a className="common-btn" href="dfgdf">
                        Read More
                        <span></span>
                    </a>
                </div>
            </div>
        </div>
        {/* End Book */}

        {/* Touch */}
        <section className="touch-area pt-100 pb-70">
            <div className="touch-shape">
                <img src="images/touch-shape1.png" alt="Shape" />
                <img src="images/touch-shape2.png" alt="Shape" />
            </div>
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6">
                        <div className="touch-content">
                            <div className="section-title">
                                <span className="sub-title">Get In Touch</span>
                                <h2>Request A Call-Back</h2>
                            </div>
                            <form>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Phone" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <select>
                                                <option>Terms of Use</option>
                                                <option>Some option</option>
                                                <option>Another option</option>
                                                <option>Potato</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Subject" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea id="your-message" className="form-control" rows="6" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button type="submit" className="btn common-btn">
                                            Send Message
                                            <span></span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="touch-img">
                            <img src="images/touch-main.jpg" alt="Touch" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* End Touch */}

        {/* Team */}
        <section className="team-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Expert Team</span>
                    <h2>We Have An Exclusive Team</h2>
                </div>
                <div className="team-slider owl-theme owl-carousel">

                    <div className="team-item">
                        <div className="top">
                            <img src="images/team/team1.jpg" alt="Team" />
                            <ul>
                                <li>
                                    <a href="dfgdf" >
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="dfgdf" >
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="dfgdf" >
                                        <i className='bx bxl-pinterest-alt'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="dfgdf" >
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bottom">
                            <h3>Keten Moris</h3>
                            <span>CEO of Company</span>
                            <img src="images/team/team-shape1.png" alt="Shape" />
                        </div>
                    </div>

                    <div className="team-item">
                        <div className="top">
                            <img src="images/team/team2.jpg" alt="Team" />
                            <ul>
                                <li>
                                    <a href="dfgdf" >
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="dfgdf" >
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="dfgdf" >
                                        <i className='bx bxl-pinterest-alt'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="dfgdf" >
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bottom">
                            <h3>Digo Mera</h3>
                            <span>Manager</span>
                            <img src="images/team/team-shape1.png" alt="Shape" />
                        </div>
                    </div>

                    <div className="team-item">
                        <div className="top">
                            <img src="images/team/team3.jpg" alt="Team" />
                            <ul>
                                <li>
                                    <a href="dfgdf" >
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="dfgdf" >
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="dfgdf" >
                                        <i className='bx bxl-pinterest-alt'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="dfgdf" >
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bottom">
                            <h3>Mackob Testa</h3>
                            <span>Consultant</span>
                            <img src="images/team/team-shape1.png" alt="Shape" />
                        </div>
                    </div>

                    <div className="team-item">
                        <div className="top">
                            <img src="images/team/team4.jpg" alt="Team" />
                            <ul>
                                <li>
                                    <a href="dfgdf" >
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="dfgdf" >
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="dfgdf" >
                                        <i className='bx bxl-pinterest-alt'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="dfgdf" >
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bottom">
                            <h3>Tom Henry</h3>
                            <span>Engineer</span>
                            <img src="images/team/team-shape1.png" alt="Shape" />
                        </div>
                    </div>

                    <div className="team-item">
                        <div className="top">
                            <img src="images/team/team5.jpg" alt="Team" />
                            <ul>
                                <li>
                                    <a href="dfgdf" >
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="dfgdf" >
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="dfgdf" >
                                        <i className='bx bxl-pinterest-alt'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="dfgdf" >
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bottom">
                            <h3>Jac Jacson</h3>
                            <span>Engineer</span>
                            <img src="images/team/team-shape1.png" alt="Shape" />
                        </div>
                    </div>

                    <div className="team-item">
                        <div className="top">
                            <img src="images/team/team6.jpg" alt="Team" />
                            <ul>
                                <li>
                                    <a href="dfgdf" >
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="dfgdf" >
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="dfgdf" >
                                        <i className='bx bxl-pinterest-alt'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="dfgdf" >
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bottom">
                            <h3>Micheal Smith</h3>
                            <span>Staff</span>
                            <img src="images/team/team-shape1.png" alt="Shape" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* End Team */}

        {/* Plan */}
        <div className="plan-area mb-100">
            <div className="container-fluid">

                <div className="plan-content">
                    <div className="plan-shape">
                        <img src="images/plan-shape1.png" alt="Shape" />
                        <img src="images/plan-shape2.png" alt="Shape" />
                    </div>
                    <div className="section-title">
                        <h2>We Have Experience For Financial Planning</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt  labore et dolore magna aliqua. Quis ipsum</p>
                    <div className="skill-wrap">
                        <div className="skill">
                            <h3>Business Strategy</h3>
                            <div className="skill-bar skill1 wow fadeInLeftBig">
                                <span className="skill-count1">75%</span>
                            </div>
                        </div>
                        <div className="skill">
                            <h3>Financial Planning</h3>
                            <div className="skill-bar skill2 wow fadeInLeftBig">
                                <span className="skill-count2">45%</span>
                            </div>
                        </div>
                        <div className="skill">
                            <h3>Marketing Strategy</h3>
                            <div className="skill-bar skill3 wow fadeInLeftBig">
                                <span className="skill-count3">80%</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        {/* End Plan */}

        {/* FAQ */}
        <section className="faq-area pt-100 pb-70">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6">
                        <div className="section-title">
                            <span className="sub-title">Finon FAQ</span>
                            <h2>Frequently Asked Questions</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ultrices grad </p>
                        </div>
                        <div className="faq-item">
                            <ul className="accordion">
                                <li>
                                    <a href="dfgdf">
                                        What kind of financial consultancy you need
                                        <i className='bx bx-plus'></i>
                                        <i className="bx bx-minus two"></i>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ultrices grad </p>
                                </li>
                                <li>
                                    <a href="dfgdf">
                                        How we help you for your business
                                        <i className='bx bx-plus'></i>
                                        <i className="bx bx-minus two"></i>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ultrices grad </p>
                                </li>
                                <li>
                                    <a href="dfgdf">
                                        What is Firewall and why it is used?
                                        <i className='bx bx-plus'></i>
                                        <i className="bx bx-minus two"></i>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ultrices grad </p>
                                </li>
                                <li>
                                    <a href="dfgdf">
                                        What steps will you take to remove risk of finance
                                        <i className='bx bx-plus'></i>
                                        <i className="bx bx-minus two"></i>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ultrices grad </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="faq-img">
                            <img src="images/faq-main.png" alt="FAQ" />
                            <img src="images/faq-shape.png" alt="Shape" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* End FAQ */}

        {/* Testimonials */}
        <section className="testimonials-area pt-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Testimonials</span>
                    <h2>What Our Clients Says</h2>
                </div>
                <div className="testimonials-slider owl-theme owl-carousel">

                    <div className="testimonials-item">
                        <img src="images/testimonials1.png" alt="Testimonial" />
                        <div className="inner">
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </h2>
                            <h3>Jiniya Lisa</h3>
                            <span>CEO of Finance & Banking</span>
                            <i className='bx bxs-quote-alt-left bx-flip-horizontal'></i>
                        </div>
                    </div>

                    <div className="testimonials-item">
                        <img src="images/testimonials2.png" alt="Testimonial" />
                        <div className="inner">
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </h2>
                            <h3>Tom Henry</h3>
                            <span>Manager</span>
                            <i className='bx bxs-quote-alt-left bx-flip-horizontal'></i>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* End Testimonials */}

        {/* Blog */}
        <section className="blog-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Latest News</span>
                    <h2>Latest News From Blog</h2>
                </div>
                <div className="row">

                    <div className="col-sm-6 col-lg-4">
                        <div className="blog-item">
                            <div className="top">
                                <img src="images/blog/blog1.jpg" alt="Blog" />
                            </div>
                            <div className="bottom">
                                <ul>
                                    <li>
                                        <i className='bx bx-user'></i>
                                        by
                                        <a href="dfgdf">Admin</a>
                                    </li>
                                    <li>
                                        <i className='bx bx-calendar'></i>
                                        27 November, 2020
                                    </li>
                                </ul>
                                <h3>
                                    <a href="blog-details.html">Financial planning is the best invest for corporate business</a>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
                                <a className="blog-btn" href="blog-details.html">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="blog-item">
                            <div className="top">
                                <img src="images/blog/blog2.jpg" alt="Blog" />
                            </div>
                            <div className="bottom">
                                <ul>
                                    <li>
                                        <i className='bx bx-user'></i>
                                        by
                                        <a href="dfgdf">Admin</a>
                                    </li>
                                    <li>
                                        <i className='bx bx-calendar'></i>
                                        28 November, 2020
                                    </li>
                                </ul>
                                <h3>
                                    <a href="blog-details.html">Largest demand partnership building with agency</a>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
                                <a className="blog-btn" href="blog-details.html">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                        <div className="blog-item">
                            <div className="top">
                                <img src="images/blog/blog3.jpg" alt="Blog" />
                            </div>
                            <div className="bottom">
                                <ul>
                                    <li>
                                        <i className='bx bx-user'></i>
                                        by
                                        <a href="dfgdf">Admin</a>
                                    </li>
                                    <li>
                                        <i className='bx bx-calendar'></i>
                                        29 November, 2020
                                    </li>
                                </ul>
                                <h3>
                                    <a href="blog-details.html">How to become top conference for business growth</a>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
                                <a className="blog-btn" href="blog-details.html">Read More</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* End Blog */}
        </Fragment>;
    }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
// #endregion

export default Home;