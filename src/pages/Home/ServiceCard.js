import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './ServiceCard.module.css';
const ServiceCard = ({ title, description, imageSrc, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
ctaText, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
ctaLink, icon }) => {
    return (_jsxs("div", { className: "flex flex-col gap-2 overflow-hidden rounded-lg bg-white p-4 shadow-lg", children: [_jsx("img", { src: imageSrc, alt: title, className: "h-48 w-full rounded-lg object-cover" }), _jsxs("div", { className: "flex flex-col gap-2 p-4", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "mr-3 rounded-full bg-red-700 p-2", children: icon }), _jsx("h3", { className: "text-xl font-bold", children: title })] }), _jsx("p", { className: "mt-2 text-sm", children: description })] })] }));
};
export default ServiceCard;
