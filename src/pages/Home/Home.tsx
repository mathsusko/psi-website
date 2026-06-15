import ServiceCard from '@/pages/Home/ServiceCard';
import { Separator } from '../../components/ui/separator';
import styles from './Home.module.css';
import { Flame, HardHat, Wrench } from 'lucide-react';

// Importando as imagens para os cards de serviço
import imageOne from '../../assets/service/imageOne.jpg';
import imageTwo from '../../assets/service/imageTwo.png';
import imageThree from '../../assets/service/imageThree.png';
import imageOneDif from '../../assets/home/dif/imageOneDif.jpg';
import imageTwoDif from '../../assets/home/dif/imageTwoDif.jpg';
import imageThreeDif from '../../assets/home/dif/imageThreeDif.jpg';
import imageFourDif from '../../assets/home/dif/imageFourDif.jpg';
import ClientCarousel from '../../components/ClientCarousel';
import videoBg from '../../assets/home/bg.mp4';
import StickyCards from '../../components/StickyCards';

import { Footer } from '@/components/Footer';

const difCards = [
  {
    id: 'card-1',
    tag: 'Experiência comprovada',
    title: '+ de 14 anos no setor',
    description:
      'A Psi Previncêndio entrega soluções confiáveis e personalizadas em sistemas hidráulicos de prevenção e combate a incêndios, sempre com foco em segurança, eficiência e inovação.',
    image: imageOneDif,
    accent: '#7c0e0e',
  },
  {
    id: 'card-2',
    tag: 'Capital humano',
    title: 'Engenheiros e técnicos especializados',
    description:
      'Nossa equipe é formada por profissionais altamente qualificados, com amplo conhecimento em normas de segurança e experiência em projetos de prevenção e combate a incêndios.',
    image: imageTwoDif,
    accent: '#5a0808',
  },
  {
    id: 'card-3',
    tag: 'Conformidade total',
    title: 'ABNT NBR, NFPA e IT CBM',
    description:
      'Todos os nossos projetos seguem rigorosamente as normas técnicas vigentes. Garantimos segurança, eficiência e aprovação sem surpresas junto aos órgãos reguladores.',
    image: imageThreeDif,
    accent: '#3d0505',
  },
  {
    id: 'card-4',
    tag: 'Disponibilidade total',
    title: 'Suporte técnico 24/7',
    description:
      'Atendimento emergencial e suporte técnico 24 horas por dia, 7 dias por semana, garantindo respostas rápidas e soluções eficazes para qualquer situação crítica.',
    image: imageFourDif,
    accent: '#200202',
  },
];

export function Home() {
  return (
    <>
      {/* banner hero */}

      <section className={styles.hero}>
        <video className={styles.videoBg} src={videoBg} autoPlay loop muted playsInline />

        <div className={styles.heroContent}>
          <span className={styles.hat}>
            <p>Confie na experiência</p>
          </span>

          <div className={styles.title}>
            <h1>
              SEGURANÇA QUE PROTEGE <br /> VIDAS E PATRIMÔNIOS
            </h1>
            <p>
              Soluções completas em prevenção e combate a incêndios <br />
              para empresas, indústrias, edificações comerciais e prediais.
            </p>
          </div>
          <div className="transition-all duration-300 ease-in-out hover:opacity-80">
            <a
              href="https://wa.me/5541997430178?text=Ol%C3%A1%20vim%20do%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
              className={styles.ctaButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>

      {/* serviços */}
      <div className={styles.services}>
        <div className={styles.service}>
          <div className={styles.hat}>
            <span className="text-2xl text-gray-600">Serviços</span>
            <Separator orientation="vertical" className="h-10 bg-gray-300" />
            <p className="px-1 text-xs text-gray-600">
              Soluções personalizadas <br /> para segurança intransigente.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="w-full max-w-[450px]">
              <p>
                Nosso portfólio de serviços é projetado para atender as mais rigorosas normas
                técnicas e garantir a máxima eficiência na prevenção de incêndios.
              </p>
            </div>

            <div className="flex flex-col justify-end">
              <p className={styles.verMais}>
                <a href="/services" className="text-red-600 hover:underline">
                  Ver mais
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Instalação de Sistemas Hidráulicos Contra Incêndio"
            description="Projetamos e implementamos redes de hidrantes, sprinklers, bombas de incêndio e sistemas de pressurização."
            imageSrc={imageThree} // Usando a imagem importada corretamente
            ctaText="Agendar Orçamento"
            ctaLink="https://wa.me/5541997430276?text=Ol%C3%A1%20vim%20do%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
            icon={<Flame className="text-2xl text-white" />}
          />
          <ServiceCard
            title="Manutenção e Inspeção Técnica"
            description="Realizamos inspeções preventivas e corretivas, garantindo que cada equipamento funcione com precisão milimétrica."
            imageSrc={imageTwo} // Usando a imagem importada corretamente
            ctaText="Agendar Orçamento"
            ctaLink="https://wa.me/5541997430276?text=Ol%C3%A1%20vim%20do%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
            icon={<Wrench className="text-2xl text-white" />}
          />
          <ServiceCard
            title="Consultoria e Projetos Especiais"
            description="Desenvolvemos soluções sob medida para edificações de grande porte, assegurando conformidade com as regulamentações vigentes."
            imageSrc={imageOne} // Usando a imagem importada corretamente
            ctaText="Agendar Orçamento"
            ctaLink="https://wa.me/5541997430276?text=Ol%C3%A1%20vim%20do%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
            icon={<HardHat className="text-2xl text-white" />}
          />
        </div>
      </div>
      <div className={styles.clients}>
        <div className={styles.clientOverlay}></div>

        <div className={styles.clientBody}>
          <div className={styles.clientHeader}>
            <div className={styles.hatClient}>
              <span className="text-2xl">Clientes</span>
              <Separator orientation="vertical" className="h-10 bg-gray-300" />
              <p className="px-1 text-xs">
                Soluções personalizadas <br /> para segurança intransigente.
              </p>
            </div>
            <div className={styles.titleTitle}>
              <h1 className={styles.clientTitle}>Empresas que Confiam na PSI Previncêndio</h1>
              <p>
                Nosso portfólio de serviços é projetado para atender as mais rigorosas normas
                técnicas e garantir a máxima eficiência na prevenção de incêndios.
              </p>
            </div>
          </div>

          <ClientCarousel />
        </div>
      </div>

      <StickyCards cards={difCards} />

      <Footer />
    </>
  );
}
