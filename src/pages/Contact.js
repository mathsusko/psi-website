import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// src/pages/Contact.tsx ou src/components/Contact.tsx
import styles from './Contact.module.css';
import { Footer } from '@/components/Footer';
import SectionCta from '@/components/SectionCta';
import { ContactForm } from '@/components/ContactForm';
export function Contact() {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: styles.bg, children: [_jsxs("div", { className: styles.container, children: [_jsxs("div", { className: styles.dir, children: [_jsx("div", { className: styles.hat, children: _jsx("span", { children: "Entrem em contato" }) }), _jsx("div", { className: styles.title, children: _jsx("h1", { children: "Entre em Contato com a PSI Previnc\u00EAndio" }) }), _jsxs("div", { className: styles.description, children: ["Precisa de um or\u00E7amento ou tem d\u00FAvidas sobre nossos servi\u00E7os? ", _jsx("br", {}), "Nossa equipe est\u00E1 pronta para atender voc\u00EA."] })] }), _jsx("div", { className: styles.esq, children: _jsx(ContactForm, {}) })] }), _jsx(SectionCta, {}), _jsx(Footer, {})] }) }));
}
