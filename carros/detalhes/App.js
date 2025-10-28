import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import './styles/Catalog.css'; // Importamos os estilos
import carsData from './data/cars.json'; // Importamos os dados

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Rota para o catálogo - passamos os carros como prop */}
          <Route 
            path="/" 
            element={<Catalog cars={carsData.carros} />} 
          />
          <Route 
            path="/catalog" 
            element={<Catalog cars={carsData.carros} />} 
          />
          {/* Adicionaremos outras rotas depois */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;