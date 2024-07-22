import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Modal, Form } from 'react-bootstrap';
import QRCode from 'qrcode.react';
import { products } from '../data/products';

const ProductDetails = () => {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [country, setCountry] = useState('');

    const handleBuyNow = () => {
        setShowModal(true);
    };

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


    const { id } = useParams();
    const [itemDetails, setItemDetails] = useState(null);

    useEffect(() => {
        const product = products.find(item => item.id == id);
        setItemDetails(product);
    }, [id]);

    if (!itemDetails) {
        return <div>Loading...</div>;
    }

    return (
        <section className="product-container">
            <div className="img-card">
                <img src={itemDetails.imgSrc} alt={itemDetails.name} id="featured-image" />
            </div>
            <div className="product-info">
                <h3>{itemDetails.name}</h3>
                <h5>Price: ₹{itemDetails.price} <del>₹{itemDetails.oldPrice}</del></h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa accusantium, aspernatur provident beatae corporis veniam atque facilis, consequuntur assumenda, vitae dignissimos iste exercitationem dolor eveniet alias eos ullam nesciunt voluptatum.</p>

                <div className="quantity">
                    <button className="btn btn-primary" onClick={handleBuyNow}>Buy Now</button>
                </div>

                <Modal show={showModal} onHide={handleCloseModal} className='customer-modal'>
                    <Modal.Header closeButton>
                        <Modal.Title>Purchase Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className='customer-form'>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="formPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="tel" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="formAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="formCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="Enter your city" value={city} onChange={(e) => setCity(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="formState">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="Enter your state" value={state} onChange={(e) => setState(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="formPincode">
                                <Form.Label>Pincode</Form.Label>
                                <Form.Control type="text" placeholder="Enter your pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="formCountry">
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" placeholder="Enter your country" value={country} onChange={(e) => setCountry(e.target.value)} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        {/* <QRCode value={`https://wa.me/+919601510530?text=${encodeURIComponent(whatsappMessage)}`} /> */}
                        <Button variant="primary" onClick={handleSubmit}>
                            Submit and Pay
                        </Button>
                    </Modal.Footer>
                </Modal>
                <div>
                    <p>Delivery:</p>
                    <p>Free standard shipping on orders over ₹599 before tax, plus free returns.</p>
                    <div className="delivery">
                        <p>TYPE</p> <p>HOW LONG</p> <p>HOW MUCH</p>
                    </div>
                    <hr />
                    <div className="delivery">
                        <p>Standard delivery</p>
                        <p>1-4 business days</p>
                        <p>₹50.50</p>
                    </div>
                    <hr />
                    <div className="delivery">
                        <p>Express delivery</p>
                        <p>1 business day</p>
                        <p>₹39.00</p>
                    </div>
                    <hr />
                    <div className="delivery">
                        <p>Pick up in store</p>
                        <p>1-3 business days</p>
                        <p>Free</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;