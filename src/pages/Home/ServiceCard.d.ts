import { FC, ReactElement } from 'react';
import './ServiceCard.module.css';
interface ServiceCardProps {
    title: string;
    description: string;
    imageSrc: string;
    ctaText: string;
    ctaLink: string;
    icon: ReactElement;
}
declare const ServiceCard: FC<ServiceCardProps>;
export default ServiceCard;
