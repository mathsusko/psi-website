import { FC, ReactElement } from 'react';
import './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  ctaText: string;
  ctaLink: string;
  icon: ReactElement; // Corrigido: JSX.Element -> ReactElement
}

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ctaText,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ctaLink,
  icon
}) => {
  return (
    <div className="flex flex-col gap-2 overflow-hidden rounded-lg bg-white p-4 shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-80">
      <img src={imageSrc} alt={title} className="h-48 w-full rounded-lg object-cover" />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center">
          <div className="mr-3 rounded-full bg-red-700 p-2">{icon}</div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="mt-2 text-sm">{description}</p>
        {/* <button className="mt-8 py-4 border border-red-600 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
          <a href={ctaLink} className="inline-block text-red-600 font-semibold transition-all duration-300 ease-in-out">
            {ctaText}
          </a>
        </button> */}
      </div>
    </div>
  );
};

export default ServiceCard;
