import { FC } from 'react';
import './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string; // Imagem passada como prop
  ctaText: string;
  ctaLink: string;
  icon: JSX.Element; // Ícone passado como prop
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, imageSrc, ctaText, ctaLink, icon }) => {
  return (
    <div className="flex flex-col gap-2 bg-white rounded-lg shadow-lg overflow-hidden p-4">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover rounded-lg" />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center">
          <div className="mr-3 bg-red-700 p-2 rounded-full">{icon}</div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-sm mt-2">{description}</p>
        <button className="mt-8 py-4 border border-red-600 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <a href={ctaLink} className="inline-block text-red-600 font-semibold transition-all duration-300 ease-in-out ">
                {ctaText}
            </a>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
