import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import logo1 from '@/assets/clientLogo/taPng.png';
import logo2 from '@/assets/clientLogo/taPng1.webp';
import logo3 from '@/assets/clientLogo/taPng2.png';
import logo4 from '@/assets/clientLogo/taPng3.png';
import logo5 from '@/assets/clientLogo/taPng4.svg';
import logo6 from '@/assets/clientLogo/taPng5.png';
import logo7 from '@/assets/clientLogo/taPng6.webp';
import logo8 from '@/assets/clientLogo/taPng7.png';
import logo9 from '@/assets/clientLogo/taPng8.png';
import logo10 from '@/assets/clientLogo/taPng9.png';
import logo11 from '@/assets/clientLogo/taPng10.webp';
import logo12 from '@/assets/clientLogo/taPng11.png';
import logo13 from '@/assets/clientLogo/taPng12.png';
import logo14 from '@/assets/clientLogo/taPng13.png';

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14
];

export default function ClientCarousel() {
  return (
    <div className="w-full py-8">
      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={4000}
        slidesPerView="auto"
        spaceBetween={32}
        allowTouchMove={false}
      >
        {logos.map((src, index) => (
          <SwiperSlide key={index} className="flex w-40 items-center justify-center">
            <img
              src={src}
              alt={`Logo ${index}`}
              className="h-20 w-full object-contain filter-none"
              draggable={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
