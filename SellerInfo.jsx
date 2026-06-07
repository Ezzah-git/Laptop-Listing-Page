import React from 'react';
import '../styles/SellerInfo.css';

function SellerInfo({ seller }) {
  return (
    <div className="seller-card">
      <div className="seller-header">
        <div className="seller-avatar">
          <i className="fas fa-user"></i>
        </div>
        <div className="seller-details">
          <h3 className="seller-name">
            {seller.name}
            {seller.verified && (
              <span className="verified-badge">
                <i className="fas fa-check-circle"></i>
                Verified
              </span>
            )}
          </h3>
          <p className="seller-location">
            <i className="fas fa-map-marker-alt"></i>
            {seller.location}
          </p>
        </div>
      </div>

      <div className="seller-stats">
        <div className="stat">
          <span className="stat-label">
            <i className="fas fa-star"></i>
            Rating
          </span>
          <span className="stat-value">
            {seller.rating} ⭐ ({seller.reviews} reviews)
          </span>
        </div>
        <div className="stat">
          <span className="stat-label">
            <i className="fas fa-clock"></i>
            Response Time
          </span>
          <span className="stat-value">{seller.responseTime}</span>
        </div>
      </div>
    </div>
  );
}

export default SellerInfo;