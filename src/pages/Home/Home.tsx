import ServiceCard from '@/components/ServiceCard'
import { Separator } from '../../components/ui/separator'
import styles from './Home.module.css'
import { Flame, HardHat, Wrench } from 'lucide-react'
import { Clientes } from '@/components/Cliente'

export function Home() {
  return (
    <>

    {/* banner hero */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
            <span className={styles.hat}><p>Confie na experiência</p></span>
            <div className={styles.title}>
              <h1>SEGURANÇA QUE PROTEGE <br /> VIDAS E PATRIMÔNIOS</h1>
              <p>Soluções completas em prevenção e combate a incêndios <br /> para empresas, indústrias e edificações comerciais.</p>
            </div>
            <div><a href="/contact" className={styles.ctaButton}>Solicitar Orçamento</a></div>
        </div>
      </div>  

    {/* serviços */}

      <div className={styles.services}>
        <div className={styles.service}>
          <div className={styles.hat}>
            <span className="text-2xl">Serviços</span>
            <Separator orientation="vertical"  className="h-10 bg-gray-300" />
            <p className="text-xs px-1">Soluções personalizadas <br /> para segurança intransigente.</p>
          </div>

          <div className="w-[450px]"><p>Nosso portfólio de serviços é projetado para atender as mais rigorosas normas técnicas e garantir a máxima eficiência na prevenção de incêndios.</p></div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Instalação de Sistemas Hidráulicos Contra Incêndio"
            description="Projetamos e implementamos redes de hidrantes, sprinklers, bombas de incêndio e sistemas de pressurização."
            imageSrc="../src/assets/service/imageThree.jpg"
            ctaText="Agendar Orçamento"
            ctaLink="#"
            icon={<Flame className="text-white text-2xl" />}
          />
          <ServiceCard
            title="Manutenção e Inspeção Técnica"
            description="Realizamos inspeções preventivas e corretivas, garantindo que cada equipamento funcione com precisão milimétrica."
            imageSrc="../src/assets/service/imageTwo.jpg"
            ctaText="Agendar Orçamento"
            ctaLink="#"
            icon={<Wrench className="text-white text-2xl" />}
          />
          <ServiceCard
            title="Consultoria e Projetos Especiais"
            description="Desenvolvemos soluções sob medida para edificações de grande porte, assegurando conformidade com as regulamentações vigentes."
            imageSrc="../src/assets/service/imageOne.jpg"
            ctaText="Agendar Orçamento"
            ctaLink="#"
            icon={<HardHat className="text-white text-2xl" />}
          />
        </div>
        <Clientes />
      </div>
    </>
  )
}