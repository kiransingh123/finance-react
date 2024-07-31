import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function Team (){

    return(<>
     <section className="team-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Expert Team</span>
                    <h2>We Have An Exclusive Team</h2>
                </div>
                <Swiper
                modules={[Autoplay]}
                spaceBetween={40}
                slidesPerView={3}
                autoplay={{ delay: 1000 }}
                loop={true} 
                speed={1200}
                breakpoints={{
                    320: {
                      // width: 576,
                      slidesPerView: 1,
                    },
                    520: {
                        // width: 576,
                        slidesPerView: 1,
                      },
                    768: {
                      // width: 768,
                      slidesPerView: 3,
                    },
                  }}
                                                   
            >
                <SwiperSlide>  
                <div className="team-item">
                        <div className="top">
                            <img src="images/team/team5.jpg" alt="Team" />
                            {/* <ul>
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
                            </ul> */}
                        </div>
                        <div className="bottom">
                            <h3>Sandeep Midha</h3>
                            <span>CEO of Company</span>
                            <img src="images/team/team-shape1.png" alt="Shape" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="team-item">
                        <div className="top">
                            <img src="images/team/team6.jpg" alt="Team" />
                        </div>
                        <div className="bottom">
                            <h3>Nishat Pratap Singh</h3>
                            <span>Director</span>
                            <img src="images/team/team-shape1.png" alt="Shape" />
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                <div className="team-item">
                        <div className="top">
                            <img src="images/team/team4.jpg" alt="Team" />
                        </div>
                        <div className="bottom">
                            <h3>Pooja</h3>
                            <span>Manager</span>
                            <img src="images/team/team-shape1.png" alt="Shape" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="team-item">
                        <div className="top">
                            <img src="images/team/team2.jpg" alt="Team" />
                        </div>
                        <div className="bottom">
                            <h3>Gaurav</h3>
                            <span>Sr. Consultant</span>
                            <img src="images/team/team-shape1.png" alt="Shape" />
                        </div>
                    </div>


                </SwiperSlide>
                


            </Swiper>
            </div>
        </section>
    </>)
}