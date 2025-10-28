import React from 'react';

const CarDetails = ({ car }) => {
  return (
    <div className="car-details">
      <h1>{car.nome}</h1>
      <div className="car-images">
        {car.imagens.map((img, index) => (
          <img key={index} src={`/images/${img}`} alt={`${car.nome} ${index + 1}`} />
        ))}
      </div>
      {/* Restante dos detalhes */}
    </div>
  );
};

export default CarDetails;