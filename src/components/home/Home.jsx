import React from "react";
import Banner from "./Banner";
import About from "./About";
import Service from "./Service";
import RequestForm from "./RequestForm";
import Testimonial from "./Testimonial";

function Home(){
  return (<>
   <>
     {/* Banner */}
        <div className="banner-area banner-bg-one">
          <div className="banner-shape">
            <img src="images/banner/banner-shape1.jpg" alt="Shape" />
          </div>
            <Banner />
        </div>
        {/* About */}
          <About />
        {/* Services */}
          <Service />

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
                      <p>Our partners are directly involved in client engagements from the outset. This ensures that we understand your unique business needs, challenges, and goals.</p>
                  </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                  <div className="works-item">
                      <i className="flaticon-personal-information"></i>
                      <h3><a href="#">Expert Guidance and Oversight</a></h3>
                      <p>With a wealth of experience and deep industry knowledge, our partners bring invaluable insights to every engagement.</p>
                  </div>
              </div>
              <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                  <div className="works-item">
                      <i className="flaticon-contract"></i>
                      <h3><a href="#">Building Trust and Integrity</a></h3>
                      <p>Trust and integrity are at the heart of our partner-driven approach. Our partners uphold the highest ethical standards and are dedicated to building trust with our clients.</p>
                  </div>
              </div>
              </div>
          </div>
        </section>
        {/* End Works */}

        {/* Touch */}
        <RequestForm />
       &nbsp;
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incidiunt labore et dolore magna aliqua. Quis
                ipsum
              </p>
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

&nbsp;
        {/* Testimonials */}
        <Testimonial />
        {/* End Testimonials */}
&nbsp;
    </>
  </>)
}

export default Home;
