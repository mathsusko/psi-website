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
      description:
        'Cuidamos de todo o processo para obtenção e renovação do AVCB, garantindo que sua edificação atenda às exigências do Corpo de Bombeiros com segurança e agilidade.'
    },
    {
      image: two,
      icon: Shield,
      title: 'Adequação às normas de segurança contra incêndios',
      description:
        'Garantimos que sua empresa esteja em total conformidade com as normas de segurança contra incêndios, oferecendo soluções técnicas sob medida e dentro das exigências legais.'
    },
    {
      image: one,
      icon: Shield,
      title: 'Laudos técnicos e emissão de ART',
      description:
        'Emitimos laudos técnicos e ART com respaldo profissional, assegurando a validade legal e a conformidade dos sistemas de prevenção e combate a incêndios.'
    }
  ];

  return (
    <>
      <BannerHero
        title="Instalação Precisa para Segurança Inabalável"
        description="Contamos com uma equipe altamente qualificada para instalar sistemas modernos de combate a incêndios, garantindo máxima proteção e eficiência operacional."
        hat="Prevenção é a chave"
        backgroundImage={bg}
        ctaLabel="Solicitar Instalação"
        ctaLink="/contato"
      />
      <div className={styles.servicesInclude}>
        <h1>SERVIÇOS INCLUSOS</h1>
        <div className={styles.serviceCards}>
          {cards.map((card, index) => (
            <Cards
              key={index}
              image={card.image}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      <SectionCta />
      <Footer />
    </>
  );
}
