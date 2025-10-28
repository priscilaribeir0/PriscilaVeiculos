import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Conecta com a div do SEU site
const container = document.getElementById('carros-react');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}