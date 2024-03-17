import React from 'react';
import css from "./Testimonial.module.css";
import Hero from "../../assests/testimonialHero.png"

import {TestimonialsData} from "../../Data/testimonial.js"
import { SwiperSlide,  Swiper } from 'swiper/react';

const Testimonial = () => {
  return (
    <div className={css.testimonials}>
    <div className={css.wrapper}>
    <div className={css.container}>
    <span>Top Rated</span>
        <span>Seedly say has suitable disposal and boy . Exercise joy man children rejoiced .</span>
    </div>
    
      <img src={Hero} alt='' />
      <div className={css.container}>
        <span>100k</span>
        <span>Happy Customer with us</span>
      </div>
    </div>

    <div className={css.reviews}>Reviews</div>

    <div className={css.carousal}>
        <Swiper
        
        
        breakpoints={{
          886:{
            slidesPerView:3
          },
          
          640:{
            slidesPerView:2
        },

        0:{
          slidesPerView:1
        }
        }
        }

        slidesPerView ={3}
        slidesPerGroup={1}
        spaceBetween={25}
        
          
        >
        {
        TestimonialsData.map((testimonial, i) => (
            <SwiperSlide
           
            >
            <div className={css.testimonial}>
                <img src={testimonial.image} alt='' />
                <span>{testimonial.Comment}</span>
                <hr/>
                <span>{testimonial.name}</span>
                </div>
                </SwiperSlide>
        ))
        }

          

    </Swiper>
        
    </div>
    </div>
  )
}

export default Testimonial
