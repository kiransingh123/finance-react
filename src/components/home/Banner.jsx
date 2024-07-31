import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function Banner (){

    return(<>
    <OwlCarousel className='owl-theme owl-carousel owl-loaded owl-drag' margin={10}  >
    <div className='banner-item'>
        <div className="d-table">
                    <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-content">
                        <span>Your Financial Status Is Good Hands</span>
                        <h1>Our Company Provide Best Financial Solutions</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do e et dolore magna aliqua. Quis ipsum suspendisse
                            ultrices gravida. Risus commodo{" "}
                        </p>
                        <div className="banner-btn-area">
                            <a className="banner-btn common-btn" href="apply.html">
                            Get Started
                            <span></span>
                            </a>
                            <a className="common-btn" href="contact.html">
                            Contact Us
                            <span></span>
                            </a>
                        </div>
                        </div>
                        <div className="banner-slider-img">
                        <img src="images/banner/banner-main2.png" alt="Banner" />
                        </div>
                    </div>
                    </div>
        </div>
    </div>
   
    
</OwlCarousel>;
    </>)
}