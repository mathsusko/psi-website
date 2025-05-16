import { ContactForm } from '@/components/ContactForm';
import SectionCta from '@/components/SectionCta';
import { Footer } from '@/components/Footer';
import ClientCarousel from '@/components/ClientCarousel';

import styles from './Cliente.module.css';
import logo from '@/assets/clients/elogo.png';

export function Clients() {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.dir}>
          <div className={styles.hat}>
            <span>Nossos Clientes</span>
          </div>

          <div className={styles.title}>
            <h1>Empresas Que Confiaram na Nossa Expertise</h1>
          </div>

          <div className={styles.description}>
            Ao longo de 14 anos, ajudamos diversas indústrias, comércios e empreendimentos a
            garantirem segurança com soluções eficazes e certificadas.
          </div>
        </div>

        <div className={styles.esq}>
          <img src={logo} alt="Logo de um dos clientes atendidos" />
        </div>
      </div>

      <ClientCarousel />
      <SectionCta />
      <Footer />
    </div>
  );
}
