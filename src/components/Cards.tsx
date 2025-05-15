import styles from './Cards.module.css';
import { LucideIcon } from 'lucide-react';

type CardProps = {
  image: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function Cards({ image, icon: Icon, title, description }: CardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <div className={styles.title}>
          <div className={styles.icon}>
            <Icon />
          </div>
          <p>{title}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
