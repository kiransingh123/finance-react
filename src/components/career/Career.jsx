import { Link } from "react-router-dom"

export default function Career(){

    return (<>
   <div className="page-title-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="title-content">
                            <h2>Apply Now</h2>
                            <ul>
                                <li>                                  
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <span>Apply Now</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Apply Now */}
        <div className="apply-area ptb-100">
            <div className="container">
                <div className="apply-item">
                    <h2>Apply Here</h2>
                    <form>
                        <div className="row">

                            <div className="col-sm-6 col-lg-6">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-6">
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" />
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-6">
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-6">
                                <div className="form-group">
                                    <label>Date Of Birth</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-6">
                                <div className="form-group">
                                    <label>Gender</label>
                                    <select className="form-control">
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-6">
                                <div className="form-group">
                                    <label>Address</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-6">
                                <div className="form-group">
                                    <label>Town/City:</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-6">
                                <div className="form-group">
                                    <label>Position for applying</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-6">
                                <div className="form-group">
                                    <label>Hightest Qualification</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-6">
                                <div className="form-group">
                                    <label>Experience</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-6">
                                <div className="form-group">
                                    <label>Upload Resume...</label>
                                    <input type="file" className="form-control" />
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <button type="submit" className="btn common-btn" >
                                    Apply Now
                                    <span></span>
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>)
}