import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const whatsappMessage = `Hi, my name is ${name} 
        email: ${email}.
        subject: ${subject}
        message: ${message}.`;
        const whatsappLink = `https://wa.me/+919601510530?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappLink, '_blank');
    }
  return (
    <>
      <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <h1 className="display-3 mb-3 animated slideInDown">Contact Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><Link className="text-body" to="/">Home</Link></li>

                    <li className="breadcrumb-item text-dark active" aria-current="page">Contact Us</li>
                </ol>
            </nav>
        </div>
    </div>
    <div className="container-xxl py-6">
        <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s"
                style={{maxWidth: '500px'}}>
                <h1 className="display-5 mb-3">Contact Us</h1>
            </div>
            <div className="row g-5 justify-content-center">
                <div className="col-lg-5 col-md-12 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container-xxl px-0 wow fadeIn" data-wow-delay="0.1s" style={{marginBottom: '-6px'}}>
                        <iframe className="w-100" style={{height: '450px'}}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7291.2418077228895!2d72.30188369179642!3d23.973842014074055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c8c9567365dfd%3A0x4596f4afd28589d2!2sRasulpur%2C%20Gujarat%20384290!5e0!3m2!1sen!2sin!4v1720943435957!5m2!1sen!2sin"
                            allowFullScreen loading='lazy' referrerPolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                </div>
                <div className="col-lg-7 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                    <form onSubmit={handleSubmit}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} name='name' className="form-control" id="name" placeholder="Your Name" />
                                    <label htmlFor="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name='email' className="form-control" id="email" placeholder="Your Email"/>
                                    <label htmlFor="email">Your Email</label>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="form-floating">
                                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} name='phone' className="form-control" id="phone" placeholder="Your Phone"/>
                                    <label htmlFor="phone">Your Phone</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} name='subject' className="form-control" id="subject" placeholder="Subject"/>
                                    <label htmlFor="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea name='message' value={message} onChange={(e) => setMessage(e.target.value)} className="form-control" placeholder="Leave a message here" id="message"
                                        style={{height: '150px'}}></textarea>
                                    <label htmlFor="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Send
                                    Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  
    </>
  )
}

export default Contact