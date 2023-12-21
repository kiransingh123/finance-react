import React, { Fragment } from 'react';


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
class Navbar extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <Fragment>
        {/* Preloader  */}
        {/* <div className="loader">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="spinner">
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                    </div>
                </div>
            </div>
        </div> */}
        {/* End Preloader  */}
        {/* Header */}
        <div className="header-area">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6">
                        <div className="left">
                            <ul>
                                <li>
                                    <i className='bx bx-location-plus'></i>
                                    <a href="#">
                                        504 White St . Dawsonville, New York
                                    </a>    
                                </li>
                                <li>
                                    <i className='bx bx-mail-send'></i>
                                    <a href="mailto:hello@finon.com">hello@finon.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="right">
                            <ul>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className='bx bxl-pinterest-alt'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        {/* End Header */}
        
        {/* Navbar */}
        <div className="navbar-area sticky-top">
            {/* Menu For Mobile Device */}
            <div className="mobile-nav">
                <a href="index.html" className="logo">
                    <img src="images/logo.png" alt="Logo" />
                </a>
            </div>

            {/* Menu For Desktop Device */}
            <div className="main-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <a className="navbar-brand" href="index.html">
                            <img src="images/logo.png" alt="Logo" />
                        </a>
                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle active">Home <i className="bx bx-chevron-down"></i></a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="index.html" className="nav-link active">Home Demo One</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="index-2.html" className="nav-link">Home Demo Two</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="index-3.html" className="nav-link">Home Demo Three</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">Pages <i className="bx bx-chevron-down"></i></a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link dropdown-toggle">Users <i className="bx bx-chevron-down"></i></a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a href="sign-in.html" className="nav-link">Sign In</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="sign-up.html" className="nav-link">Sign Up</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="loan.html" className="nav-link">Loan</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="apply.html" className="nav-link">Apply Now</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="testimonials.html" className="nav-link">Testimonials</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="team.html" className="nav-link">Team</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="faq.html" className="nav-link">FAQ</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="404.html" className="nav-link">404 Error Page</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="coming-soon.html" className="nav-link">Coming Soon</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="privacy-policy.html" className="nav-link">Privacy Policy</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="terms-conditions.html" className="nav-link">Terms & Conditions</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="about.html" className="nav-link">About</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">Services <i className="bx bx-chevron-down"></i></a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="services.html" className="nav-link">Services Style One</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="services-2.html" className="nav-link">Services Style Two</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="service-details.html" className="nav-link">Service Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">Projects <i className="bx bx-chevron-down"></i></a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="projects.html" className="nav-link">Projects Style One</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="projects-2.html" className="nav-link">Projects Style Two</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="project-details.html" className="nav-link">Project Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">Blog <i className="bx bx-chevron-down"></i></a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="blog.html" className="nav-link">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="blog-details.html" className="nav-link">Blog Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="contact.html" className="nav-link">Contact</a>
                                </li>
                            </ul>
                            <div className="side-nav">
                                <div className="dropdown nav-flag-dropdown">
                                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="images/flag1.jpg" alt="Flag" />
                                        Eng
                                        <i className='bx bx-chevron-down'></i>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">
                                            <img src="images/flag2.jpg" alt="Flag" />
                                            Ger
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <img src="images/flag3.jpg" alt="Flag" />
                                            Isr
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <img src="images/flag4.jpg" alt="Flag" />
                                            USA
                                        </a>
                                    </div>
                                </div>
                                <a className="consultant-btn" href="#">
                                    Free Consultant
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
            {/* End Navbar */}
            {/* End Navbar  */}
        </Fragment>;
    }
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
// #endregion

export default Navbar;