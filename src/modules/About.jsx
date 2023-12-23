import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
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
                            <h2>About</h2>
                            <ul>
                                <li>                                  
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <span>About</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Page Title */}

        {/* About */}
        <div className="about-area ptb-100">
            <div className="about-shape">
                <img src="images/about/about-shape1.png" alt="Shape" />
                <img src="images/about/about-shape2.png" alt="Shape" />
                <img src="images/about/about-shape3.png" alt="Shape" />
            </div>
            <div className="container-fluid">
                <div className="row align-items-center">

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
                        </div>
                    </div>

                </div>
            </div>
        </div>
        {/* End About */}

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
                            <h3><a href="#">Select Account & Terms</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt   </p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="works-item">
                            <i className="flaticon-personal-information"></i>
                            <h3><a href="#">Enter Your Personal Information</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt   </p>
                        </div>
                    </div>

                    <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                        <div className="works-item">
                            <i className="flaticon-contract"></i>
                            <h3><a href="#">Get Approved in 24 Hours</a></h3>
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
                    <a className="common-btn" href="#">
                        Read More
                        <span></span>
                    </a>
                </div>
            </div>
        </div>
        {/* End Book */}

        {/* Team */}
        <section className="team-area pb-70">
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
    </Fragment>;
    }
}

// About.propTypes = propTypes;
// About.defaultProps = defaultProps;
// #endregion

export default About;