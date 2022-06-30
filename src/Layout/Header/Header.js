import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/header/log.png'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">

                    <Link to={'/'} className="header__logo">
                        <h1>
                            <img src={logo} alt="logo"/>
                        </h1>

                    </Link>

                    <ul className="header__list">
                        <li className="header__item">
                            <Link to={'/forHome'} className="header__link">
                                Тарифы для дома
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link to={'/forBusiness'} className="header__link">
                                Тарифы для бизнеса
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link to={'/contact'} className="header__link">
                                Контакты
                            </Link>
                        </li>
                        <li className="header__item header__item-tel">
                            <svg width="16" height="24" viewBox="0 0 16 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.58071 17.9592C6.38843 17.9592 6.20402 18.0356 6.06806 18.1716C5.9321 18.3075 5.85571 18.4919 5.85571 18.6842C5.85571 18.8765 5.9321 19.0609 6.06806 19.1969C6.20402 19.3328 6.38843 19.4092 6.58071 19.4092H9.48071C9.67299 19.4092 9.8574 19.3328 9.99336 19.1969C10.1293 19.0609 10.2057 18.8765 10.2057 18.6842C10.2057 18.4919 10.1293 18.3075 9.99336 18.1716C9.8574 18.0356 9.67299 17.9592 9.48071 17.9592H6.58071Z"
                                    fill="#263057"/>
                                <path
                                    d="M3.68076 0.559204C2.91163 0.559204 2.17401 0.864739 1.63015 1.40859C1.0863 1.95245 0.780762 2.69008 0.780762 3.4592V20.8592C0.780762 21.6283 1.0863 22.366 1.63015 22.9098C2.17401 23.4537 2.91163 23.7592 3.68076 23.7592H12.3808C13.1499 23.7592 13.8875 23.4537 14.4314 22.9098C14.9752 22.366 15.2808 21.6283 15.2808 20.8592V3.4592C15.2808 2.69008 14.9752 1.95245 14.4314 1.40859C13.8875 0.864739 13.1499 0.559204 12.3808 0.559204H3.68076ZM2.23076 3.4592C2.23076 3.07464 2.38353 2.70583 2.65546 2.4339C2.92739 2.16197 3.2962 2.0092 3.68076 2.0092H12.3808C12.7653 2.0092 13.1341 2.16197 13.4061 2.4339C13.678 2.70583 13.8308 3.07464 13.8308 3.4592V20.8592C13.8308 21.2438 13.678 21.6126 13.4061 21.8845C13.1341 22.1564 12.7653 22.3092 12.3808 22.3092H3.68076C3.2962 22.3092 2.92739 22.1564 2.65546 21.8845C2.38353 21.6126 2.23076 21.2438 2.23076 20.8592V3.4592Z"
                                    fill="#263057"/>
                            </svg>
                            <div className="header__tel">
                                <a href="tel: +74725439720" className="header__tel-link">
                                    +7 (4725) 43-97-20
                                </a>
                                <p className="header__tel-text">
                                    круглосуточно
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div className="header__btns">
                        <button className="header__btn">
                            Личный кабинет
                        </button>
                        <button className="header__btn">
                            Оплатить
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;