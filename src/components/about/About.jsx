import { Link } from 'react-router-dom';
import Team from './Team';

export default function About (){
    return(<>
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
                                <span>Sandeep Midha and Company (SMCA) is chartered accountant firm established in 1971 with offices in New Delhi. Sandeep Midha and Company is a reputable chartered accounting firm offering a comprehensive range of financial and advisory services. Established with a commitment to excellence and integrity, the firm provides expert guidance in various aspects of finance and accounting.</span>
                                <p>Our mission is to provide top-notch financial services with a focus on client satisfaction, ethical practices, and innovative solutions to meet the evolving needs of our clients.</p>
                                <br/>
                                <p>At Sandeep Midha and Company, we believe that the foundation of our success lies in our partner-driven approach. This philosophy ensures that our clients receive the highest level of service, expertise, and personalized attention</p>
                            </div>
                            <div className="bottom">
                                <ul>
                                    <li>
                                        <i className="flaticon-workflow"></i>
                                        <h3>
                                            <span className="odometer" data-count="462">462</span>
                                        </h3>
                                        <p>Successful Projects</p>
                                    </li>
                                    <li>
                                        <i className="flaticon-project"></i>
                                        <h3>
                                            <span className="odometer" data-count="362">362</span>
                                        </h3>
                                        <p>Running Projects</p>
                                    </li>
                                    <li>
                                        <i className="flaticon-team"></i>
                                        <h3>
                                            <span className="odometer" data-count="30">30</span>
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
                    <h2>Partner-Driven Approach at SMCA</h2>
                </div>
                <div className="row">

                    <div className="col-sm-6 col-lg-4">
                        <div className="works-item">
                            <i className="flaticon-accounting"></i>
                            <h3><a href="#">Personalized Client Relationships</a></h3>
                            <p>Our partners are directly involved in client engagements from the outset. This ensures that we understand your unique business needs, challenges, and goals. By fostering strong, long-term relationships, we can provide tailored solutions that align with your strategic objectives. </p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="works-item">
                            <i className="flaticon-personal-information"></i>
                            <h3><a href="#">Expert Guidance and Oversight</a></h3>
                            <p>With a wealth of experience and deep industry knowledge, our partners bring invaluable insights to every engagement. They provide hands-on oversight and expert guidance, ensuring that all aspects of our services are delivered to the highest standards of quality and professionalism. </p>
                        </div>
                    </div>
                    <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                        <div className="works-item">
                            <i className="flaticon-contract"></i>
                            <h3><a href="#">Building Trust and Integrity</a></h3>
                            <p>Trust and integrity are at the heart of our partner-driven approach. Our partners uphold the highest ethical standards and are dedicated to building trust with our clients. By delivering on our promises and maintaining transparency in our interactions, we establish enduring partnerships based on mutual respect and confidence.</p>
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
                    <p>Get your Quote or Call <a href="tel:91-11-43065942">91-11-43065942, 43065943</a></p>
                    {/* <a className="common-btn" href="#">
                        Read More
                        <span></span>
                    </a> */}
                    <Link to="/contactus" className="common-btn">
                    Read More
                    <span></span>
                    </Link>
                </div>
            </div>
        </div>
        {/* End Book */}

        {/* Team */}
       <Team />
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
                    <p>Our foremost core belief and differentiator is our partner-driven approach. All our clients have easy access to our partners at all times. All requirements of our clients are attended with utmost personalised attention by our Partners.</p>
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
    </>)
}
