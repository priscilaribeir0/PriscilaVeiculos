import React from 'react';

const CarCard = ({ car }) => {
  const handleContato = () => {
    alert(`Interessado no ${car.nome}! Entre em contato.`);
  };

  return (
    <div className="cartao-carro">
      <div className="imagem-carro">
        <img 
          src={`imagens/${car.imagens[0]}`} 
          alt={car.nome}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x200/4A5568/FFFFFF?text=Imagem+do+Carro';
          }}
        />
      </div>
      
      <div className="info-carro">
        <h3>{car.nome}</h3>
        <p className="especificacoes">
          {car.marca} • {car.ano} • {car.cambio}
        </p>
        <p className="preco">
          R$ {car.preco.toLocaleString('pt-BR')}
        </p>
        
        <div className="caracteristicas">
          <span>{car.combustivel}</span>
          <span>{car.portas} portas</span>
          <span>{car.categoria}</span>
        </div>
        
        <button className="botao-contato" onClick={handleContato}>
          Tenho Interesse
        </button>
      </div>
    </div>
  );
};

export default CarCard;