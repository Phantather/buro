import React from 'react';
import TarifTop from "./TarifTop";

const Tarif = () => {
    return (
        <section className="tarif">
            <div className="container">
                <h2 className="tarif__title">
                    тарифы для дома
                </h2>
                <TarifTop/>
            </div>
        </section>
    );
};

export default Tarif;