import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Separator } from '@/components/ui/separator';
import styles from './StickyCards.module.css';

gsap.registerPlugin(ScrollTrigger);

interface CardData {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  accent: string;
}

interface StickyCardsProps {
  cards: CardData[];
}

export default function StickyCards({ cards }: StickyCardsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Só ativa a animação em desktop (>= 900px)
    const mm = gsap.matchMedia();

    mm.add('(min-width: 900px)', () => {
      const ctx = gsap.context(() => {
        const cardEls = gsap.utils.toArray<HTMLElement>('.sc-card');

        cardEls.forEach((card, index) => {
          if (index < cardEls.length - 1) {
            const inner = card.querySelector<HTMLElement>('.sc-card-inner');
            if (!inner) return;

            gsap.fromTo(
              inner,
              { y: '0%', z: 0, rotationX: 0 },
              {
                y: '-50%',
                z: -250,
                rotationX: 45,
                scrollTrigger: {
                  trigger: cardEls[index + 1],
                  start: 'top 85%',
                  end: 'top -75%',
                  scrub: true,
                  pin: card,
                  pinSpacing: false,
                },
              }
            );

            gsap.to(inner, {
              '--after-opacity': 1,
              scrollTrigger: {
                trigger: cardEls[index + 1],
                start: 'top 75%',
                end: 'top -25%',
                scrub: true,
              },
            });
          }
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* Header da seção */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.hat}>
            <span>Nossos diferenciais</span>
            <Separator orientation="vertical" className="h-10 bg-gray-400" />
            <p>
              Não basta estar dentro das normas.
              <br /> É preciso estar à frente delas.
            </p>
          </div>
          <div className={styles.titleBlock}>
            <h1>Compromisso com a Segurança. Excelência em Cada Detalhe.</h1>
            <p>
              Nosso portfólio de serviços é projetado para atender as mais rigorosas normas
              técnicas e garantir a máxima eficiência na prevenção de incêndios.
            </p>
          </div>
        </div>
      </div>

      {/* Cards com sticky scroll (desktop) / lista (mobile) */}
      <div className={styles.stickyCards}>
        {cards.map((card) => (
          <div key={card.id} className={`sc-card ${styles.card}`}>
            <div
              className={`sc-card-inner ${styles.cardInner}`}
              style={{ '--after-opacity': 0, '--accent': card.accent } as React.CSSProperties}
            >
              {/* Coluna de texto */}
              <div className={styles.cardLeft}>
                <p className={styles.cardTag}>{card.tag}</p>
                <h2 className={styles.cardTitle}>{card.title}</h2>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>

              {/* Imagem */}
              <div className={styles.cardImg}>
                <img src={card.image} alt={card.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
