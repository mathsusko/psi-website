import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SectionCta from '@/components/SectionCta';
import { Footer } from '@/components/Footer';
import ClientCarousel from '@/components/ClientCarousel';
import styles from './Cliente.module.css';
import logo from '@/assets/clients/elogo.png';
export function Clients() {
    return (_jsxs("div", { className: styles.bg, children: [_jsxs("div", { className: styles.container, children: [_jsxs("div", { className: styles.dir, children: [_jsx("div", { className: styles.hat, children: _jsx("span", { children: "Nossos Clientes" }) }), _jsx("div", { className: styles.title, children: _jsx("h1", { children: "Empresas Que Confiaram na Nossa Expertise" }) }), _jsx("div", { className: styles.description, children: "Ao longo de 14 anos, ajudamos diversas ind\u00FAstrias, com\u00E9rcios e empreendimentos a garantirem seguran\u00E7a com solu\u00E7\u00F5es eficazes e certificadas." })] }), _jsx("div", { className: styles.esq, children: _jsx("img", { src: logo, alt: "Logo de um dos clientes atendidos" }) })] }), _jsx(ClientCarousel, {}), _jsx(SectionCta, {}), _jsx(Footer, {})] }));
}
