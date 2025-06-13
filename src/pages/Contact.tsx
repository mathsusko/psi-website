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
          <ContactForm />
        </div>
        <SectionCta />
        <Footer />
      </div>
    </>
  );
}
