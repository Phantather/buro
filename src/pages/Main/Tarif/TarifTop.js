import React from 'react';
import {Autoplay, Pagination} from "swiper";
import bg from "../../../assets/begin/begin2.png";
import { Swiper, SwiperSlide } from 'swiper/react';


const TarifTop = () => {
    return (
        <div className="tarif__top">
            <Swiper
                spaceBetween={5}
                slidesPerView={5}
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
                    <div className="tarif__card  swiper-slide-active">
                        <h3 className="tarif__card-title">
                            Energy
                        </h3>
                        <p className="tarif__card-mb">
                            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.43701 11.0395C9.43701 12.001 10.2112 12.7808 11.165 12.7808C11.8351 12.7808 12.4093 12.3927 12.696 11.8311L12.7008 11.8355L15.8552 6.10075L10.3176 9.52265L10.3228 9.52792C9.7969 9.82691 9.43701 10.388 9.43701 11.0395ZM18.1265 2.74252C16.3559 1.18304 14.068 0.187288 11.4538 0.0384521V2.68456C13.6323 2.82418 14.9159 3.52138 16.2047 4.60933L18.1265 2.74252ZM19.36 10.2146H21.9829C21.8068 7.58033 20.7843 5.41585 19.1966 3.64212L17.341 5.50058C18.459 6.79137 19.1944 8.45841 19.36 10.2146Z" fill="#6984F0"/>
                                <path d="M19.3723 11.5317C19.0948 15.9221 15.485 19.4042 11.0758 19.4042C6.48576 19.4042 2.61417 15.653 2.61417 11.0281C2.61417 6.6254 6.22565 3.02305 10.1469 2.68499V0.0388794C4.48287 0.380894 0 5.18314 0 11.0395C0 17.1172 4.97564 22.0384 11.007 22.0384C16.8592 22.0384 21.7207 17.2393 22 11.5317H19.3723Z" fill="#6984F0"/>
                            </svg>
                            100 Мбит/с
                        </p>
                        <a href="#" className="tarif__card-link">
                            Подробнее
                        </a>
                        <p className="tarif__card-price">
                            600
                            <span>
                                ₽/мес
                            </span>
                        </p>
                        <button type={"button"} className="tarif__card-btn">
                            Подключить
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tarif__card tarif__card_active swiper-slide-active">
                        <h3 className="tarif__card-title">
                            Energy
                        </h3>
                        <p className="tarif__card-mb">
                            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.43701 11.0395C9.43701 12.001 10.2112 12.7808 11.165 12.7808C11.8351 12.7808 12.4093 12.3927 12.696 11.8311L12.7008 11.8355L15.8552 6.10075L10.3176 9.52265L10.3228 9.52792C9.7969 9.82691 9.43701 10.388 9.43701 11.0395ZM18.1265 2.74252C16.3559 1.18304 14.068 0.187288 11.4538 0.0384521V2.68456C13.6323 2.82418 14.9159 3.52138 16.2047 4.60933L18.1265 2.74252ZM19.36 10.2146H21.9829C21.8068 7.58033 20.7843 5.41585 19.1966 3.64212L17.341 5.50058C18.459 6.79137 19.1944 8.45841 19.36 10.2146Z" fill="#6984F0"/>
                                <path d="M19.3723 11.5317C19.0948 15.9221 15.485 19.4042 11.0758 19.4042C6.48576 19.4042 2.61417 15.653 2.61417 11.0281C2.61417 6.6254 6.22565 3.02305 10.1469 2.68499V0.0388794C4.48287 0.380894 0 5.18314 0 11.0395C0 17.1172 4.97564 22.0384 11.007 22.0384C16.8592 22.0384 21.7207 17.2393 22 11.5317H19.3723Z" fill="#6984F0"/>
                            </svg>
                            100 Мбит/с
                        </p>
                        <a href="#" className="tarif__card-link">
                            Подробнее
                        </a>
                        <p className="tarif__card-price">
                            600
                            <span>
                                ₽/мес
                            </span>
                        </p>
                        <button type={"button"} className="tarif__card-btn">
                            Подключить
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tarif__card tarif__card_active swiper-slide-active">
                        <h3 className="tarif__card-title">
                            Energy
                        </h3>
                        <p className="tarif__card-mb">
                            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.43701 11.0395C9.43701 12.001 10.2112 12.7808 11.165 12.7808C11.8351 12.7808 12.4093 12.3927 12.696 11.8311L12.7008 11.8355L15.8552 6.10075L10.3176 9.52265L10.3228 9.52792C9.7969 9.82691 9.43701 10.388 9.43701 11.0395ZM18.1265 2.74252C16.3559 1.18304 14.068 0.187288 11.4538 0.0384521V2.68456C13.6323 2.82418 14.9159 3.52138 16.2047 4.60933L18.1265 2.74252ZM19.36 10.2146H21.9829C21.8068 7.58033 20.7843 5.41585 19.1966 3.64212L17.341 5.50058C18.459 6.79137 19.1944 8.45841 19.36 10.2146Z" fill="#6984F0"/>
                                <path d="M19.3723 11.5317C19.0948 15.9221 15.485 19.4042 11.0758 19.4042C6.48576 19.4042 2.61417 15.653 2.61417 11.0281C2.61417 6.6254 6.22565 3.02305 10.1469 2.68499V0.0388794C4.48287 0.380894 0 5.18314 0 11.0395C0 17.1172 4.97564 22.0384 11.007 22.0384C16.8592 22.0384 21.7207 17.2393 22 11.5317H19.3723Z" fill="#6984F0"/>
                            </svg>
                            100 Мбит/с
                        </p>
                        <a href="#" className="tarif__card-link">
                            Подробнее
                        </a>
                        <p className="tarif__card-price">
                            600
                            <span>
                                ₽/мес
                            </span>
                        </p>
                        <button type={"button"} className="tarif__card-btn">
                            Подключить
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tarif__card tarif__card_active swiper-slide-active">
                        <h3 className="tarif__card-title">
                            Energy
                        </h3>
                        <p className="tarif__card-mb">
                            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.43701 11.0395C9.43701 12.001 10.2112 12.7808 11.165 12.7808C11.8351 12.7808 12.4093 12.3927 12.696 11.8311L12.7008 11.8355L15.8552 6.10075L10.3176 9.52265L10.3228 9.52792C9.7969 9.82691 9.43701 10.388 9.43701 11.0395ZM18.1265 2.74252C16.3559 1.18304 14.068 0.187288 11.4538 0.0384521V2.68456C13.6323 2.82418 14.9159 3.52138 16.2047 4.60933L18.1265 2.74252ZM19.36 10.2146H21.9829C21.8068 7.58033 20.7843 5.41585 19.1966 3.64212L17.341 5.50058C18.459 6.79137 19.1944 8.45841 19.36 10.2146Z" fill="#6984F0"/>
                                <path d="M19.3723 11.5317C19.0948 15.9221 15.485 19.4042 11.0758 19.4042C6.48576 19.4042 2.61417 15.653 2.61417 11.0281C2.61417 6.6254 6.22565 3.02305 10.1469 2.68499V0.0388794C4.48287 0.380894 0 5.18314 0 11.0395C0 17.1172 4.97564 22.0384 11.007 22.0384C16.8592 22.0384 21.7207 17.2393 22 11.5317H19.3723Z" fill="#6984F0"/>
                            </svg>
                            100 Мбит/с
                        </p>
                        <a href="#" className="tarif__card-link">
                            Подробнее
                        </a>
                        <p className="tarif__card-price">
                            600
                            <span>
                                ₽/мес
                            </span>
                        </p>
                        <button type={"button"} className="tarif__card-btn">
                            Подключить
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tarif__card tarif__card_active swiper-slide-active">
                        <h3 className="tarif__card-title">
                            Energy
                        </h3>
                        <p className="tarif__card-mb">
                            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.43701 11.0395C9.43701 12.001 10.2112 12.7808 11.165 12.7808C11.8351 12.7808 12.4093 12.3927 12.696 11.8311L12.7008 11.8355L15.8552 6.10075L10.3176 9.52265L10.3228 9.52792C9.7969 9.82691 9.43701 10.388 9.43701 11.0395ZM18.1265 2.74252C16.3559 1.18304 14.068 0.187288 11.4538 0.0384521V2.68456C13.6323 2.82418 14.9159 3.52138 16.2047 4.60933L18.1265 2.74252ZM19.36 10.2146H21.9829C21.8068 7.58033 20.7843 5.41585 19.1966 3.64212L17.341 5.50058C18.459 6.79137 19.1944 8.45841 19.36 10.2146Z" fill="#6984F0"/>
                                <path d="M19.3723 11.5317C19.0948 15.9221 15.485 19.4042 11.0758 19.4042C6.48576 19.4042 2.61417 15.653 2.61417 11.0281C2.61417 6.6254 6.22565 3.02305 10.1469 2.68499V0.0388794C4.48287 0.380894 0 5.18314 0 11.0395C0 17.1172 4.97564 22.0384 11.007 22.0384C16.8592 22.0384 21.7207 17.2393 22 11.5317H19.3723Z" fill="#6984F0"/>
                            </svg>
                            100 Мбит/с
                        </p>
                        <a href="#" className="tarif__card-link">
                            Подробнее
                        </a>
                        <p className="tarif__card-price">
                            600
                            <span>
                                ₽/мес
                            </span>
                        </p>
                        <button type={"button"} className="tarif__card-btn">
                            Подключить
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TarifTop;