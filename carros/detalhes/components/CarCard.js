import React from 'react';

const CarCard = ({ car, onDetailsClick }) => {
  return (
    <div className="car-card">
      <div className="car-image">
        <img 
          src={`/images/${car.imagens[0]}`} 
          alt={car.nome}
          onError={(e) => {
            e.target.src = '/images/placeholder-car.jpg';
          }}
        />
      </div>
      
      <div className="car-info">
        <h3 className="car-name">{car.nome}</h3>
        <p className="car-specs">
          {car.marca} • {car.ano} • {car.cambio}
        </p>
        <p className="car-price">
          R$ {car.preco.toLocaleString('pt-BR')}
        </p>
        
        <div className="car-features">
          <span>{car.combustivel}</span>
          <span>{car.portas} portas</span>
          <span>{car.categoria}</span>
        </div>
        
        <button 
          className="details-btn"
          onClick={() => onDetailsClick(car.id)}
        >
          Ver Detalhes
        </button>
      </div>
    </div>
  );
};

export default CarCard;