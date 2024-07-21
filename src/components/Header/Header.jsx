import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/Logo.png'
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarker } from "react-icons/fa";

const Header = () => {
  return (
    <div className="container-fluid bg-white fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
            <div className="col-lg-6 px-5 text-start">
                <small>
                    <FaMapMarker className='me-2'/>
                    Rasulpur ,Patan ,Gujarat - 384290</small>
                <small className="ms-4">
                    <FaEnvelope className='me-2'/>
                    <Link to="mailto:farmstar530@gmail.com">farmstar530@gmail.com</Link>
                    </small>
            </div>
            <div className="col-lg-6 px-5 text-end">
                <span>Follow us:</span>
                <Link className="text-body ms-3" to=""><FaFacebook className='me-2 fa-facebook-f'/></Link>
                <Link className="text-body ms-3" to=""><FaInstagram className='me-2 fa-instagram'/></Link>
            </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <Link to="/" className="navbar-brand ms-4 ms-lg-0" style={{width: '170px'}}>
                <img src={logo} alt="Logo" className="w-100 h-100 object-fit-cover" />
            </Link>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <Link to="/" className="nav-item nav-link active">Home</Link>
                    <Link to="/product" className="nav-item nav-link">Products</Link>
                    <Link to="/about" className="nav-item nav-link">About Us</Link>
                    <Link to="/contact" className="nav-item nav-link">Contact Us</Link>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header