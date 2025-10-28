import React from 'react';
import { useNavigate } from 'react-router-dom';
import CarCard from '../components/CarCard';

const Catalog = ({ cars }) => {
  const navigate = useNavigate();

  const handleDetailsClick = (carId) => {
    navigate(`/car/${carId}`);
  };

  return (
    <div className="catalog-page">
      <header className="catalog-header">
        <h1>Catálogo de Carros</h1>
        <p>Encontre o carro perfeito para você</p>
      </header>

      <div className="cars-grid">
        {cars.map(car => (
          <CarCard 
            key={car.id}
            car={car}
            onDetailsClick={handleDetailsClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;