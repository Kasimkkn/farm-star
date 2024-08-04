import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import qrCode from '../../img/qrcode.jpg';

const QrModal = ({ price, handleCloseModal, handleSubmit }) => {
    return (
        <Modal
            show={true}
            onHide={handleCloseModal}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Pay Now ₹{price}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex justify-content-center flex-column align-items-center '>
                <img src={qrCode} alt="QR Code" className='qr-image' />
                <Button onClick={handleSubmit}>Submit</Button>
            </Modal.Body>
        </Modal>
    );
};

const CustomerModal = ({ itemDetails, showModal, setShowModal }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [country, setCountry] = useState('');
    const [showQrModal, setShowQrModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
        setShowQrModal(false);
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
        setShowQrModal(false);
    };

    const openQrModal = () => {
        setShowQrModal(true);
        // setShowModal(false);
    };

    return (
        <>
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
                        <div className='d-flex flex-column align-items-center product-summary' style={{ backgroundColor: "#eee", borderRadius: "10px", padding: "10px" }}>
                            <div style={{ padding: "10px", width: "200px" }}>
                                <img src={itemDetails.imgSrc} alt={itemDetails.name} style={{ width: "100%", height: "150px", borderRadius: "10px", objectFit: "cover" }} />
                            </div>
                            <h5 className='text-uppercase '>{itemDetails.name}</h5>
                            <h5 className='text-uppercase '>₹{itemDetails.price}</h5>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={openQrModal}>
                        Pay ₹{itemDetails.price}
                    </Button>
                </Modal.Footer>
            </Modal>
            {showQrModal && (
                <QrModal
                    price={itemDetails.price}
                    handleCloseModal={handleCloseModal}
                    handleSubmit={handleSubmit}
                />
            )}
        </>
    );
};

export default CustomerModal;
