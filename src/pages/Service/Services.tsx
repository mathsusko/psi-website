import styles from './Services.module.css'
export function Services(){
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
             Soluções Completa para Prevenção e Combate a Incêndios 
            </h1>
            <p>
              Projetamos, instalamos e mantemos sistemas de segurança contra incêndios com máxima eficiência e conformidade. Nossa expertise garante proteção total para empresas, indústrias e edificações comerciais.
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

    {/* LINNKS PARA OUTRAS PAGINAS */}
    <div className='my-72 max-[1440px]'>
    <div className='flex flex-col gap-8'>
      <div className="px-2 py-1 bg-red-600"><span>Serviços estratégicos para máxima proteção</span></div>

      <h1>Nossos Serviços Especializados</h1>


    </div>
    </div>
  </>
  )
}