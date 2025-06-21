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
import seven from '@/assets/service/instalacao/seven.png';
import { LampWallUp, Flame, Shield } from 'lucide-react';

export function SystemInstallation() {
  const cards = [
    {
      image: one,
      icon: LampWallUp,
      title: 'Rede de hidrantes e mangotinhos',
      description:
        'Projetamos e instalamos redes de hidrantes e mangotinhos, assegurando eficiência no combate a incêndios.'
    },
    {
      image: four,
      icon: Flame,
      title: 'Sistema de sprinklers automáticos',
      description:
        'Projetamos e instalamos sistemas de sprinklers automáticos para uma resposta rápida e eficiente contra incêndios.'
    },
    {
      image: three,
      icon: Shield,
      title: 'Sistema de detecção e alarme de incêndio',
      description:
        'Implementamos sistemas de detecção e alarme de incêndio para identificação rápida e evacuação segura.'
    },
    {
      image: six,
      icon: Shield,
      title: 'Bombas de incêndio e casa de bombas',
      description:
        'Fornecemos e instalamos bombas de incêndio e casas de bombas para garantir pressão e fluxo adequados no combate a incêndios.'
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
      description:
        'Instalamos sistemas de espuma para combate a incêndios químicos, garantindo maior eficácia na contenção de riscos.'
    },
    {
      image: seven,
      icon: Shield,
      title: 'SPDA – Sistema de Proteção contra Descargas Atmosféricas',
      description:
        'Projetamos e instalamos para-raios (SPDA) conforme normas técnicas, oferecendo proteção completa para edificações e pessoas contra descargas elétricas, reduzindo riscos e garantindo segurança total.'
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
