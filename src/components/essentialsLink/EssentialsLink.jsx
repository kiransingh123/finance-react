import { Link } from "react-router-dom"

export default function EssentialsLink (){
    return (<>
         <div className="page-title-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="title-content">
                            <h2>Essential Link</h2>
                            <ul>
                                <li>                                  
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <span>Essential Link</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="works-area-two ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="works-content">
                            <div className="section-title two">
                                <h2>Important Links</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore  dolore magna aliqua.</p>
                            </div>
                            <ul>
                                <li>
                                    <i className='bx bx-check'></i>
                                   <Link to="https://www.icai.org/" target="_blank">
                                   <h3>Institute of Chartered Accountants of India  (ICAI)</h3>
                                   </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>)
}