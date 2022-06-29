import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination} from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import bg from "../../../assets/begin/begin2.png"



const Slide = () => {
    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Autoplay, Pagination]}
                pagination={{clickable: true}}
                autoPlay={true}
                autoplay={
                    {delay: 3000,
                        clickable: true
                    }

                }
                speed={2000}
                loop={true}
            >
                <SwiperSlide>
                    <img src={bg} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bg} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bg} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bg} alt=""/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slide;