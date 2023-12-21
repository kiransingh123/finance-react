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
class Footer extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <Fragment>
 {/* Footer */}
 <footer className="footer-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    
                    <div className="col-sm-6 col-lg-4">
                        <div className="footer-item">
                            <div className="footer-logo">
                                <a className="logo" href="index.html">
                                    <img src="assets/img/logo-two.png" alt="Logo" />
                                </a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices </p>
                                <ul>
                                    <li>
                                        <i className='bx bx-phone-call'></i>
                                        <span>Phone:</span>
                                        <a href="tel:882569756">882-569-756</a>
                                    </li>
                                    <li>
                                        <i className='bx bx-mail-send'></i>
                                        <span>Email:</span>
                                        <a href="mailto:hello@finon.com">hello@finon.com</a>
                                    </li>
                                    <li>
                                        <i className='bx bx-current-location'></i>
                                        <span>Address:</span>
                                        <a href="tel:882569756">4578 Marmora Road, UK</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-2">
                        <div className="footer-item">
                            <div className="footer-links">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li>
                                        <a href="about.html">About</a>
                                    </li>
                                    <li>
                                        <a href="services.html">Services</a>
                                    </li>
                                    <li>
                                        <a href="projects.html">Projects</a>
                                    </li>
                                    <li>
                                        <a href="faq.html">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="blog.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="privacy-policy.html">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="footer-item">
                            <h3>Newsletter</h3>
                            <div className="footer-newsletter">
                                <p>Accusamus et iusto odio quas molestias except.</p>
                                <form className="newsletter-form" data-toggle="validator">
                                    <input type="email" className="form-control" placeholder="Enter email address" name="EMAIL" required autocomplete="off" />
            
                                    <button className="btn common-btn" type="submit">
                                        Subscribe
                                        <span></span>
                                    </button>
                                    <div id="validator-newsletter" className="form-result"></div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="footer-item">
                            <div className="footer-links">
                                <h3>What We Do</h3>
                                <ul>
                                    <li>
                                        <a href="about.html">Financial Advice</a>
                                    </li>
                                    <li>
                                        <a href="services.html">Planning Strategies</a>
                                    </li>
                                    <li>
                                        <a href="projects.html">Investment Trending</a>
                                    </li>
                                    <li>
                                        <a href="faq.html">Wealth Commitment</a>
                                    </li>
                                    <li>
                                        <a href="blog.html">Our Services</a>
                                    </li>
                                    <li>
                                        <a href="privacy-policy.html">States Element</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
        {/* End Footer */}

        {/* Copyright */}
        <div className="copyright-area">
            <div className="container">
                <div className="copyright-item">
                    <p>Copyright @2023 Design & Developed by <a href="tel:882569756">Kiran singh</a></p>
                </div>
            </div>
        </div>
        {/* End Copyright */}

        {/* Go Top */}
        <div className="go-top">
            <i className='bx bxs-up-arrow'></i>
            <i className='bx bxs-up-arrow'></i>
        </div>
       

        </Fragment>;
    }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
// #endregion

export default Footer;