import React, { useState, useEffect } from 'react';
import './Slider.css';
import slider1 from '../../img/slider-hon.jpg';
import slider2 from '../../img/slider-ghee.jpg';
import slider3 from '../../img/slider-jag.jpg';
import slider4 from '../../img/slider-salt.jpg';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeAutoNext = 5000;

  const sliderItems = [
    { img: slider1, title: 'Pure Organic Honey', topic: 'Natural Sweetener', description: 'Our organic honey is harvested from the finest farms, ensuring a rich, natural taste and numerous health benefits. Perfect for sweetening your tea, baking, or enjoying straight from the jar.' },
    { img: slider2, title: 'Traditional Ghee', topic: 'Healthy Cooking Fat', description: 'Our ghee is made from the highest quality butter, simmered to perfection. It’s a healthy cooking fat with a rich, nutty flavor, ideal for frying, sautéing, and baking.' },
    { img: slider3, title: 'Pure Jaggery', topic: 'Natural Sweetener', description: 'Our jaggery is a natural sweetener made from sugarcane juice, rich in minerals and free from chemicals. Use it in desserts, beverages, or as a healthy alternative to sugar.' },
    { img: slider4, title: 'Natural Sea Salt', topic: 'Essential Mineral', description: 'Our sea salt is harvested from natural sea beds, containing essential minerals for your body. Use it to enhance the flavor of your dishes and enjoy its numerous health benefits.' }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderItems.length) % sliderItems.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, timeAutoNext);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className="carousel">
      <div className="list">
        {sliderItems.map((item, index) => (
          <div className={`item ${index === currentIndex ? 'active' : ''}`} key={index}>
            <img src={item.img} alt={item.title} />
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="topic">{item.topic}</div>
              <div className="des">{item.description}</div>
              <div className="buttons">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button id="prev" onClick={prevSlide}> {"<"} </button>
        <button id="next" onClick={nextSlide}> {">"} </button>
      </div>
    </div>
  );
};

export default Slider;
