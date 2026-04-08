import styles from './Services.module.css';
import imageOne from '../../assets/service/image.jpg';
import imageTwo from '../../assets/service/image-1.jpg';
import imageThree from '../../assets/service/image-2.jpg';
import imageFour from '../../assets/service/image-3.jpg';
import { Link } from 'react-router-dom';
import SectionCta from '@/components/SectionCta';
import { Footer } from '@/components/Footer';
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
            <a href="https://wa.me/5541997430178?text=Ol%C3%A1%20vim%20do%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento" className={styles.ctaButton} target="_blank">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>

      {/* LINNKS PARA OUTRAS PAGINAS */}
      <div className={styles.services}>
        <div className={styles.serviceTitle}>
          <div className="w-fit rounded-full bg-red-600 px-2 py-1">
            <span className="text-xs text-white">Serviços estratégicos para máxima proteção</span>
          </div>

          <h1 className="">NOSSOS SERVIÇOS ESPECIALIZADOS</h1>
          <p>
            Cada projeto exige uma solução específica. Conheça nossas áreas de atuação e descubra
            como podemos proteger seu patrimônio com máxima eficiência.
          </p>
        </div>

        <div className={styles.serviceCards}>
          <div className={`${styles.card} transition-all duration-300 ease-in-out hover:scale-110`}>
            <img src={imageOne} alt="" className="h-auto w-[240px] object-cover" />

            <div className={styles.info}>
              <p>Projeto e Consultoria</p>
              <span>
                <Link to="/services/project-consultancy">Leia sobre</Link>
              </span>
            </div>
          </div>
          <div className={`${styles.card} transition-all duration-300 ease-in-out hover:scale-110`}>
            <img src={imageTwo} alt="" className="h-auto w-[240px]" />

            <div className={styles.info}>
              <p>Instalação de Sistemas</p>
              <span>
                <Link to="/services/system-installation">Leia sobre</Link>
              </span>
            </div>
          </div>
          <div className={`${styles.card} transition-all duration-300 ease-in-out hover:scale-110`}>
            <img src={imageThree} alt="" className="h-auto w-[240px]" />

            <div className={styles.info}>
              <p>Manutenção e Testes</p>
              <span>
                <Link to="/services/maintenance-tests">Leia sobre</Link>
              </span>
            </div>
          </div>
          <div className={`${styles.card} transition-all duration-300 ease-in-out hover:scale-110`}>
            <img src={imageFour} alt="" className="h-auto w-[240px]" />

            <div className={styles.info}>
              <p>Regularização e Certificação</p>
              <span>
                <Link to="/services/certification">Leia sobre</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <SectionCta />
      <Footer />
    </>
  );
}
