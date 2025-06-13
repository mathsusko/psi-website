import styles from './SectionCta.module.css';

export default function SectionCta() {
  return (
    <div className={styles.section}>
      <div className={styles.body}>
        <div className={styles.pill}>
          <span>A segurança começa com um clique</span>
        </div>
        <div className={styles.info}>
          <h1>FALE COM NOSSOS ESPECIALISTA AGORA</h1>
          <p>
            Temos a solução ideal para proteger seu patrimônio. Solicite um orçamento e receba um
            plano personalizado para sua necessidade.
          </p>
        </div>
        <button className={styles.button}>
          <a href="https://wa.me/5541997430276" target="_blank">
            Solicitar Orçamento
          </a>
        </button>
      </div>
    </div>
  );
}
