import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Footer } from '@/components/Footer';
import SectionCta from '@/components/SectionCta';
import one from '@/assets/service/consulty/one.jpg';
import two from '@/assets/service/consulty/two.jpg';
import three from '@/assets/service/consulty/three.jpg';
import bg from '@/assets/service/consulty/bg.jpg';
import styles from './Certification.module.css';
import { Flame, Shield } from 'lucide-react';
import BannerHero from '@/components/BannerHero';
import Cards from '@/components/Cards';
export function ProjectConsultancy() {
    const cards = [
        {
            image: three,
            icon: Flame,
            title: 'Obtenção e renovação de AVCB',
            description: 'Cuidamos de todo o processo para obtenção e renovação do AVCB, garantindo que sua edificação atenda às exigências do Corpo de Bombeiros com segurança e agilidade.'
        },
        {
            image: two,
            icon: Shield,
            title: 'Adequação às normas de segurança contra incêndios',
            description: 'Garantimos que sua empresa esteja em total conformidade com as normas de segurança contra incêndios, oferecendo soluções técnicas sob medida e dentro das exigências legais.'
        },
        {
            image: one,
            icon: Shield,
            title: 'Laudos técnicos e emissão de ART',
            description: 'Emitimos laudos técnicos e ART com respaldo profissional, assegurando a validade legal e a conformidade dos sistemas de prevenção e combate a incêndios.'
        }
    ];
    return (_jsxs(_Fragment, { children: [_jsx(BannerHero, { title: "Instala\u00E7\u00E3o Precisa para Seguran\u00E7a Inabal\u00E1vel", description: "Contamos com uma equipe altamente qualificada para instalar sistemas modernos de combate a inc\u00EAndios, garantindo m\u00E1xima prote\u00E7\u00E3o e efici\u00EAncia operacional.", hat: "Preven\u00E7\u00E3o \u00E9 a chave", backgroundImage: bg, ctaLabel: "Solicitar Instala\u00E7\u00E3o", ctaLink: "/contato" }), _jsxs("div", { className: styles.servicesInclude, children: [_jsx("h1", { children: "SERVI\u00C7OS INCLUSOS" }), _jsx("div", { className: styles.serviceCards, children: cards.map((card, index) => (_jsx(Cards, { image: card.image, icon: card.icon, title: card.title, description: card.description }, index))) })] }), _jsx(SectionCta, {}), _jsx(Footer, {})] }));
}
