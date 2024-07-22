import React, { useMemo } from 'react';
import p1 from '../../img/honey-1.jpg';
import p2 from '../../img/lithch-honey.jpg';
import p3 from '../../img/wild-honey.jpg';
import p4 from '../../img/Ghee.png';
import p5 from '../../img/desi-khand.jpg';
import p6 from '../../img/rock-salt.jpg';
import p7 from '../../img/Jaggery.png';
import { Link } from 'react-router-dom';

const products = [
    { name: 'Muliflora Honey', price: 1119.00, oldPrice: 2229.00, imgSrc: p1 },
    { name: 'Litchi Honey', price: 1119.00, oldPrice: 2229.00, imgSrc: p2 },
    { name: 'Wild Honey', price: 1119.00, oldPrice: 2229.00, imgSrc: p3 },
    { name: 'Desi Ghee', price: 1119.00, oldPrice: 2229.00, imgSrc: p4 },
    { name: 'Desi Khand', price: 90.00, oldPrice: 129.00, imgSrc: p5 },
    { name: 'Rock Salt', price: 219.00, oldPrice: 229.00, imgSrc: p6 },
    { name: 'Fresh Jaggery', price: 3419.00, oldPrice: 2495.00, imgSrc: p7 }
];

const ProductCart = ({ searchItem, sortItem }) => {
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
                        key={index}
                    >
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
                                <Link className="text-white contact-us" to={whatsappLink} target="_blank" rel="noopener noreferrer">Contact us</Link>
                            </small>
                            <small className="w-50 text-center py-2">
                                <Link className="text-body" to="#">Buy Now</Link>
                            </small>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductCart;
