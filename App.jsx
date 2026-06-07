import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import LaptopCard from './components/LaptopCard';
import LoadingSkeleton from './components/LoadingSkeleton';

// Import your images
import laptop1 from './images/laptop-1.jpg';
import laptop2 from './images/laptop-2.jpg';
import laptop3 from './images/laptop-3.jpg';

function App() {
  const [laptop, setLaptop] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setLaptop({
        id: 1,
        title: 'HP Stream 14',
        price: 'PKR 99,918.68',
        images: [laptop1, laptop2, laptop3],
        specifications: {
          processor: 'Intel Core i7-1360P',
          ram: '16GB',
          storage: '416GB Storage',
          graphics: 'Intel UHD Graphics',
          display: '13.4" FHD OLED Touch',
          battery: '55Wh (up to 15 hours)',
          condition: 'New',
        },
        seller: {
          name: 'Tech Store Pro',
          location: 'Hyderabad, Sindh, Pakistan',
          rating: 4.8,
          reviews: 342,
          responseTime: '< 1 hour',
          verified: true,
        },
      });
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="App">
      <Header />
      {laptop && <LaptopCard laptop={laptop} />}
    </div>
  );
}

export default App;