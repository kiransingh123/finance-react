import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const propTypes = {};
const defaultProps = {};
class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        {/* Footer */}
        <footer className="footer-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <div className="footer-item">
                  <div className="footer-logo">
                    <Link to="/">
                      <img src="images/logo.png" alt="Logo" />
                    </Link>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices{" "}
                    </p>
                    <ul>
                      <li>
                        <i className="bx bx-phone-call"></i>
                        <span>Phone:</span>
                        <Link to="tel:+91-11-43065942">
                        91-11-43065942, 43065943
                        </Link>
                        
                      </li>
                      <li>
                        <i className="bx bx-mail-send"></i>
                        <span>Email:</span>
                        <Link to="mailto:office@smca.co.in">
                          office@smca.co.in
                        </Link>
                      </li>
                      <li>
                        <i className="bx bx-current-location"></i>
                        <span>Address:</span>
                        <Link
                          to="https://maps.app.goo.gl/Gcd7BWsQUAT48NfJ7"
                          target="_blank"
                        >
                          32-B, MIG Flats, Sheikh Sarai, Phase-1, New
                          Delhi-110017
                        </Link>
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
                        <Link to="/about" >About</Link>
                      </li>
                      <li>
                        <Link to="/services" >Services</Link>
                      </li>
                      <li>
                        <Link to="/faqs" >FAQs</Link>
                      </li>
                      <li>
                        <Link to="/blog" >Blog</Link>
                      </li>
                      <li>
                        <Link to="/privacy" >Privacy Policy</Link>
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
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email address"
                        name="EMAIL"
                        required
                        autocomplete="off"
                      />

                      <button className="btn common-btn" type="submit">
                        Subscribe
                        <span></span>
                      </button>
                      <div
                        id="validator-newsletter"
                        className="form-result"
                      ></div>
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
                        <Link to="/services">Financial Advice</Link>
                      </li>
                      <li>
                        <Link to="/services">Planning Strategies</Link>
                      </li>
                      <li>
                        <Link to="/services">Investment Trending</Link>
                      </li>
                      <li>
                        <Link to="/services">Wealth Commitment</Link>
                      </li>
                      <li>
                        <Link to="/services">Our Services</Link>
                      </li>
                      <li>
                        <Link to="/services">States Element</Link>
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
              <p>
                Copyright @2023 Design & Developed by{" "}
                <a href="tel:882569756">Kiran singh</a>
              </p>
            </div>
          </div>
        </div>
        {/* End Copyright */}

        {/* Go Top */}
        <div className="go-top">
          <i className="bx bxs-up-arrow"></i>
          <i className="bx bxs-up-arrow"></i>
        </div>
      </Fragment>
    );
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
// #endregion

export default Footer;
