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
      description:
        'Realizamos testes de pressurização e estanqueidade para garantir a eficiência e segurança dos sistemas de combate a incêndios.'
    },
    {
      image: two,
      icon: Shield,
      title: 'Inspeção e manutenção de  bombas e reservatórios',
      description:
        'Oferecemos serviços de inspeção e manutenção de bombas e reservatórios, assegurando o funcionamento contínuo e seguro dos sistemas de combate a incêndios.'
    },
    {
      image: one,
      icon: Shield,
      title: 'Limpeza e substituição de componentes',
      description:
        'Realizamos limpeza e substituição de componentes, garantindo o bom funcionamento e a longevidade dos sistemas de prevenção contra incêndios.'
    }
  ];

  return (
    <>
      <BannerHero
        title="Manutenção e Testes, tenha Segurança em Dia"
        description="A eficácia de um sistema contra incêndios depende de sua manutenção contínua. Realizamos testes rigorosos e inspeções periódicas para garantir pleno funcionamento."
        hat="Prevenção é a chave para evitar tragédias."
        backgroundImage={bg}
        ctaLabel="Solicitar Manutenção"
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
