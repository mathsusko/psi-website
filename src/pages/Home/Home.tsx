import ServiceCard from '@/pages/Home/ServiceCard'
import { Separator } from '../../components/ui/separator'
import styles from './Home.module.css'
import { Flame, HardHat, MessageCircle, Wrench } from 'lucide-react'

// Importando as imagens para os cards de serviço
import imageOne from '../../assets/service/imageOne.jpg' // Caminho correto
import imageTwo from '../../assets/service/imageTwo.jpg' // Caminho correto
import imageThree from '../../assets/service/imageThree.jpg' // Caminho correto
import imageOneDif from '../../assets/home/dif/imageOneDif.jpg'
import imageTwoDif from '../../assets/home/dif/imageTwoDif.jpg'
import imageThreeDif from '../../assets/home/dif/imageThreeDif.jpg'
import imageFourDif from '../../assets/home/dif/imageFourDif.jpg'
import logo2 from '../../assets/logo2.png'
import { Footer } from '@/components/Footer'

export function Home() {
  return (
    <>
      {/* banner hero */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.hat}>
            <p>Confie na experiência</p>
          </span>
          <div className={styles.title}>
            <h1>
              SEGURANÇA QUE PROTEGE <br /> VIDAS E PATRIMÔNIOS
            </h1>
            <p>
              Soluções completas em prevenção e combate a incêndios <br /> para empresas,
              indústrias e edificações comerciais.
            </p>
          </div>
          <div>
            <a
              href="/contact"
              className={styles.ctaButton}
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
            <span className="text-2xl">Serviços</span>
            <Separator
              orientation="vertical"
              className="h-10 bg-gray-300"
            />
            <p className="text-xs px-1">
              Soluções personalizadas <br /> para segurança intransigente.
            </p>
          </div>

          <div className="w-[450px]">
            <p>
              Nosso portfólio de serviços é projetado para atender as mais rigorosas
              normas técnicas e garantir a máxima eficiência na prevenção de incêndios.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Instalação de Sistemas Hidráulicos Contra Incêndio"
            description="Projetamos e implementamos redes de hidrantes, sprinklers, bombas de incêndio e sistemas de pressurização."
            imageSrc={imageThree} // Usando a imagem importada corretamente
            ctaText="Agendar Orçamento"
            ctaLink="#"
            icon={<Flame className="text-white text-2xl" />}
          />
          <ServiceCard
            title="Manutenção e Inspeção Técnica"
            description="Realizamos inspeções preventivas e corretivas, garantindo que cada equipamento funcione com precisão milimétrica."
            imageSrc={imageTwo} // Usando a imagem importada corretamente
            ctaText="Agendar Orçamento"
            ctaLink="#"
            icon={<Wrench className="text-white text-2xl" />}
          />
          <ServiceCard
            title="Consultoria e Projetos Especiais"
            description="Desenvolvemos soluções sob medida para edificações de grande porte, assegurando conformidade com as regulamentações vigentes."
            imageSrc={imageOne} // Usando a imagem importada corretamente
            ctaText="Agendar Orçamento"
            ctaLink="#"
            icon={<HardHat className="text-white text-2xl" />}
          />
        </div>
      </div>
      <div className={styles.clients}>
        <div className={styles.clientOverlay}></div>

        <div className={styles.clientBody}>
          <div className={styles.clientHeader}>
            <div className={styles.hatClient}>
              <span className="text-2xl">Clientess</span>
              <Separator
                orientation="vertical"
                className="h-10 bg-gray-300"
              />
              <p className="text-xs px-1">
                Soluções personalizadas <br /> para segurança intransigente.
              </p>
            </div>
            <div className={styles.titleTitle}>
              <h1 className={styles.clientTitle}>
                Empresas que Confian na PSI Previncêndio
              </h1>
              <p>
                Nosso portfólio de serviços é projetado para atender as mais rigorosas
                normas técnicas e garantir a máxima eficiência na prevenção de incêndios.
              </p>
            </div>
          </div>

          <div className={styles.sliderClient}>
            <div className={styles.sliderTrack}>
              <img
                src={logo2}
                alt="Imagem 1"
              />
              <img
                src={logo2}
                alt="Imagem 2"
              />
              <img
                src={logo2}
                alt="Imagem 3"
              />
              <img
                src={logo2}
                alt="Imagem 4"
              />
              <img
                src={logo2}
                alt="Imagem 4"
              />
              <img
                src={logo2}
                alt="Imagem 4"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.dif}>
        <div className={styles.difBody}>
          <div className={styles.difHeader}>
            <div className={styles.hatDif}>
              <span className="text-2xl">Nossos diferenciais</span>
              <Separator
                orientation="vertical"
                className="h-10 bg-gray-300"
              />
              <p className="text-xs px-1">
                Não basta estar dentro das normas. <br /> É preciso estar à frente delas.
              </p>
            </div>

            <div className={styles.titleDif}>
              <h1 className={styles.difTitle}>
                Compromisso com a Segurança. Excelência em Cada Detalhe.
              </h1>
              <p>
                Nosso portfólio de serviços é projetado para atender as mais rigorosas
                normas técnicas e garantir a máxima eficiência na prevenção de incêndios.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.difCards}>
          <div className={styles.card}>
            <img
              src={imageOneDif}
              alt="imagem diferencial um"
            />
            <div className={styles.textCard}>
              <h2>14 anos de expertise no setor</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi dolorem
                animi, saepe omnis eligendi nam illum molestiae corrupti perferendis.
              </p>
              <a href="#">Saiba mais</a>
            </div>
          </div>

          <div className={styles.card}>
            <img
              src={imageTwoDif}
              alt="imagem diferencial um"
            />
            <div className={styles.textCard}>
              <h2>
                Equipe de engenheiros e <br /> técnicos especializados
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi dolorem
                animi, saepe omnis eligendi nam illum molestiae corrupti perferendis.
              </p>
              <a href="#">Saiba mais</a>
            </div>
          </div>

          <div className={styles.card}>
            <img
              src={imageThreeDif}
              alt="imagem diferencial um"
            />
            <div className={styles.textCard}>
              <h2>
                Conformidade com <br /> ABNT NBR, NFPA e IT CBM
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi dolorem
                animi, saepe omnis eligendi nam illum molestiae corrupti perferendis.
              </p>
              <a href="#">Saiba mais</a>
            </div>
          </div>

          <div className={styles.card}>
            <img
              src={imageFourDif}
              alt="imagem diferencial um"
            />
            <div className={styles.textCard}>
              <h2>
                Atendimento emergencial e <br /> suporte técnico 24/7
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi dolorem
                animi, saepe omnis eligendi nam illum molestiae corrupti perferendis.
              </p>
              <a href="#">Saiba mais</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cta}>
        <div className={styles.ctaBody}>
          <div className={styles.ctaHeader}>
            <div className={styles.hatCta}>
              <span className="size-3">Nossos diferenciais</span>
            </div>

            <div className={styles.titleCta}>
              <h1 className={styles.ctaTitle}>
                Planeje agora <br /> sua segurança
              </h1>
              <p>
                Cada projeto é único. Nossa equipe está pronta para entender sua
                necessidade e oferecer a solução mais eficiente e segura.
              </p>
            </div>
          </div>

          <button className={styles.buttonCta}>
            <a
              href="#"
              className="size-6"
            >
              <MessageCircle /> Agendar Orçamento
            </a>
          </button>
        </div>
      </div>

      <Footer />
    </>
  )
}
