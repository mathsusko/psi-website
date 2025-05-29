import { jsx as _jsx } from "react/jsx-runtime";
import styles from './Button.module.css';
export function Button() {
    return (_jsx("button", { className: styles.button, children: _jsx("a", { href: "#", children: "Entre em contato" }) }));
}
