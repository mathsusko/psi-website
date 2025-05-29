import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styles from './WhoWeAre.module.css';
import cardOne from '@/assets/whoweare/one.jpg';
import cardTwo from '@/assets/whoweare/two.jpg';
import { AccordionDemo } from '@/components/AccordionDemo';
import ClientCarousel from '@/components/ClientCarousel';
import four from '@/assets/whoweare/four.jpg';
import five from '@/assets/whoweare/five.jpg';
import six from '@/assets/whoweare/six.jpg';
import { Flame, Shield } from 'lucide-react';
import Cards from '@/components/Cards';
import SectionCta from '@/components/SectionCta';
import { Footer } from '@/components/Footer';
export function WhoWeAre() {
    const cards = [
        {
            image: six,
            icon: Flame,
            title: 'Suporte técnico especializado 24/7'
            // description:
            //   'Realizamos testes de pressurização e estanqueidade para garantir a eficiência e segurança dos sistemas de combate a incêndios.'
        },
        {
            image: five,
            icon: Shield,
            title: 'Planos de manutenção preventiva e corretiva'
            // description:
            //   'Oferecemos serviços de inspeção e manutenção de bombas e reservatórios, assegurando o funcionamento contínuo e seguro dos sistemas de combate a incêndios.'
        },
        {
            image: four,
            icon: Shield,
            title: 'Consultoria para certificação e adequação às normas'
            // description:
            //   'Realizamos limpeza e substituição de componentes, garantindo o bom funcionamento e a longevidade dos sistemas de prevenção contra incêndios.'
        }
    ];
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: styles.hero, children: [_jsx("div", { className: styles.heroOverlay }), _jsxs("div", { className: styles.heroContent, children: [_jsx("span", { className: styles.hat, children: _jsx("p", { children: "Compromisso com a seguran\u00E7a. Excel\u00EAncia na execu\u00E7\u00E3o" }) }), _jsxs("div", { className: styles.title, children: [_jsx("h1", { children: "Protegendo Vidas e Patrim\u00F4nios com Excel\u00EAncia" }), _jsx("p", { children: "Com 14 anos de experi\u00EAncia, a PSI Previnc\u00EAndio \u00E9 refer\u00EAncia na instala\u00E7\u00E3o de sistemas hidr\u00E1ulicos para combate a inc\u00EAndios. Nossa miss\u00E3o \u00E9 garantir seguran\u00E7a m\u00E1xima para empresas, ind\u00FAstrias e edifica\u00E7\u00F5es comerciais, sempre em conformidade com as normas t\u00E9cnicas mais rigorosas." })] }), _jsx("div", { children: _jsx("a", { href: "/contact", className: styles.ctaButton, children: "Solicitar Or\u00E7amento" }) })] })] }), _jsxs("div", { className: styles.story, children: [_jsxs("div", { className: styles.head, children: [_jsx("div", { className: styles.hat, children: _jsx("span", { children: "Uma hist\u00F3ria de compromisso e inova\u00E7\u00E3o" }) }), _jsxs("div", { className: styles.title, children: [_jsx("h1", { children: "Nossa Jornada Rumo \u00E0 Excel\u00EAncia" }), _jsx("p", { children: "Fundada h\u00E1 14 anos, a PSI Previnc\u00EAndio nasceu com o prop\u00F3sito de oferecer solu\u00E7\u00F5es seguras e eficientes no combate a inc\u00EAndios. Desde ent\u00E3o, crescemos, expandimos nossa atua\u00E7\u00E3o e conquistamos a confian\u00E7a de grandes empresas e ind\u00FAstrias." })] })] }), _jsxs("div", { className: styles.cards, children: [_jsxs("div", { className: styles.card, children: [_jsx("img", { src: cardOne, alt: "" }), _jsx("div", { className: styles.desc, children: _jsx("p", { children: "Ao longo dos anos, investimos em tecnologia, capacita\u00E7\u00E3o e inova\u00E7\u00E3o para entregar projetos personalizados e servi\u00E7os de alto padr\u00E3o." }) })] }), _jsxs("div", { className: styles.card, children: [_jsx("img", { src: cardTwo, alt: "" }), _jsx("div", { className: styles.desc, children: _jsx("p", { children: "Nossa equipe de engenheiros e t\u00E9cnicos especializados atua com responsabilidade e precis\u00E3o, garantindo total conformidade com as normas vigentes." }) })] })] })] }), _jsx("div", { className: styles.faq, children: _jsxs("div", { className: styles.body, children: [_jsxs("div", { className: styles.esq, children: [_jsx("div", { className: styles.hatFaq, children: _jsx("span", { children: "Uma hist\u00F3ria de compromisso e inova\u00E7\u00E3o" }) }), _jsxs("div", { className: styles.faqTitle, children: [_jsx("h1", { children: "O Que Nos Torna Diferentes?" }), _jsx("p", { children: "Fundada h\u00E1 14 anos, a PSI Previnc\u00EAndio nasceu com o prop\u00F3sito de oferecer solu\u00E7\u00F5es seguras e eficientes no combate a inc\u00EAndios. Desde ent\u00E3o, crescemos, expandimos nossa atua\u00E7\u00E3o e conquistamos a confian\u00E7a de grandes empresas e ind\u00FAstrias." })] })] }), _jsx("div", { className: styles.dir, children: _jsx(AccordionDemo, {}) })] }) }), _jsxs("div", { className: styles.storyy, children: [_jsxs("div", { className: styles.headd, children: [_jsx("div", { className: styles.hatt, children: _jsx("span", { children: "Seu patrim\u00F4nio protegido hoje e sempre" }) }), _jsxs("div", { className: styles.titlee, children: [_jsx("h1", { children: "Grandes Projetos, Grandes Parcerias" }), _jsx("p", { children: "A confian\u00E7a de grandes empresas refor\u00E7a nosso compromisso com a excel\u00EAncia. Atendemos clientes dos mais diversos setores, sempre entregando solu\u00E7\u00F5es personalizadas e eficientes." })] })] }), _jsx(ClientCarousel, {})] }), _jsxs("div", { className: styles.servicesInclude, children: [_jsxs("div", { className: styles.security, children: [_jsxs("h1", { children: ["Seguran\u00E7a Al\u00E9m ", _jsx("br", {}), "da Instala\u00E7\u00E3o"] }), _jsxs("p", { children: ["Na PSI Previnc\u00EAndio, acreditamos que seguran\u00E7a n\u00E3o \u00E9 apenas um servi\u00E7o, ", _jsx("br", {}), " mas um compromisso cont\u00EDnuo. Por isso, oferecemos:"] })] }), _jsx("div", { className: styles.serviceCards, children: cards.map((card, index) => (_jsx(Cards, { image: card.image, icon: card.icon, title: card.title }, index))) }), _jsx("div", { children: _jsxs("p", { children: ["Nosso objetivo \u00E9 garantir que seu sistema contra inc\u00EAndios ", _jsx("br", {}), " esteja sempre pronto para agir quando necess\u00E1rio."] }) })] }), _jsx(SectionCta, {}), _jsx(Footer, {})] }));
}
