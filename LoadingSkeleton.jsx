import React from 'react';
import '../styles/LoadingSkeleton.css';

function LoadingSkeleton() {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-header"></div>
      <div className="skeleton-container">
        <div className="skeleton-image"></div>
        <div className="skeleton-content">
          <div className="skeleton-title"></div>
          <div className="skeleton-price"></div>
          <div className="skeleton-specs">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="skeleton-spec-item"></div>
            ))}
          </div>
          <div className="skeleton-seller"></div>
          <div className="skeleton-buttons">
            <div className="skeleton-btn"></div>
            <div className="skeleton-btn"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingSkeleton;