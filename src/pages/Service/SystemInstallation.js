import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import BannerHero from '@/components/BannerHero';
import { Footer } from '@/components/Footer';
import SectionCta from '@/components/SectionCta';
import bg from '@/assets/service/instalacao.jpg';
import Cards from '@/components/Cards';
import styles from './SystemInstallation.module.css';
import one from '@/assets/service/instalacao/one.jpg';
import two from '@/assets/service/instalacao/two.jpg';
import three from '@/assets/service/instalacao/thre.jpg';
import four from '@/assets/service/instalacao/four.jpg';
import five from '@/assets/service/instalacao/five.jpg';
import six from '@/assets/service/instalacao/six.jpg';
import { LampWallUp, Flame, Shield } from 'lucide-react';
export function SystemInstallation() {
    const cards = [
        {
            image: one,
            icon: LampWallUp,
            title: 'Rede de hidrantes e mangotinhos',
            description: 'Projetamos e instalamos redes de hidrantes e mangotinhos, assegurando eficiência no combate a incêndios.'
        },
        {
            image: four,
            icon: Flame,
            title: 'Sistema de sprinklers automáticos',
            description: 'Projetamos e instalamos sistemas de sprinklers automáticos para uma resposta rápida e eficiente contra incêndios.'
        },
        {
            image: three,
            icon: Shield,
            title: 'Sistema de detecção e alarme de incêndio',
            description: 'Implementamos sistemas de detecção e alarme de incêndio para identificação rápida e evacuação segura.'
        },
        {
            image: six,
            icon: Shield,
            title: 'Bombas de incêndio e casa de bombas',
            description: 'Fornecemos e instalamos bombas de incêndio e casas de bombas para garantir pressão e fluxo adequados no combate a incêndios.'
        },
        {
            image: five,
            icon: Shield,
            title: 'Rede de tubulação para gases extintores',
            description: '(CO₂, FM-200, etc.)'
        },
        {
            image: two,
            icon: Shield,
            title: 'Sistema de espuma para combate a incêndios químicos',
            description: 'Instalamos sistemas de espuma para combate a incêndios químicos, garantindo maior eficácia na contenção de riscos.'
        }
    ];
    return (_jsxs(_Fragment, { children: [_jsx(BannerHero, { title: "Instala\u00E7\u00E3o Precisa para Seguran\u00E7a Inabal\u00E1vel", description: "Contamos com uma equipe altamente qualificada para instalar sistemas modernos de combate a inc\u00EAndios, garantindo m\u00E1xima prote\u00E7\u00E3o e efici\u00EAncia operacional.", hat: "Preven\u00E7\u00E3o \u00E9 a chave", backgroundImage: bg, ctaLabel: "Solicitar Instala\u00E7\u00E3o", ctaLink: "/contato" }), _jsxs("div", { className: styles.servicesInclude, children: [_jsx("h1", { children: "SERVI\u00C7OS INCLUSOS" }), _jsx("div", { className: styles.serviceCards, children: cards.map((card, index) => (_jsx(Cards, { image: card.image, icon: card.icon, title: card.title, description: card.description }, index))) })] }), _jsx(SectionCta, {}), _jsx(Footer, {})] }));
}
