import React, { useState } from 'react';
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import slider1 from '../../img/slider-hon.jpg';
import slider2 from '../../img/slider-ghee1.jpg';
import slider3 from '../../img/slider-jag.jpg';
import slider4 from '../../img/slider-salt1.jpg';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {

    const sliderItems = [
        { img: slider1 },
        { img: slider2 },
        {
            img: slider3
        },
        {
            img: slider4
        }
    ];

    return (
        <div className="container-swipe bg-white">
            <Swiper
                autoplay={{
                    delay: 4000,
                    pauseOnMouseEnter: true,
                }}
                effect={'fade'}
                fadeEffect={{ crossFade: true }}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={1}
                speed={2000}
                modules={[EffectFade, Autoplay, Pagination, Navigation]}
                className="swiper_container"
            >
                {sliderItems.map((item, index) => (
                    <SwiperSlide key={index} className='slide-content'>
                        <img src={item.img} alt={item.title} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider;
