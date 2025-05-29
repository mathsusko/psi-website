import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router } from 'react-router-dom';
import './global.css'; // Importando o CSS global
import { Header } from './components/Header'; // Importando o componente de Header
import { AppRoutes } from './Routes'; // Importando o componente de rotas
export function App() {
    return (_jsx(Router, { children: _jsxs("div", { children: [_jsx(Header, {}), _jsx(AppRoutes, {})] }) }));
}
