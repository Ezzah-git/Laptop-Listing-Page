import React from 'react';
import ProductImage from './ProductImage';
import Specifications from './Specifications';
import SellerInfo from './SellerInfo';
import '../styles/LaptopCard.css';

function LaptopCard({ laptop }) {
  return (
    <div className="laptop-card">
      <div className="laptop-container">
        <div className="product-section">
          <ProductImage images={laptop.images} />
        </div>

        <div className="details-section">
          <h1 className="laptop-title">
            {/* <i className="fas fa-laptop"></i> */}
            {laptop.title}
          </h1>

          <div className="price-section">
            <div className="price">
              <i className="fas fa-tag"></i>
              {laptop.price}
            </div>
            <span className="price-label">Price</span>
          </div>

          <Specifications specs={laptop.specifications} />

          <SellerInfo seller={laptop.seller} />

          <button className="contact-btn">
            <i className="fas fa-envelope"></i>
            Contact Seller
          </button>
          <button className="call-btn">
            <i className="fas fa-phone"></i>
            Call Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default LaptopCard;