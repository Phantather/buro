import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import img from '../../../assets/partners/partner.png'

import "swiper/css/bundle";

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


const PartnersSlider = () => {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={ {clickable: true}}
                mousewheel={true}
                keyboard={true}
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img} alt="partner"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img} alt="partner"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img} alt="partner"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img} alt="partner"/>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default PartnersSlider;