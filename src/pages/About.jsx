import React from 'react'

import aboutUs from '../img/about-1.jpeg'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
const About = () => {
  return (
    <>
       <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <h1 className="display-3 mb-3 animated slideInDown">About Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><Link className="text-body" to="/">Home</Link></li>
                    <li className="breadcrumb-item text-dark active" aria-current="page">About Us</li>
                </ol>
            </nav>
        </div>
    </div>

    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="about-img position-relative overflow-hidden p-5 pe-0">
                        <img className="img-fluid w-100" src={aboutUs} alt="About Us"/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 className="display-5 mb-4">Premium Organic Honey, Ghee, Jaggery, Salt, and Brown Sugar</h1>
                    <p className="mb-4">Experience the richness of our organic products, meticulously sourced and crafted to perfection. Our honey, ghee, jaggery, pink or black salt, and brown sugar are all natural, ensuring you enjoy the best quality with every purchase.</p>
                    <p><FaCheck className='text-primary me-3'/>Pure and Authentic Ingredients</p>
                    <p><FaCheck className='text-primary me-3'/>Sourced from Certified Organic Farms</p>
                    <p><FaCheck className='text-primary me-3'/>Perfect for a Healthy Lifestyle</p>
                </div>
                
            </div>
        </div>
    </div>


    <div className="container-fluid bg-white bg-icon mt-5 py-6">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-md-7 wow fadeIn" data-wow-delay="0.1s">
                    <h1 className="display-5 text-primary mb-3">Visit Our Farm</h1>
                    <p className="text-muted mb-0">Experience the beauty and tranquility of our farm. See firsthand how we grow our organic produce and learn about our sustainable farming practices. Our farm is open for visits, and we welcome you to join us for a tour and taste the freshness of our produce.</p>
                </div>
                <div className="col-md-5 text-md-end wow fadeIn" data-wow-delay="0.5s">
                    <a className="btn btn-lg btn-primary rounded-pill py-3 px-5" href="visit.html">Visit Now</a>
                </div>
            </div>
        </div>
    </div>
   
    </>
  )
}

export default About