import styles from './BannerHero.module.css';

type BannerHeroProps = {
  title: string;
  description: string;
  hat?: string;
  backgroundImage: string;
  ctaLabel?: string;
  ctaLink?: string;
};

export default function BannerHero({
  title,
  description,
  hat = '',
  backgroundImage,
  ctaLabel = 'Solicitar Orçamento',
  ctaLink = 'https://wa.me/5541997430276'
}: BannerHeroProps) {
  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        {hat && (
          <span className={styles.hat}>
            <p>{hat}</p>
          </span>
        )}
        <div className={styles.title}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div>
          <a href={ctaLink} className={styles.ctaButton}>
            {ctaLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
