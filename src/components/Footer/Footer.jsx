import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarker, FaPhone } from 'react-icons/fa'
import { MdArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6">
                        <h1 className="fw-bold text-light-primary mb-4"><span className="text-light-primary">Farm</span>Star</h1>
                        <p>Welcome to FarmStar, your premier source for organic produce and sustainable farming practices.
                            Join us in our mission to cultivate healthy communities through responsible agriculture.</p>
                        <div className="d-flex pt-2">
                            <Link className="btn btn-square btn-outline-light rounded-circle me-1" to="https://www.facebook.com/people/Asgar-Ali-Bhura/pfbid02DHzYyHs3RvXdVXrTauqNn5FctRQsBupmcKNduhfPFMyt2Ny81JeBjDd147j7HkFVl/?mibextid=ZbWKwL">
                                <FaFacebook className='fa-facebook-f' /></Link>
                            <Link className="btn btn-square btn-outline-light rounded-circle me-0" to="https://www.instagram.com/farm_star_services?igsh=MTNxMDI3NWV4cGZzMA%3D%3D">
                                <FaInstagram className='fa-instagram' /></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h4 className="text-light mb-4">Address</h4>
                        <p><FaMapMarker className='me-1' />Rasulpur ,Sidhpur ,Patan ,Gujarat - 384290</p>
                        <p><FaPhone className='me-1' /><Link to="tel:+919601510530">+91 96015 10530</Link></p>
                        <p><FaEnvelope className='me-1' /><Link to="mailto:farmstar530@gmail.com">farmstar530@gmail.com</Link></p>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h4 className="text-light mb-4">Quick Links</h4>
                        <Link className="btn btn-link" to="/"><MdArrowRight className='me-0' /> Home</Link>
                        <Link className="btn btn-link" to="/product"><MdArrowRight className='me-0' /> Products</Link>
                        <Link className="btn btn-link" to="/about"><MdArrowRight className='me-0' /> About Us</Link>
                        <Link className="btn btn-link" to="/contact"><MdArrowRight className='me-0' /> Contact Us</Link>
                    </div>
                </div>
            </div>
            <div className="container-fluid copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <Link to="#">FARMSTAR</Link>, All Rights Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            Designed By & Developed By <Link to="https://www.linkedin.com/in/kasimkkn/">MR-KK</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer