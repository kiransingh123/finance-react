export default function About (){
    return (<>
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
                                <span>Sandeep Midha and Company (SMCA) is chartered accountant firm established in 1971 with offices in New Delhi. Sandeep Midha and Company is a reputable chartered accounting firm offering a comprehensive range of financial and advisory services. Established with a commitment to excellence and integrity, the firm provides expert guidance in various aspects of finance and accounting.</span>
                               
                            </div>
                  <div className="bottom">
                    <ul>
                      <li>
                        <i className="flaticon-workflow"></i>
                        <h3>
                          <span className="odometer" data-count="462">
                            462
                          </span>
                        </h3>
                        <p>Successful Projects</p>
                      </li>
                      <li>
                        <i className="flaticon-project"></i>
                        <h3>
                          <span className="odometer" data-count="362">
                            362
                          </span>
                        </h3>
                        <p>Running Projects</p>
                      </li>
                      <li>
                        <i className="flaticon-team"></i>
                        <h3>
                          <span className="odometer" data-count="50">
                            50
                          </span>
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
                          <img
                            src="images/about/about-shape5.png"
                            alt="Shape"
                          />
                        </div>
                      </li>
                      {/* <li>
                        <div className="video-wrap">
                          <a
                            href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                            className="popup-youtube"
                          >
                            <i className="bx bx-play"></i>
                          </a>
                          <span>Watch Video</span>
                        </div>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>)
}