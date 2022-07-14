import React from 'react';
// import {ref} from "firebase/storage"
import {NavLink} from "react-router-dom";
// import {storage} from "../../firebase-config"
import TarifTop from "../Main/Tarif/TarifTop";
import TarifCall from "../Main/Tarif/TarifCall";
import TarifAddress from "../Main/Tarif/TarifAddress";

const ForBusiness = () => {



    return (
        <section className="tarif">
            <div className="container">

                <div className="tarif__links">
                    <NavLink to={'/'} className="tarif__links-nav">
                        Главная
                    </NavLink>
                    /
                    <NavLink to={'/forBusiness'} className="tarif__links-nav">
                        Тарифы для бизнеса
                    </NavLink>
                </div>
                <h2 className="title">
                    Тарифы для бизнеса
                </h2>
                <TarifTop/>
                <TarifCall/>
                <TarifAddress/>
            </div>
        </section>
    );
};

export default ForBusiness;