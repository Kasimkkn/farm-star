import React from 'react'
import p1 from '../img/honey-1.jpg';
import p2 from '../img/lithch-honey.jpg';
import p3 from '../img/wild-honey.jpg';
import p4 from '../img/Ghee.png';
import p5 from '../img/desi-khand.jpg';
import p6 from '../img/rock-salt.jpg';
import p7 from '../img/Jaggery.png';
import img1 from '../img/gal1.jpg';
import img2 from '../img/gal2.jpg';
import img3 from '../img/gal3.jpg';
import img4 from '../img/gal4.jpg';
import img5 from '../img/gal5.jpg';
import img6 from '../img/gal6.jpg';
const About = () => {

    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
    ];
    return (
        <>
            <div className="container-xxl py-5" style={{ marginTop: "10rem" }}>
                <div className="container">
                    <div className="row g-5 align-items-center justify-content-center overflow-hidden" style={{ height: '50vh' }}>
                        <div className="gallery">
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

            <div className="grid-container">
                {images.map((img, index) => (
                    <div key={index} className="grid-item">
                        <img src={img} alt={`Thumbnail ${index + 1}`} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default About