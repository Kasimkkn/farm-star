import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCart from '../components/Products/ProductCart'

const Product = () => {
    const [searchItem, setSearchItem] = useState('')
    const [sortItem, setSortItem] = useState('')

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
            <div className="row px-3 g-2">
                <div className="col-lg-6">
                <input type="text" onChange={(e) => setSearchItem(e.target.value)} className="product-search py-3 " placeholder="Search for products" />
                </div>
                <div className="col-lg-4">
                <select onChange={(e) => setSortItem(e.target.value)} name="priceSort" id="priceSort" className='product-sort py-3 '>
                    <option value="0">select price</option>
                    <option value="lowToHigh">Low to High</option>
                    <option value="highToLow">High to Low</option>
                </select>
                </div>
            </div>
            <div className="container">
                <ProductCart searchItem={searchItem} sortItem={sortItem}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product