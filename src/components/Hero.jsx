import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination} from 'swiper/modules';
import HeroCard1 from './HeroCard1';
import HeroCard2 from './HeroCard2';
import HeroCard3 from './HeroCard3';
export default function Hero() {
  return (
    <>
    
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
       
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><HeroCard1/></SwiperSlide>
        <SwiperSlide><HeroCard2/></SwiperSlide>
        <SwiperSlide><HeroCard3/></SwiperSlide>
       
      </Swiper>
    </>
  );
}
