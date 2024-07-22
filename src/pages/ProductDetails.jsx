import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import CustomerModal from '../components/CustomerModal/CustomerModal';

const ProductDetails = () => {
    const [showModal, setShowModal] = useState(false);
    const handleBuyNow = () => {
        setShowModal(true);
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

                <CustomerModal showModal={showModal} itemDetails={itemDetails} setShowModal={setShowModal} />
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