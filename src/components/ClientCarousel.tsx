import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import logo from '@/assets/logo2.png'; // 👈 aqui está o import

const logos = [logo, logo, logo, logo, logo, logo, logo]; // repete a mesma logo

export default function ClientCarousel() {
  return (
    <div className="w-full py-8">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        loop={true}
        freeMode={true}
        allowTouchMove={false}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2 },   // 👈 celulares
          640: { slidesPerView: 3 },   // 👈 tablets
          1024: { slidesPerView: 5 },  // 👈 desktops
        }}
        className="w-full"
      >
        {logos.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={src}
              alt={`Cliente ${index}`}
              className="h-32 w-auto grayscale hover:grayscale-0 transition duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
