import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';


export default function Testimonial (){
    return (<>
      <section className="testimonials-area pt-100">
          <div className="container">
            <div className="section-title">
              <span className="sub-title">Testimonials</span>
              <h2>What Our Clients Says</h2>
            </div>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={40}
                slidesPerView={2}
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
                      slidesPerView: 2,
                    },
                  }}
                                                   
            >
                <SwiperSlide>  
                <div class="testimonials-item">
                            <div class="top">
                                <i class='bx bxs-quote-alt-left bx-flip-horizontal'></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacufacilisis.</p>
                            </div>
                            <div class="bottom">
                                <h3>Aliza Trupa</h3>
                                <span>CEO of Finance & Banking</span>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="testimonials-item">
                            <div class="top">
                                <i class='bx bxs-quote-alt-left bx-flip-horizontal'></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacufacilisis.</p>
                            </div>
                            <div class="bottom">
                                <h3>Aliza Trupa</h3>
                                <span>CEO of Finance & Banking</span>
                            </div>
                        </div>
                </SwiperSlide>
                


            </Swiper>
          </div>
        </section>
    </>)
}