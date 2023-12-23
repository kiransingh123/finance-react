import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

class Services extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <Fragment>
            {/*Page Title */}
        <div className="page-title-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="title-content">
                            <h2>Projects Style Two</h2>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <span>Projects Style Two</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*End Page Title */}

        {/*Projects */}
        <section className="projects-area-two two ptb-100">
            <div className="container">
                <div className="row">

                    <div className="col-sm-6 col-lg-4">
                        <div className="projects-item-two">
                            <img src="images/projects/project-shape1.png" alt="Shape" />
                            <img src="images/projects/project-shape2.png" alt="Shape" />
                            <i className="flaticon-goal icon"></i>
                            <h3>
                                   
                                    <Link to="/service-details">Fast Executions</Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor facilisis.</p>
                                <Link className="projects-btn" to="/service-details">Read More

                                <i className='bx bx-right-arrow-alt'></i>
                                </Link>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="projects-item-two">
                            <img src="images/projects/project-shape1.png" alt="Shape" />
                            <img src="images/projects/project-shape2.png" alt="Shape" />
                            <i className="flaticon-support icon"></i>
                            <h3>
                                <a href="project-details.html">Guide & Support</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor facilisis.</p>
                            <a className="projects-btn" href="project-details.html">
                                Read More
                                <i className='bx bx-right-arrow-alt'></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="projects-item-two">
                            <img src="images/projects/project-shape1.png" alt="Shape" />
                            <img src="images/projects/project-shape2.png" alt="Shape" />
                            <i className="flaticon-investment-insurance icon"></i>
                            <h3>
                                <a href="project-details.html">Financial Secure</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor facilisis.</p>
                            <a className="projects-btn" href="project-details.html">
                                Read More
                                <i className='bx bx-right-arrow-alt'></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="projects-item-two">
                            <img src="images/projects/project-shape1.png" alt="Shape" />
                            <img src="images/projects/project-shape2.png" alt="Shape" />
                            <i className="flaticon-refinancing icon"></i>
                            <h3>
                                <a href="project-details.html">Refinancing</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor facilisis.</p>
                            <a className="projects-btn" href="project-details.html">
                                Read More
                                <i className='bx bx-right-arrow-alt'></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="projects-item-two">
                            <img src="images/projects/project-shape1.png" alt="Shape" />
                            <img src="images/projects/project-shape2.png" alt="Shape"/>
                            <i className="flaticon-investment icon"></i>
                            <h3>
                                <a href="project-details.html">Investment Trading</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor facilisis.</p>
                            <a className="projects-btn" href="project-details.html">
                                Read More
                                <i className='bx bx-right-arrow-alt'></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="projects-item-two">
                            <img src="images/projects/project-shape1.png" alt="Shape" />
                            <img src="images/projects/project-shape2.png" alt="Shape" />
                            <i className="flaticon-bar-chart icon"></i>
                            <h3>
                                <a href="project-details.html">Financial Consultancy</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor facilisis.</p>
                            <a className="projects-btn" href="project-details.html">
                                Read More
                                <i className='bx bx-right-arrow-alt'></i>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="pagination-area">
                    <ul>
                        <li>
                            <a href="#">
                                <i className='bx bx-chevron-left'></i>
                            </a>
                        </li>
                        <li>
                            <a className="active" href="#">
                                1
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                2
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                3
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className='bx bx-chevron-right'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        {/*End Projects */}

        </Fragment>;
    }
}

export default Services;