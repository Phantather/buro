import React from 'react';
import about from "../../../assets/about/about.png"

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <h2 className="title">
                    О компании
                </h2>
                <div className="about__row">
                    <div className="about__block">
                        <img className="about__block-img" src={about} alt="about"/>
                    </div>
                    <div className="about__block">
                        <p className="about__text">
                            Сегодня – это крупнейшая компания в Старом Осколе с широким спектром телекоммуникационных услуг: Интернет, телефония, IP телевидение, видеонаблюдение.
                        </p>
                        <p className="about__text">
                            Мы улучшаем качество жизни людей, предоставляя возможность свободного общения в информационном сообществе. Предлагаем самые современные Интернет технологии наивысшего качества.
                        </p>
                    </div>
                </div>
                <button className="btn">
                    Подробно о компании
                </button>
            </div>
        </section>
    );
};

export default About;