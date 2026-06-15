import { Link } from 'react-router-dom';
import styles from './Services.module.css';
import imageOne from '../../assets/service/image.jpg';
import imageTwo from '../../assets/service/image-1.jpg';
import imageThree from '../../assets/service/image-2.jpg';
import imageFour from '../../assets/service/image-3.jpg';
import SectionCta from '@/components/SectionCta';
import { Footer } from '@/components/Footer';

const serviceCards = [
  { image: imageOne, title: 'Projeto e Consultoria', to: '/services/project-consultancy' },
  { image: imageTwo, title: 'Instalação de Sistemas', to: '/services/system-installation' },
  { image: imageThree, title: 'Manutenção e Testes', to: '/services/maintenance-tests' },
  { image: imageFour, title: 'Regularização e Certificação', to: '/services/certification' },
];

export function Services() {
  return (
    <>
      {/* banner hero */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.hat}>
            <p>Da consultoria à certificação. Segurança sem falhas</p>
          </span>
          <div className={styles.title}>
            <h1>
              Soluções Completa para <br />
              Prevenção e Combate a Incêndios
            </h1>
            <p>
              Projetamos, instalamos e mantemos sistemas de segurança contra incêndios com máxima
              eficiência e conformidade. Nossa expertise garante proteção total para empresas,
              indústrias e edificações comerciais.
            </p>
          </div>
          <div>
            <a
              href="https://wa.me/5541997430178?text=Ol%C3%A1%20vim%20do%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
              className={styles.ctaButton}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>

      {/* LINKS PARA OUTRAS PÁGINAS */}
      <div className={styles.services}>
        <div className={styles.serviceTitle}>
          <div className="w-fit rounded-full bg-red-600 px-2 py-1">
            <span className="text-xs text-white">Serviços estratégicos para máxima proteção</span>
          </div>

          <h1>NOSSOS SERVIÇOS ESPECIALIZADOS</h1>
          <p>
            Cada projeto exige uma solução específica. Conheça nossas áreas de atuação e descubra
            como podemos proteger seu patrimônio com máxima eficiência.
          </p>
        </div>

        <div className={styles.serviceCards}>
          {serviceCards.map(({ image, title, to }) => (
            <Link key={to} to={to} className={`${styles.card} ${styles.cardLink}`}>
              <img src={image} alt={title} className={styles.cardImage} />
              <div className={styles.info}>
                <p>{title}</p>
                <span>Leia sobre →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <SectionCta />
      <Footer />
    </>
  );
}
