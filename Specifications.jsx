import React from 'react';
import '../styles/Specifications.css';

function Specifications({ specs }) {
  const specsList = [
    { label: 'Processor', value: specs.processor, icon: 'fas fa-microchip' },
    { label: 'RAM', value: specs.ram, icon: 'fas fa-memory' },
    { label: 'Storage', value: specs.storage, icon: 'fas fa-hard-drive' },
    { label: 'Graphics', value: specs.graphics, icon: 'fas fa-video' },
    { label: 'Display', value: specs.display, icon: 'fas fa-laptop' },
    { label: 'Battery', value: specs.battery, icon: 'fas fa-battery-full' },
    { label: 'Condition', value: specs.condition, icon: 'fas fa-check-circle' },
  ];

  return (
    <div className="specifications">
      <h2 className="specs-title">
        <i className="fas fa-list"></i>
        Specifications
      </h2>
      <div className="specs-grid">
        {specsList.map((spec, index) => (
          <div key={index} className="spec-item">
            <div className="spec-icon">
              <i className={spec.icon}></i>
            </div>
            <div className="spec-content">
              <p className="spec-label">{spec.label}</p>
              <p className="spec-value">{spec.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Specifications;