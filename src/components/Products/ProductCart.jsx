import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import CustomerModal from '../CustomerModal/CustomerModal';
const ProductCart = ({ searchItem, sortItem }) => {
    const [showModal, setShowModal] = useState(false);
    const handleBuyNow = () => {
        setShowModal(true);
    };
    const filteredAndSortedProducts = useMemo(() => {
        let result = products.filter((product) =>
            product.name.toLowerCase().includes(searchItem.toLowerCase())
        );

        if (sortItem === 'lowToHigh') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortItem === 'highToLow') {
            result.sort((a, b) => b.price - a.price);
        }

        return result;
    }, [searchItem, sortItem]);

    return (
        <div id="product-list" className="product-list row g-2">
            {filteredAndSortedProducts.map((product, index) => {
                const whatsappMessage = `Hi, I'm interested in the product ${product.name} priced at ${product.price}.`;
                const whatsappLink = `https://wa.me/+919601510530?text=${encodeURIComponent(whatsappMessage)}`;
                return (
                    <div
                        className="product-item"
                        style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                        key={index}>
                        <div className="position-relative bg-light overflow-hidden">
                            <img src={product.imgSrc} alt={product.name} className="product-img" />
                            <div className="badge bg-secondary text-white position-absolute start-0 top-0 m-0 py-1 px-3">New</div>
                        </div>
                        <div className="text-center p-4">
                            <Link className="d-block h5 mb-2" to="#">{product.name}</Link>
                            <span className="text-primary me-1">₹{product.price}</span>
                            <span className="text-body text-decoration-line-through">₹{product.oldPrice}</span>
                        </div>
                        <div className="d-flex">
                            <small className="w-50 text-center bg-primary py-2">
                                <Link className="link-primary" to={whatsappLink} target="_blank" rel="noopener noreferrer">Contact us</Link>
                            </small>
                            <small className="w-50 text-center py-2">
                                <button onClick={handleBuyNow} className="border-0 bg-white buynow" >Buy Now</button>
                            </small>
                        </div>
                        <CustomerModal showModal={showModal} itemDetails={product} setShowModal={setShowModal} />

                    </div>
                );
            })}
        </div>
    );
};

export default ProductCart;
