import React, { useState } from 'react';
import '../styles/ProductImage.css';

function ProductImage({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="product-image-container">
      <div className="main-image">
        <img src={images[currentIndex]} alt="Laptop" />
        <button className="nav-btn prev-btn" onClick={prevImage}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="nav-btn next-btn" onClick={nextImage}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div className="thumbnails">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          >
            <img src={image} alt={`Thumbnail ${index}`} />
          </div>
        ))}
      </div>

      <div className="image-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default ProductImage;