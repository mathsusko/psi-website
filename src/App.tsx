import { BrowserRouter as Router } from 'react-router-dom';
import './global.css';        // Importando o CSS global
import { Header } from './components/Header'; // Importando o componente de Header
import { AppRoutes } from './Routes';  // Importando o componente de rotas

export function App() {
  return (
    <Router>
      <div>
        {/* Componente de Cabeçalho */}
        <Header />

        {/* Componente de Rotas */}
        <AppRoutes />
      </div>
    </Router>
  );
}
