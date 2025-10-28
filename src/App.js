import React from 'react';
import Catalog from './pages/Catalog';
import carsData from './data/cars.json';
import './styles/Catalog.css';

function App() {
  console.log('Dados dos carros:', carsData); // ← ADICIONE ESTA LINHA
  
  return (
    <div className="secao-carros-react">
      <Catalog cars={carsData.carros} />
    </div>
  );
}

export default App;
