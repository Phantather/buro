import React from 'react';
import {NavLink} from "react-router-dom";
import TarifTop from "../Main/Tarif/TarifTop";
import TarifCall from "../Main/Tarif/TarifCall";
import TarifAddress from "../Main/Tarif/TarifAddress";



const ForHome = () => {
    return (
        <section className="tarif">
            <div className="container">
                <div className="tarif__links">
                    <NavLink to={'/'} className="tarif__links-nav">
                        Главная
                    </NavLink>
                    /
                    <NavLink to={'/forHome'} className="tarif__links-nav">
                        Тарифы для дома
                    </NavLink>
                </div>
                <h2 className="title">
                    тарифы для дома
                </h2>
                <TarifTop/>
                <TarifCall/>
                <TarifAddress/>
            </div>
        </section>
    );
};

export default ForHome;