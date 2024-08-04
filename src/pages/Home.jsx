import React from 'react'
import homebg from '../img/home-bg.jpg'
import icon1 from '../img/icon-1.png'
import icon2 from '../img/icon-2.png'
import icon3 from '../img/icon-3.png'
import whatsapp from '../img/WhatsApp.svg'
import ProductCart from '../components/Products/ProductCart'
import { FaCheck } from 'react-icons/fa'
import Slider from '../components/Slider/Slider'
import ReviewsSection from './ReviewSection'
const Home = () => {
    const handleWhatClick = () => {
        const whatsappMessage = `Hi, I'm interested in the product.`;
        const whatsappLink = `https://wa.me/+919601510530?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappLink, '_blank');
    }
    return (
        <>
            <Slider />
            <div className="container-xxl py-2">
                <div className="container">
                    <div className='natural-text'>
                        <h1>100% Natural</h1>
                    </div>
                    <div className="container">
                        <ProductCart searchItem={''} sortItem={''} />
                    </div>

                </div>
            </div>

            <div className="container-fluid bg-light bg-icon my-2 py-6">
                <div className="container">
                    <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s"
                        style={{ maxWidth: '500px' }}>
                        <h1 className="display-5 mb-3">Our Features</h1>
                        <p>Explore the unique features that set us apart, ensuring you receive the highest quality organic
                            produce.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="bg-white text-center h-100 p-4 p-xl-5" style={{ borderRadius: '10px' }}>
                                <img className="img-fluid mb-4" src={icon1} alt="Natural Process" />
                                <h4 className="mb-3">Natural Process</h4>
                                <p className="mb-4">Our farming methods follow natural processes, ensuring that all our products are
                                    grown without synthetic fertilizers or pesticides.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="bg-white text-center h-100 p-4 p-xl-5" style={{ borderRadius: '10px' }}>
                                <img className="img-fluid mb-4" src={icon2} alt="Organic Products" />
                                <h4 className="mb-3">Organic Products</h4>
                                <p className="mb-4">We offer a wide range of organic products that are free from harmful chemicals,
                                    providing you with healthy and safe food options.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="bg-white text-center h-100 p-4 p-xl-5" style={{ borderRadius: ' 10px' }}>
                                <img className="img-fluid mb-4" src={icon3} alt="Biologically Safe" />
                                <h4 className="mb-3">Biologically Safe</h4>
                                <p className="mb-4">Our commitment to biological safety means all our products undergo strict
                                    testing to ensure they are safe for consumption.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ReviewsSection />

            <img onClick={handleWhatClick} src={whatsapp} alt="whatsapp" className='whatsapp-icon' />
        </>
    )
}

export default Home