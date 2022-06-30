import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import news from '../../../assets/news/news.png'


const News = () => {

    const navigate = useNavigate();


    return (
        <section className="news">
            <div className="container">
                <h2 className="title">
                    Новости
                </h2>
                <div className="news__row">
                    <div className="news__card">
                        <img className="news__card-img" src={news} alt=""/>
                        <h3 className="news__card-date">
                            05.03.2022
                        </h3>
                        <p className="news__card-desc">
                            05 марта 2022 с 17:00 до 23:00 на сети интернет будут проводиться планово-профилактические работы.
                        </p>
                        <Link to={'/news'} className="news__card-link">
                            Подробнее
                            <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 4.75H11.5M11.5 4.75L7 0.75M11.5 4.75L7 9.25" stroke="#6984F0" stroke-width="2"/>
                        </svg>

                        </Link>
                    </div>
                    <div className="news__card">
                        <img className="news__card-img" src={news} alt=""/>
                        <h3 className="news__card-date">
                            05.03.2022
                        </h3>
                        <p className="news__card-desc">
                            05 марта 2022 с 17:00 до 23:00 на сети интернет будут проводиться планово-профилактические работы.
                        </p>
                        <Link to={'/news'} className="news__card-link">
                            Подробнее
                            <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 4.75H11.5M11.5 4.75L7 0.75M11.5 4.75L7 9.25" stroke="#6984F0" stroke-width="2"/>
                            </svg>

                        </Link>
                    </div>
                    <div className="news__card">
                        <img className="news__card-img" src={news} alt=""/>
                        <h3 className="news__card-date">
                            05.03.2022
                        </h3>
                        <p className="news__card-desc">
                            05 марта 2022 с 17:00 до 23:00 на сети интернет будут проводиться планово-профилактические работы.
                        </p>
                        <Link to={'/news'} className="news__card-link">
                            Подробнее
                            <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 4.75H11.5M11.5 4.75L7 0.75M11.5 4.75L7 9.25" stroke="#6984F0" stroke-width="2"/>
                            </svg>

                        </Link>
                    </div>
                </div>
                <button className="btn" type={'button'} onClick={() => navigate('/news')}>
                    Все новости
                </button>
            </div>
        </section>
    );
};

export default News;