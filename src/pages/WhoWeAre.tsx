import styles from './WhoWeAre.module.css';
import cardOne from '@/assets/whoweare/one.jpg';
import cardTwo from '@/assets/whoweare/two.jpg';
import { AccordionDemo } from '@/components/AccordionDemo';
// import ClientCarousel from '@/components/ClientCarousel';
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

  return (
    <>
      {/* banner hero */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.hat}>
            <p>Compromisso com a segurança. Excelência na execução</p>
          </span>
          <div className={styles.title}>
            <h1>Protegendo Vidas e Patrimônios com Excelência</h1>
            <p>
              Com 14 anos de experiência, a PSI Previncêndio é referência na instalação de sistemas
              hidráulicos para combate a incêndios. Nossa missão é garantir segurança máxima para
              empresas, indústrias e edificações comerciais, sempre em conformidade com as normas
              técnicas mais rigorosas.
            </p>
          </div>
          <div>
            <a href="https://wa.me/5541997430276" className={styles.ctaButton} target="_blank">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>

      <div className={styles.story}>
        <div className={styles.head}>
          <div className={styles.hat}>
            <span>Uma história de compromisso e inovação</span>
          </div>
          <div className={styles.title}>
            <h1>Nossa Jornada Rumo à Excelência</h1>

            <p>
              Fundada há 14 anos, a PSI Previncêndio nasceu com o propósito de oferecer soluções
              seguras e eficientes no combate a incêndios. Desde então, crescemos, expandimos nossa
              atuação e conquistamos a confiança de grandes empresas e indústrias.
            </p>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={cardOne} alt="" />
            <div className={styles.desc}>
              <p>
                Ao longo dos anos, investimos em tecnologia, capacitação e inovação para entregar
                projetos personalizados e serviços de alto padrão.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img src={cardTwo} alt="" />
            <div className={styles.desc}>
              <p>
                Nossa equipe de engenheiros e técnicos especializados atua com responsabilidade e
                precisão, garantindo total conformidade com as normas vigentes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.faq}>
        <div className={styles.body}>
          <div className={styles.esq}>
            <div className={styles.hatFaq}>
              <span>Uma história de compromisso e inovação</span>
            </div>
            <div className={styles.faqTitle}>
              <h1>O Que Nos Torna Diferentes?</h1>
              <p>
                Fundada há 14 anos, a PSI Previncêndio nasceu com o propósito de oferecer soluções
                seguras e eficientes no combate a incêndios. Desde então, crescemos, expandimos
                nossa atuação e conquistamos a confiança de grandes empresas e indústrias.
              </p>
            </div>
          </div>
          <div className={styles.dir}>
            <AccordionDemo />
          </div>
        </div>
      </div>

      {/* <div className={styles.storyy}>
        <div className={styles.headd}>
          <div className={styles.hatt}>
            <span>Seu patrimônio protegido hoje e sempre</span>
          </div>
          <div className={styles.titlee}>
            <h1>Grandes Projetos, Grandes Parcerias</h1>

            <p>
              A confiança de grandes empresas reforça nosso compromisso com a excelência. Atendemos
              clientes dos mais diversos setores, sempre entregando soluções personalizadas e
              eficientes.
            </p>
          </div>
        </div>
        <ClientCarousel />
      </div> */}

      <div className={styles.servicesInclude}>
        <div className={styles.security}>
          <h1>
            Segurança Além <br />
            da Instalação
          </h1>
          <p>
            Na PSI Previncêndio, acreditamos que segurança não é apenas um serviço, <br /> mas um
            compromisso contínuo. Por isso, oferecemos:
          </p>
        </div>
        <div className={styles.serviceCards}>
          {cards.map((card, index) => (
            <Cards
              key={index}
              image={card.image}
              icon={card.icon}
              title={card.title}
              // description={card.description}
            />
          ))}
        </div>
        <div>
          <p>
            Nosso objetivo é garantir que seu sistema contra incêndios <br /> esteja sempre pronto
            para agir quando necessário.
          </p>
        </div>
      </div>

      <SectionCta />
      <Footer />
    </>
  );
}
