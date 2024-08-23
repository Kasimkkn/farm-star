import React, { useState } from 'react';
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import slider1 from '../../img/Farm star Honey Slider.jpg';
import slider2 from '../../img/slider-ghee1.jpg';
import slider3 from '../../img/Farm star Desi Jaggery Slider.jpg';
import slider4 from '../../img/Farm star Desi Khand Slider.jpg';
import slider5 from '../../img/rock-slat-slide.jpg';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {

    const sliderItems = [
        { img: slider1 },
        { img: slider2 },
        { img: slider3 },
        { img: slider4 },
        { img: slider5 },
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
                        <img src={item.img} alt={item.title} className='slider-img' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider;
