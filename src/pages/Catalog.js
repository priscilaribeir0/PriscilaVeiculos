import React from 'react';
import CarCard from '../components/CarCard';

const Catalog = ({ cars }) => {
  console.log('Catalog recebeu:', cars); // ← ADICIONE ESTA LINHA
  
  if (!cars || cars.length === 0) {
    return <div>Nenhum carro encontrado</div>; // ← MENSAGEM DE FALBACK
  }

  return (
    <div className="catalogo-carros">
      <header className="cabecalho-catalogo">
        <h2>Nossa Frota</h2>
        <p>Encontre o carro perfeito para você</p>
      </header>

      <div className="grade-carros">
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;