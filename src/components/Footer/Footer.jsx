import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5">
        <div className="row g-5">
            <div className="col-lg-3 col-md-6">
                <h1 className="fw-bold text-primary mb-4"><span className="text-secondary">Farm</span>Star</h1>
                <p>Welcome to FarmStar, your premier source for organic produce and sustainable farming practices.
                    Join us in our mission to cultivate healthy communities through responsible agriculture.</p>
                <div className="d-flex pt-2">
                    <Link className="btn btn-square btn-outline-light rounded-circle me-1" to="#"><i
                            className="fab fa-facebook-f"></i></Link>
                    <Link className="btn btn-square btn-outline-light rounded-circle me-0" to="#"><i
                            className="fab fa-instagram"></i></Link>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="text-light mb-4">Address</h4>
                <p><i className="fa fa-map-marker-alt me-3"></i>Rasulpur, Gujarat - 384290</p>
                <p><i className="fa fa-phone-alt me-3"></i><Link to="tel:+919601510530">+91 96015 10530</Link></p>
                <p><i className="fa fa-envelope me-3"></i><Link to="mailto:farmstar530@gmail.com">farmstar530@gmail.com</Link></p>
            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="text-light mb-4">Quick Links</h4>
                <Link className="btn btn-link" to="/">Home</Link>
                <Link className="btn btn-link" to="/product">Products</Link>
                <Link className="btn btn-link" to="/about">About Us</Link>
                <Link className="btn btn-link" to="/contact">Contact Us</Link>
            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="text-light mb-4">Newsletter</h4>
                <p>Stay informed with the latest updates and promotions. Subscribe to our newsletter for exclusive
                    offers and farming tips.</p>
                <div className="position-relative mx-auto" style={{maxWidth: '400px'}}>
                    <input className="rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                    <button type="button"
                        className="btn btn-primary py-2 rounded-pill position-absolute top-0 end-0 mt-2 me-2">Sign
                        Up</button>
                </div>
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