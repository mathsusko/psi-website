import { LucideIcon } from 'lucide-react';
type CardProps = {
    image: string;
    icon: LucideIcon;
    title: string;
    description?: string;
};
export default function Cards({ image, icon: Icon, title, description }: CardProps): import("react/jsx-runtime").JSX.Element;
export {};
