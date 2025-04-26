import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import imageOne from './../assets/service/imageOne.jpg';
import imageTwo from './../assets/service/imageTwo.jpg';
import imageThree from './../assets/service/imageThree.jpg';

export function Clientes() {
  return (
    <div 
      className="py-16 bg-gray-100" 
      style={{
        backgroundImage: 'url(/path/to/your-image.jpg)', // Caminho da sua imagem de fundo
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Título da seção */}
        <div className="text-center mb-12">
          <span className="text-2xl font-semibold text-gray-800">Clientes</span>
          <p className="text-sm text-gray-600 mt-2">Empresas que Confiam na PSI Prevenção</p>
        </div>

        {/* Carrossel de Clientes */}
        <Swiper
          spaceBetween={50} 
          slidesPerView={3} 
          loop={true} 
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <img src={imageOne} alt="Logo Cliente 1" className="w-full object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imageTwo} alt="Logo Cliente 2" className="w-full object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imageThree} alt="Logo Cliente 3" className="w-full object-contain" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
