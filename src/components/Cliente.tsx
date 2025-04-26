import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export function Clientes() {
  return (
    <div className="py-16 bg-clientes">
    <div 
      className="py-16 bg-gray-100" 
      style={{
        backgroundImage: 'url(/path/to/your-image.jpg)', // Caminho da sua imagem de fundo
        backgroundSize: 'cover', // A imagem ocupa toda a área disponível
        backgroundPosition: 'center', // Centraliza a imagem
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
          spaceBetween={50} // Distância entre as imagens
          slidesPerView={3} // Número de slides visíveis por vez
          loop={true} // Habilita o loop infinito
          autoplay={{
            delay: 2000, // Intervalo entre as transições (em milissegundos)
            disableOnInteraction: false, // Não desabilita o autoplay ao interagir
          }}
          breakpoints={{
            // Definindo os pontos de interrupção para responsividade
            640: {
              slidesPerView: 1, // Para telas pequenas (mobile), um slide por vez
            },
            768: {
              slidesPerView: 2, // Para telas médias (tablet), dois slides
            },
            1024: {
              slidesPerView: 3, // Para telas grandes, três slides
            },
          }}
        >
          {/* Exemplo de como colocar as imagens dentro dos SwiperSlide */}
          <SwiperSlide>
            <img src="./src/assets/service/logo.png" alt="Logo Cliente 1" className="w-full object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./src/assets/service/logo.png" alt="Logo Cliente 2" className="w-full object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./src/assets/service/logo.png" alt="Logo Cliente 3" className="w-full object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./src/assets/service/logo.png" alt="Logo Cliente 4" className="w-full object-contain" />
          </SwiperSlide>
          {/* Adicione mais SwiperSlide conforme necessário */}
        </Swiper>
      </div>
    </div>
    </div>
  );
}
