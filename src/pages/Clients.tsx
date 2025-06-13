import SectionCta from '@/components/SectionCta';
import { Footer } from '@/components/Footer';
import ClientCarousel from '@/components/ClientCarousel';

import styles from './Cliente.module.css';
import logo from '@/assets/clients/elogo.png';

// Importação das logos
import logo1 from '@/assets/clientLogo/taPng.png';
import logo2 from '@/assets/clientLogo/taPng1.webp';
import logo3 from '@/assets/clientLogo/taPng2.png';
import logo4 from '@/assets/clientLogo/taPng3.png';
import logo5 from '@/assets/clientLogo/taPng4.svg';
import logo6 from '@/assets/clientLogo/taPng5.png';
import logo7 from '@/assets/clientLogo/taPng6.webp';
import logo8 from '@/assets/clientLogo/taPng7.png';
import logo9 from '@/assets/clientLogo/taPng8.png';
import logo10 from '@/assets/clientLogo/taPng9.png';
import logo11 from '@/assets/clientLogo/taPng10.webp';
import logo12 from '@/assets/clientLogo/taPng11.png';
import logo13 from '@/assets/clientLogo/taPng12.png';
import logo14 from '@/assets/clientLogo/taPng13.png';

// Lista de logos
const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14
];

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

          {/* Galeria Responsiva */}
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-lg bg-white p-4 shadow-md"
              >
                <img src={logo} alt={`Logo ${index + 1}`} className="max-h-16 object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.esq}>
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="Logo de um dos clientes atendidos"
              className="h-auto w-full max-w-[400px] object-contain md:max-w-[500px] xl:max-w-[600px]"
            />
          </div>
        </div>
      </div>

      <ClientCarousel className={styles.carousel} />
      <SectionCta />
      <Footer />
    </div>
  );
}
