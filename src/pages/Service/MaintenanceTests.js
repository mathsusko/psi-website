import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Footer } from '@/components/Footer';
import SectionCta from '@/components/SectionCta';
import three from '@/assets/service/maintenance/two.jpg';
import two from '@/assets/service/maintenance/three.jpg';
import one from '@/assets/service/maintenance/one.jpg';
import bg from '@/assets/service/maintenance/bg.jpg';
import styles from './Certification.module.css';
import { Flame, Shield } from 'lucide-react';
import BannerHero from '@/components/BannerHero';
import Cards from '@/components/Cards';
export function MaintenanceTests() {
    const cards = [
        {
            image: three,
            icon: Flame,
            title: 'Testes de pressurização e estanqueidade',
            description: 'Realizamos testes de pressurização e estanqueidade para garantir a eficiência e segurança dos sistemas de combate a incêndios.'
        },
        {
            image: two,
            icon: Shield,
            title: 'Inspeção e manutenção de  bombas e reservatórios',
            description: 'Oferecemos serviços de inspeção e manutenção de bombas e reservatórios, assegurando o funcionamento contínuo e seguro dos sistemas de combate a incêndios.'
        },
        {
            image: one,
            icon: Shield,
            title: 'Limpeza e substituição de componentes',
            description: 'Realizamos limpeza e substituição de componentes, garantindo o bom funcionamento e a longevidade dos sistemas de prevenção contra incêndios.'
        }
    ];
    return (_jsxs(_Fragment, { children: [_jsx(BannerHero, { title: "Manuten\u00E7\u00E3o e Testes, tenha Seguran\u00E7a em Dia", description: "A efic\u00E1cia de um sistema contra inc\u00EAndios depende de sua manuten\u00E7\u00E3o cont\u00EDnua. Realizamos testes rigorosos e inspe\u00E7\u00F5es peri\u00F3dicas para garantir pleno funcionamento.", hat: "Preven\u00E7\u00E3o \u00E9 a chave para evitar trag\u00E9dias.", backgroundImage: bg, ctaLabel: "Solicitar Manuten\u00E7\u00E3o", ctaLink: "/contato" }), _jsxs("div", { className: styles.servicesInclude, children: [_jsx("h1", { children: "SERVI\u00C7OS INCLUSOS" }), _jsx("div", { className: styles.serviceCards, children: cards.map((card, index) => (_jsx(Cards, { image: card.image, icon: card.icon, title: card.title, description: card.description }, index))) })] }), _jsx(SectionCta, {}), _jsx(Footer, {})] }));
}
