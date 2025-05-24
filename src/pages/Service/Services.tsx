import styles from './Services.module.css';
import imageOne from '../../assets/service/image.jpg';
import imageTwo from '../../assets/service/image-1.jpg';
import imageThree from '../../assets/service/image-2.jpg';
import imageFour from '../../assets/service/image-3.jpg';
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
            <h1>Soluções Completa para Prevenção e Combate a Incêndios</h1>
            <p>
              Projetamos, instalamos e mantemos sistemas de segurança contra incêndios com máxima
              eficiência e conformidade. Nossa expertise garante proteção total para empresas,
              indústrias e edificações comerciais.
            </p>
          </div>
          <div>
            <a href="/contact" className={styles.ctaButton}>
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
          <div className={styles.card}>
            <img src={imageOne} alt="" className="h-auto w-[240px] object-cover" />

            <div className={styles.info}>
              <p>Projeto e Consultoria</p>
              <span>
                <a href="/services/project-consultancy">Leia sobre</a>
              </span>
            </div>
          </div>
          <div className={styles.card}>
            <img src={imageTwo} alt="" className="h-auto w-[240px]" />

            <div className={styles.info}>
              <p>Instalação de Sistemas</p>
              <span>
                <a href="/services/system-installation">Leia sobre</a>
              </span>
            </div>
          </div>
          <div className={styles.card}>
            <img src={imageThree} alt="" className="h-auto w-[240px]" />

            <div className={styles.info}>
              <p>Manutenção e Testes</p>
              <span>
                <a href="/services/maintenance-tests">Leia sobre</a>
              </span>
            </div>
          </div>
          <div className={styles.card}>
            <img src={imageFour} alt="" className="h-auto w-[240px]" />

            <div className={styles.info}>
              <p>Regularização e Certificação</p>
              <span>
                <a href="/services/certification">Leia sobre</a>
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
