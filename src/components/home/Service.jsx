import { Link } from "react-router-dom"

export default function Service (){

    return(<>
     <section className="services-area pt-100 pb-70">
          <div className="services-shape">
            <img src="images/services/services-shape1.png" alt="Shape" />
            <img src="images/services/services-shape2.png" alt="Shape" />
          </div>
          <div className="container">
            <div className="section-title">
              <span className="sub-title">What Services We Provide</span>
              <h2>SMCA Services For Growth</h2>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <div className="services-item">
                  <i className="flaticon-deposit icon"></i>
                  <h3>
                    <a href="service-details.html">Audit and Assurance</a>
                  </h3>
                  <p>We provide a comprehensive suite of Audit and Assurance Services designed to deliver accurate, reliable, and insightful financial information. </p>
                             
                  <div className="services-btn">
                    <i className="bx bx-right-arrow-alt"></i>
                    <Link to="/services">Read More</Link>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="services-item">
                  <i className="flaticon-loan icon"></i>
                  <h3>
                    <a href="service-details.html">Financial Consultancy</a>
                  </h3>
                  <p>
                  SMCA, offer a full spectrum of Financial Advisory Services designed to help businesses and individuals make informed financial decisions.
                  </p>
                  <div className="services-btn">
                    <i className="bx bx-right-arrow-alt"></i>
                    <Link to="/services">Read More</Link>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="services-item">
                  <i className="flaticon-online-banking icon"></i>
                  <h3>
                    <a href="service-details.html">Taxation (Direct / Indirect)</a>
                  </h3>
                  <p>
                  We provide expert guidance to optimize tax positions, ensure compliance, and minimize tax liabilities. 
                  </p>
                  <div className="services-btn">
                    <i className="bx bx-right-arrow-alt"></i>
                    <Link to="/services">Read More</Link>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="services-item">
                  <i className="flaticon-education-cost icon"></i>
                  <h3>
                    <a href="service-details.html">Accounting and Outsourcing</a>
                  </h3>
                  <p>
                  Our Accounting and Outsourcing Services are designed to help businesses of all sizes manage their financial operations effectively.
                  </p>
                  <div className="services-btn">
                    <i className="bx bx-right-arrow-alt"></i>
                    <Link to="/services">Read More</Link>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="services-item">
                  <i className="flaticon-loan-1 icon"></i>
                  <h3>
                    <a href="service-details.html">House Loans</a>
                  </h3>
                  <p>
                  SMCA, offer a full spectrum of Financial Advisory Services designed to help businesses and individuals make informed financial decisions.
                  </p>
                  <div className="services-btn">
                    <i className="bx bx-right-arrow-alt"></i>
                    <Link to="/services">Read More</Link>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="services-item">
                  <i className="flaticon-consulting icon"></i>
                  <h3>
                    <a href="service-details.html">Consultancy</a>
                  </h3>
                  <p>
                  our Consulting Services are designed to provide strategic insights and practical solutions that help businesses thrive in a competitive environment.
                  </p>
                  <div className="services-btn">
                    <i className="bx bx-right-arrow-alt"></i>
                    <Link to="/services">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>)
}