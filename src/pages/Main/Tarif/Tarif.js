import React from 'react';
import TarifTop from "./TarifTop";
import TarifCall from "./TarifCall";
import TarifAddress from "./TarifAddress";

const Tarif = () => {


    return (
        <section className="tarif">
            <div className="container">
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

export default Tarif;