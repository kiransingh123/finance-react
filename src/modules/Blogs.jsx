import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

class Blogs extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <Fragment>
               {/* Page Title  */}
        <div className="page-title-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="title-content">
                            <h2>Blog</h2>
                            <ul>
                                <li>
                                <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <span>Blog</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         {/* End Page Title  */}

         {/* Blog  */}
        <section className="blog-area ptb-100">
            <div className="container">
                <div className="row">

                    <div className="col-sm-6 col-lg-4">
                        <div className="blog-item">
                            <div className="top">
                                <img src="images/blog/blog1.jpg" alt="Blog" />
                            </div>
                            <div className="bottom">
                                <ul>
                                    <li>
                                        <i className='bx bx-user'></i>
                                        by
                                            <Link to="/" >Admin</Link>
                                    </li>
                                    <li>
                                        <i className='bx bx-calendar'></i>
                                        27 November, 2020
                                    </li>
                                </ul>
                                <h3>
                                        
                                        <Link to="/blog-details" >Financial planning is the best invest for corporate business</Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
                                    
                                    <Link to="/blog-details" className="blog-btn">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="blog-item">
                            <div className="top">
                                <img src="images/blog/blog2.jpg" alt="Blog" />
                            </div>
                            <div className="bottom">
                                <ul>
                                    <li>
                                        <i className='bx bx-user'></i>
                                        by
                                        <a href="#">Admin</a>
                                    </li>
                                    <li>
                                        <i className='bx bx-calendar'></i>
                                        28 November, 2020
                                    </li>
                                </ul>
                                <h3>
                                    <a href="blog-details.html">Largest demand partnership building with agency</a>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
                                <a className="blog-btn" href="blog-details.html">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="blog-item">
                            <div className="top">
                                <img src="images/blog/blog3.jpg" alt="Blog" />
                            </div>
                            <div className="bottom">
                                <ul>
                                    <li>
                                        <i className='bx bx-user'></i>
                                        by
                                        <a href="#">Admin</a>
                                    </li>
                                    <li>
                                        <i className='bx bx-calendar'></i>
                                        29 November, 2020
                                    </li>
                                </ul>
                                <h3>
                                    <a href="blog-details.html">How to become top conference for business growth</a>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
                                <a className="blog-btn" href="blog-details.html">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="blog-item">
                            <div className="top">
                                <img src="images/blog/blog4.jpg" alt="Blog" />
                            </div>
                            <div className="bottom">
                                <ul>
                                    <li>
                                        <i className='bx bx-user'></i>
                                        by
                                        <a href="#">Admin</a>
                                    </li>
                                    <li>
                                        <i className='bx bx-calendar'></i>
                                        30 November, 2020
                                    </li>
                                </ul>
                                <h3>
                                    <a href="blog-details.html">How you can get loan easily for your business</a>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
                                <a className="blog-btn" href="blog-details.html">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="blog-item">
                            <div className="top">
                                <img src="images/blog/blog5.jpg" alt="Blog" />
                            </div>
                            <div className="bottom">
                                <ul>
                                    <li>
                                        <i className='bx bx-user'></i>
                                        by
                                        <a href="#">Admin</a>
                                    </li>
                                    <li>
                                        <i className='bx bx-calendar'></i>
                                        1 July, 2020
                                    </li>
                                </ul>
                                <h3>
                                    <a href="blog-details.html">You can get loan from us and build yourself</a>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
                                <a className="blog-btn" href="blog-details.html">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="blog-item">
                            <div className="top">
                                <img src="images/blog/blog6.jpg" alt="Blog" />
                            </div>
                            <div className="bottom">
                                <ul>
                                    <li>
                                        <i className='bx bx-user'></i>
                                        by
                                        <a href="#">Admin</a>
                                    </li>
                                    <li>
                                        <i className='bx bx-calendar'></i>
                                        2 July, 2020
                                    </li>
                                </ul>
                                <h3>
                                    <a href="blog-details.html">You can present yourself for business growth</a>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
                                <a className="blog-btn" href="blog-details.html">Read More</a>
                            </div>
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
         {/* End Blog  */}
        </Fragment>;
    }
}

export default Blogs;