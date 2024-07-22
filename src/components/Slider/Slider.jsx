import React from 'react'
import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slider1 from '../../img/slider-hon.jpg';
import slider2 from '../../img/slider-ghee.png';
import slider3 from '../../img/slider-jag.jpg';
import slider4 from '../../img/slider-salt.jpg';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
const Slider = () => {
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
        delay: 2000,
        pauseOnMouseEnter: true,
      }}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}

      modules={[EffectCoverflow, Autoplay]}
      className="swiper_container"
    >
       {sliderItems.map((item, index) => (
          <SwiperSlide key={index} className='slide-content'>
             <img src={item.img} alt={item.title} />
              <div className="slide-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
          </SwiperSlide>
        ))}
    </Swiper>
  </div>
  )
}

export default Slider