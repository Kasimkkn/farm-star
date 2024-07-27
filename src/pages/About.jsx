import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import p1 from '../img/honey-1.jpg';
import p2 from '../img/lithch-honey.jpg';
import p3 from '../img/wild-honey.jpg';
import p4 from '../img/Ghee.png';
import p5 from '../img/desi-khand.jpg';
import p6 from '../img/rock-salt.jpg';
import p7 from '../img/Jaggery.png';
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
                    <div className="row g-5 align-items-center justify-content-center overflow-hidden" style={{ height: '50vh' }}>
                        <div className="gallery">
                            {/* {
                                products.map((product) => {
                                    <span style={{ '--i': product.id }}>
                                        <img src={product.imgSrc} alt={product.name} />
                                    </span>
                                })
                            } */}
                            <span style={{ '--i': 1 }}>
                                <img src={p1} alt="" />
                            </span>
                            <span style={{ '--i': 2 }}>
                                <img src={p2} alt="" />
                            </span>
                            <span style={{ '--i': 3 }}>
                                <img src={p3} alt="" />
                            </span>
                            <span style={{ '--i': 4 }}>
                                <img src={p4} alt="" />
                            </span>
                            <span style={{ '--i': 5 }}>
                                <img src={p5} alt="" />
                            </span>
                            <span style={{ '--i': 6 }}>
                                <img src={p6} alt="" />
                            </span>
                            <span style={{ '--i': 7 }}>
                                <img src={p7} alt="" />
                            </span>
                            <span style={{ '--i': 8 }}>
                                <img src={p1} alt="" />
                            </span>
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