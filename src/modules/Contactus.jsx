import React, { Fragment } from "react";
import { Link } from "react-router-dom";

class Contactus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        {/* Page Title  */}
        <div className="page-title-area">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="title-content">
                  <h2>Contact</h2>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <span>Contact</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Title  */}

        {/* Contact Info  */}
        <div className="contact-info-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <div className="contact-info-item">
                  <img src="images/contact-info-shape.png" alt="Shape" />
                  <i className="bx bx-location-plus"></i>
                  <h3>Office Location</h3>
                  <Link
                    to="https://maps.app.goo.gl/Gcd7BWsQUAT48NfJ7"
                    target="_blank"
                  >
                    32-B, MIG Flats, Sheikh Sarai, Phase-1, New Delhi-110017
                  </Link>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="contact-info-item">
                  <img src="images/contact-info-shape.png" alt="Shape" />
                  <i className="bx bx-phone-call"></i>
                  <h3>Phone</h3>
                  <ul>
                    <li>
                      <Link to="tel:+91-11-43065942">91-11-43065942</Link>
                    </li>
                    <li>
                      <Link to="tel:+91-11-43065943">91-11-43065943</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                <div className="contact-info-item">
                  <img src="images/contact-info-shape.png" alt="Shape" />
                  <i className="bx bx-mail-send"></i>
                  <h3>Email</h3>
                  <ul>
                    <li>
                    <Link to="mailto:office@smca.co.in">
                          office@smca.co.in
                        </Link>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Contact Info  */}

        {/* Contact  */}
        <div className="contact-area ptb-100">
          <div className="container">
            <form id="contactForm">
              <div className="section-title">
                <h2>Get In Touch</h2>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Name*"
                      required
                      data-error="Please enter your name"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Email"
                      required
                      data-error="Please enter your email"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone_number"
                      id="phone_number"
                      placeholder="Phone"
                      required
                      data-error="Please enter your number"
                      className="form-control"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="msg_subject"
                      id="msg_subject"
                      className="form-control"
                      placeholder="Subject"
                      required
                      data-error="Please enter your subject"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      id="message"
                      cols="30"
                      rows="8"
                      placeholder="Write message"
                      required
                      data-error="Write your message"
                    ></textarea>
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <button type="submit" className="btn common-btn">
                    Send Message
                    <span></span>
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden"></div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* End Contact  */}

        {/* Map  */}
        <div className="map-area">
          <div className="container-fluid p-0">
            <iframe
              id="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59843174.53779284!2d62.17507173408573!3d23.728204508550373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3663f18a24cbe857%3A0xa9416bfcd3a0f459!2sAsia!5e0!3m2!1sen!2sbd!4v1601881198928!5m2!1sen!2sbd"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
        {/* End Map  */}

        {/* Logo  */}
        <div className="logo-area ptb-100">
          <div className="container">
            <div className="logo-slider owl-theme owl-carousel">
              <div className="logo-item">
                <img src="images/logo/logo1.png" alt="Logo" />
              </div>

              <div className="logo-item">
                <img src="images/logo/logo2.png" alt="Logo" />
              </div>

              <div className="logo-item">
                <img src="images/logo/logo3.png" alt="Logo" />
              </div>

              <div className="logo-item">
                <img src="images/logo/logo4.png" alt="Logo" />
              </div>

              <div className="logo-item">
                <img src="images/logo/logo5.png" alt="Logo" />
              </div>
            </div>
          </div>
        </div>
        {/* End Logo  */}
      </Fragment>
    );
  }
}

export default Contactus;
