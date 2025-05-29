import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './BannerHero.module.css';
export default function BannerHero({ title, description, hat = '', backgroundImage, ctaLabel = 'Solicitar Orçamento', ctaLink = '/contact' }) {
    return (_jsxs("div", { className: styles.hero, style: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }, children: [_jsx("div", { className: styles.heroOverlay }), _jsxs("div", { className: styles.heroContent, children: [hat && (_jsx("span", { className: styles.hat, children: _jsx("p", { children: hat }) })), _jsxs("div", { className: styles.title, children: [_jsx("h1", { children: title }), _jsx("p", { children: description })] }), _jsx("div", { children: _jsx("a", { href: ctaLink, className: styles.ctaButton, children: ctaLabel }) })] })] }));
}
