import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Cards.module.css';
export default function Cards({ image, icon: Icon, title, description }) {
    return (_jsxs("div", { className: styles.card, children: [_jsx("img", { src: image, alt: title }), _jsxs("div", { className: styles.info, children: [_jsxs("div", { className: styles.title, children: [_jsx("div", { className: styles.icon, children: _jsx(Icon, {}) }), _jsx("p", { children: title })] }), description && _jsx("p", { children: description })] })] }));
}
