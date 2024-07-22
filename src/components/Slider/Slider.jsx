import React, { useState } from 'react';
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import slider1 from '../../img/slider-hon.jpg';
import slider2 from '../../img/slider-ghee.png';
import slider3 from '../../img/slider-jag.jpg';
import slider4 from '../../img/slider-salt.jpg';
import { EffectFade, Autoplay } from 'swiper/modules';
import Typewriter from '../TypeWriter';

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const sliderItems = [
        { img: slider1, title: 'Pure Organic Honey', topic: 'Natural Sweetener', description: 'Our organic honey is harvested from the finest farms, ensuring a rich, natural taste and numerous health benefits. Perfect for sweetening your tea, baking, or enjoying straight from the jar.' },
        { img: slider2, title: 'Desi Ghee', topic: 'Healthy Cooking Fat', description: 'Our ghee is made from the highest quality butter, simmered to perfection. It’s a healthy cooking fat with a rich, nutty flavor, ideal for frying, sautéing, and baking.' },
        { img: slider3, title: 'Pure Jaggery', topic: 'Natural Sweetener', description: 'Our jaggery is a natural sweetener made from sugarcane juice, rich in minerals and free from chemicals. Use it in desserts, beverages, or as a healthy alternative to sugar.' },
        { img: slider4, title: 'Natural Sea Salt', topic: 'Essential Mineral', description: 'Our sea salt is harvested from natural sea beds, containing essential minerals for your body. Use it to enhance the flavor of your dishes and enjoy its numerous health benefits.' }
    ];

    return (
        <div className="container-swipe">
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
                modules={[EffectFade, Autoplay]}
                className="swiper_container"
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {sliderItems.map((item, index) => (
                    <SwiperSlide key={index} className='slide-content'>
                        <img src={item.img} alt={item.title} />
                        <div className="slide-text">
                            {activeIndex === index && <Typewriter tag="h3" speed={80} text={item.title} />}
                            {activeIndex === index && <Typewriter tag="p" speed={10} text={item.description} />}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider;
