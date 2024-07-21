import React from 'react'
import Slider from '../components/Slider/Slider'
import homebg from '../img/home-bg.jpg'
import icon1 from '../img/icon-1.png'
import icon2 from '../img/icon-2.png'
import icon3 from '../img/icon-3.png'
import ProductCart from '../components/Products/ProductCart'
import { FaCheck } from 'react-icons/fa'
const Home = () => {
  return (
    <>
      <Slider/>
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="about-img position-relative overflow-hidden p-5 pe-0">
                        <img className="img-fluid w-100 h-100" style={{borderRadius: '10px'}} src={homebg} alt="Home bg" />
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 className="mb-4" style={{fontSize:'2.4rem'}}>
                        <span style={{color:'var(--primary)',display:'block'}}>Premium Natural Organic</span>  
                        <span style={{color:'black',fontSize:'1.9rem'}}>Honey, Ghee, Jaggery, Salt, </span>
                        <span style={{color:'var(--primary)',fontSize:'2.4rem'}}>&</span>
                        <span style={{color:'black',fontSize:'1.9rem'}}>Brown Sugar</span>
                    </h1>
                    <p className="mb-4">Experience the richness of our organic products, meticulously sourced and crafted to
                        perfection. Our honey, ghee, jaggery, pink or black salt, and brown sugar are all natural,
                        ensuring you enjoy the best quality with every purchase.</p>
                    <p><FaCheck className='text-primary me-3'/>Pure and Authentic Ingredients</p>
                    <p><FaCheck className='text-primary me-3'/>Sourced from Certified Organic Farms</p>
                    <p><FaCheck className='text-primary me-3'/>Perfect for a Healthy Lifestyle</p>
                </div>

            </div>
        </div>
    </div>

    <div className="container-fluid bg-light bg-icon my-5 py-6">
        <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s"
                style={{maxWidth: '500px'}}>
                <h1 className="display-5 mb-3">Our Features</h1>
                <p>Explore the unique features that set us apart, ensuring you receive the highest quality organic
                    produce.</p>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="bg-white text-center h-100 p-4 p-xl-5" style={{borderRadius: '10px'}}>
                        <img className="img-fluid mb-4" src={icon1} alt="Natural Process" />
                        <h4 className="mb-3">Natural Process</h4>
                        <p className="mb-4">Our farming methods follow natural processes, ensuring that all our products are
                            grown without synthetic fertilizers or pesticides.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="bg-white text-center h-100 p-4 p-xl-5" style={{borderRadius: '10px'}}>
                        <img className="img-fluid mb-4" src={icon2} alt="Organic Products" />
                        <h4 className="mb-3">Organic Products</h4>
                        <p className="mb-4">We offer a wide range of organic products that are free from harmful chemicals,
                            providing you with healthy and safe food options.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="bg-white text-center h-100 p-4 p-xl-5" style={{borderRadius:' 10px'}}>
                        <img className="img-fluid mb-4" src={icon3} alt="Biologically Safe" />
                        <h4 className="mb-3">Biologically Safe</h4>
                        <p className="mb-4">Our commitment to biological safety means all our products undergo strict
                            testing to ensure they are safe for consumption.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-0 gx-5 align-items-end">
                <div className="col-lg-6">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:'500px'}}>
                        <h1 className="display-5 mb-3 text-center">Our Products</h1>
                    </div>
                </div>
                <div className="container-fluid">
                    <ProductCart/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home