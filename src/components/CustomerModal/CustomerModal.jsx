import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import qrCode from '../../img/qrcode.jpg';

const CustomerModal = ({ itemDetails, showModal, setShowModal }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [country, setCountry] = useState('');

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSubmit = () => {
        const whatsappMessage = `
    Hi, my name is ${name} from ${address}.
    I am interested in the product ${itemDetails.name} of ${itemDetails.price}.
    Email: ${email}
    Phone: ${phone}
    
    Address: 
    ${address}
    ${city} - ${state} - ${pincode}
    ${country}
    `;
        const whatsappLink = `https://wa.me/+919601510530?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappLink, '_blank');
        setShowModal(false);
    };

    return (
        <Modal show={showModal} onHide={handleCloseModal} className="customer-modal">
            <Modal.Header closeButton>
                <Modal.Title>Purchase Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="customer-details">
                    <Form className="customer-form">
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Enter your phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formState">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your state"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPincode">
                            <Form.Label>Pincode</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your pincode"
                                value={pincode}
                                onChange={(e) => setPincode(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                    <div className="qr_image">
                        <img src={qrCode} alt="QR Code" />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSubmit}>
                    Submit and Pay
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CustomerModal;