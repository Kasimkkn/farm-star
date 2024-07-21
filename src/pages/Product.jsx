import React from 'react'
import { Link } from 'react-router-dom'
import ProductCart from '../components/Products/ProductCart'

const Product = () => {
  return (
    <>
    <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <h1 className="display-3 mb-3 animated slideInDown">Products</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><Link className="text-body" to="/">Home</Link></li>
                    <li className="breadcrumb-item text-dark active" aria-current="page">Products</li>
                </ol>
            </nav>
        </div>
    </div>
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-0 gx-5 align-items-end">
                <div className="col-lg-6">
                    <div className="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <ProductCart/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product