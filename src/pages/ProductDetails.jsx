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
                <div className="quantity">
                    <button className="btn btn-primary" onClick={handleBuyNow}>Buy Now</button>
                </div>

                <CustomerModal showModal={showModal} itemDetails={itemDetails} setShowModal={setShowModal} />
            </div>
        </section>
    );
}

export default ProductDetails;