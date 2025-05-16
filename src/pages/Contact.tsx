// src/pages/Contact.tsx ou src/components/Contact.tsx
import styles from './Contact.module.css';
import { Footer } from '@/components/Footer';
import SectionCta from '@/components/SectionCta';
import { ContactForm } from '@/components/ContactForm';

export function Contact() {
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.container}>
          <div className={styles.dir}>
            <div className={styles.hat}>
              <span>Entrem em contato</span>
            </div>
            <div className={styles.title}>
              <h1>Entre em Contato com a PSI Previncêndio</h1>
            </div>
            <div className={styles.description}>
              Precisa de um orçamento ou tem dúvidas sobre nossos serviços? <br />
              Nossa equipe está pronta para atender você.
            </div>
          </div>
          <div className={styles.esq}>
            <ContactForm />
          </div>
        </div>
        <SectionCta />
        <Footer />
      </div>
    </>
  );
}
