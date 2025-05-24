import ServiceCard from '@/pages/Home/ServiceCard';
import { Separator } from '../../components/ui/separator';
import styles from './Home.module.css';
import { Flame, HardHat, MessageCircle, Wrench } from 'lucide-react';

// Importando as imagens para os cards de serviço
import imageOne from '../../assets/service/imageOne.jpg'; // Caminho correto
import imageTwo from '../../assets/service/imageTwo.jpg'; // Caminho correto
import imageThree from '../../assets/service/imageThree.jpg'; // Caminho correto
import imageOneDif from '../../assets/home/dif/imageOneDif.jpg';
import imageTwoDif from '../../assets/home/dif/imageTwoDif.jpg';
import imageThreeDif from '../../assets/home/dif/imageThreeDif.jpg';
import imageFourDif from '../../assets/home/dif/imageFourDif.jpg';
import ClientCarousel from '../../components/ClientCarousel';

import { Footer } from '@/components/Footer';

export function Home() {
  return (
    <>
      {/* banner hero */}
      <div className={`${styles.hero} relative`}>
        <div className={styles.heroOverlay}></div>
        <div
          className={`${styles.heroContent} relative px-4 py-16 text-white sm:px-8 md:px-16 lg:px-32`}
        >
          <span className={`${styles.hat} text-xs sm:text-sm md:text-base lg:text-lg`}>
            <p>Confie na experiência</p>
          </span>

          <div className={styles.title}>
            <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
              SEGURANÇA QUE PROTEGE <br /> VIDAS E PATRIMÔNIOS
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
              Soluções completas em prevenção e combate a incêndios <br /> para empresas, indústrias
              e edificações comerciais.
            </p>
          </div>

          <div>
            <a
              href="/contact"
              className={`${styles.ctaButton} px-8 py-4 text-sm sm:text-base md:text-lg`}
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>

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

          <div className="flex justify-between">
            <div className="w-[450px]">
              <p>
                Nosso portfólio de serviços é projetado para atender as mais rigorosas normas
                técnicas e garantir a máxima eficiência na prevenção de incêndios.
              </p>
            </div>

            <div className="flex flex-col justify-end">
              <p>
                <a href="#" className="text-red-600 hover:underline">
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
            ctaLink="#"
            icon={<Flame className="text-2xl text-white" />}
          />
          <ServiceCard
            title="Manutenção e Inspeção Técnica"
            description="Realizamos inspeções preventivas e corretivas, garantindo que cada equipamento funcione com precisão milimétrica."
            imageSrc={imageTwo} // Usando a imagem importada corretamente
            ctaText="Agendar Orçamento"
            ctaLink="#"
            icon={<Wrench className="text-2xl text-white" />}
          />
          <ServiceCard
            title="Consultoria e Projetos Especiais"
            description="Desenvolvemos soluções sob medida para edificações de grande porte, assegurando conformidade com as regulamentações vigentes."
            imageSrc={imageOne} // Usando a imagem importada corretamente
            ctaText="Agendar Orçamento"
            ctaLink="#"
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
              <h1 className={styles.clientTitle}>Empresas que Confian na PSI Previncêndio</h1>
              <p>
                Nosso portfólio de serviços é projetado para atender as mais rigorosas normas
                técnicas e garantir a máxima eficiência na prevenção de incêndios.
              </p>
            </div>
          </div>

          <ClientCarousel />
        </div>
      </div>

      <div className={styles.dif}>
        <div className={styles.bodyDif}>
          <div className={styles.difBody}>
            <div className={styles.difHeader}>
              <div className={styles.hatDif}>
                <span className="text-xl">Nossos diferenciais</span>
                <Separator orientation="vertical" className="h-10 bg-gray-300" />
                <p className="px-1 text-xs">
                  Não basta estar dentro das normas. <br /> É preciso estar à frente delas.
                </p>
              </div>

              <div className={styles.titleDif}>
                <h1 className="text-xl font-semibold sm:text-2xl md:text-3xl">
                  Compromisso com a Segurança. Excelência em Cada Detalhe.
                </h1>
                <p className="text-xs sm:text-sm md:text-base">
                  Nosso portfólio de serviços é projetado para atender as mais rigorosas normas
                  técnicas e garantir a máxima eficiência na prevenção de incêndios.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 text-white sm:gap-6">
            {/* Card 1 */}
            <div className="flex flex-col gap-8 lg:flex-row">
              <img
                src={imageOneDif}
                alt="Imagem diferencial 1"
                className="sm-390:w-[358px] w-full rounded-xl object-cover md:w-[600px]"
              />
              <div className="w-full sm:w-[450px] md:w-[600px]">
                <h2 className="mb-2 text-xl font-semibold sm:text-2xl">
                  + de 14 anos de expertise no setor
                </h2>
                <p className="text-xs text-white sm:text-sm md:text-base">
                  Com 14 anos de expertise no setor, a Psi Previncêndio entrega soluções confiáveis
                  e personalizadas em sistemas hidráulicos de prevenção e combate a incêndios,
                  sempre com foco em segurança, eficiência e inovação.
                </p>
              </div>
            </div>

            {/* Card 2 - imagem à direita */}
            <div className="flex flex-col gap-8 lg:flex-row-reverse">
              <img
                src={imageTwoDif}
                alt="Imagem diferencial 2"
                className="sm-390:w-[358px] w-full rounded-xl object-cover md:w-[600px]"
              />
              <div className="w-full sm:w-[450px] md:w-[600px]">
                <h2 className="mb-2 text-xl font-semibold sm:text-2xl">
                  Equipe de engenheiros e <br /> técnicos especializados
                </h2>
                <p className="text-xs text-white sm:text-sm md:text-base">
                  Nossa equipe é formada por engenheiros e técnicos altamente qualificados, com
                  amplo conhecimento em normas de segurança e experiência em projetos de prevenção e
                  combate a incêndios. Atuamos com precisão, responsabilidade e compromisso em cada
                  etapa, do planejamento à execução.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-8 lg:flex-row">
              <img
                src={imageThreeDif}
                alt="Imagem diferencial 3"
                className="sm-390:w-[358px] w-full rounded-xl object-cover md:w-[600px]"
              />
              <div className="w-full sm:w-[450px] md:w-[600px]">
                <h2 className="mb-2 text-xl font-semibold sm:text-2xl">
                  Conformidade com <br /> ABNT NBR, NFPA e IT CBM
                </h2>
                <p className="text-xs text-white sm:text-sm md:text-base">
                  Todos os nossos projetos seguem rigorosamente as normas técnicas vigentes, como
                  ABNT NBR, NFPA e Instruções Técnicas do Corpo de Bombeiros (IT CBM). Garantimos
                  segurança, eficiência e aprovação sem surpresas junto aos órgãos reguladores.
                </p>
              </div>
            </div>

            {/* Card 4 - imagem à direita */}
            <div className="flex flex-col gap-8 lg:flex-row-reverse">
              <img
                src={imageFourDif}
                alt="Imagem diferencial 4"
                className="sm-390:w-[358px] w-full rounded-xl object-cover md:w-[600px]"
              />
              <div className="w-full sm:w-[450px] md:w-[600px]">
                <h2 className="mb-2 text-xl font-semibold sm:text-2xl">
                  Atendimento emergencial e <br /> suporte técnico 24/7
                </h2>
                <p className="text-xs text-white sm:text-sm md:text-base">
                  Disponibilidade total, quando você mais precisa. Oferecemos atendimento
                  emergencial e suporte técnico 24 horas por dia, 7 dias por semana, garantindo
                  respostas rápidas e soluções eficazes para qualquer situação crítica.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.cta}>
            <div className={styles.ctaBody}>
              <div className={styles.ctaHeader}>
                <div className={styles.hatCta}>
                  <span className="text-3xl">Nossos diferenciais</span>
                </div>

                <div className={styles.titleCta}>
                  <h1 className="text-4xl font-semibold">
                    Planeje agora <br /> sua segurança
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg">
                    Cada projeto é único. Nossa equipe está pronta para entender sua necessidade e
                    oferecer a solução mais eficiente e segura.
                  </p>
                </div>
              </div>

              <button className={styles.buttonCta}>
                <a href="#" className="text-xl sm:text-2xl">
                  <MessageCircle /> Agendar Orçamento
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
