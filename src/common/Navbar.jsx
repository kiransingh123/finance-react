import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar(){
  const location = useLocation(); // React Hook
  return(<>
  {/* Header */}
  <div className="header-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="left">
                  <ul>
                    <li>
                      <i className="bx bx-location-plus"></i>
                      <Link to="https://maps.app.goo.gl/Gcd7BWsQUAT48NfJ7" target="_blank">32-B, MIG Flats, Sheikh Sarai, Phase-1, New Delhi-110017</Link>
                    </li>
                    <li>
                      <i className="bx bx-mail-send"></i>
                      <Link to="mailto:office@smca.co.in">office@smca.co.in</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="right">
                  <ul>
                    <li>
                      <Link to="/">
                        <i className="bx bxl-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="bx bxl-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="bx bxl-pinterest-alt"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="bx bxl-linkedin"></i>
                      </Link>
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
            <Link to="/">
              <img src="images/logo.png" alt="Logo" />
            </Link>
          </div>

          {/* Menu For Desktop Device */}
          
          <div className="main-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link to="/">
                  <img src="/images/logo.png" alt="Logo" />
                </Link>
                <div
                  className="collapse navbar-collapse mean-menu"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/" className={`nav-link ${(location.pathname =='/') ? 'active' : ''}`}>
                        Home
                      </Link>
                    </li>

                    <li className="nav-item">
                    <Link to="/about" className={`nav-link ${(location.pathname =='/about') ? 'active' : ''}`}>
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/services" className={`nav-link ${(location.pathname =='/services' || location.pathname =='/services/audit-details' || location.pathname =='/services/taxation-details' || location.pathname =='/services/financials-details' || location.pathname =='/services/consulting-details' || location.pathname =='/services/accounting-details' || location.pathname =='/services/corporate-details') ? 'active' : ''}`}>
                        Services
                      </Link>
                    </li>
                    
                    <li className="nav-item">
                    <Link to="/faqs" className={`nav-link ${(location.pathname =='/faqs') ? 'active' : ''}`}>
                        Faqs
                      </Link>
                    </li>
                     <li className="nav-item">
                      <Link to="/essential-link" className={`nav-link ${(location.pathname =='/essential-link') ? 'active' : ''}`}>
                        Essential Link
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link to="/blogs" className="nav-link">
                        Blogs
                      </Link>
                    </li> */}
                    <li className="nav-item">
                      <Link to="/apply-now" className={`nav-link ${(location.pathname =='/apply-now') ? 'active' : ''}`}>
                        Apply Now
                      </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/contactus" className={`nav-link ${(location.pathname =='/cotactus') ? 'active' : ''}`}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <div className="side-nav">
                    <Link to="/admins" className="consultant-btn">
                      Admin Login
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* End Navbar */}
  </>)
}


export default Navbar;
