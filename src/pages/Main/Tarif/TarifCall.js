import React from 'react';

const TarifCall = () => {
    return (
        <div className="tarif__call">
            <h3 className="tarif__call-title">
                Трудно выбрать? Мы поможем!
            </h3>
            <form action="" className="tarif__call-form">
                <div className="tarif__call-block">
                    <input className="tarif__call-input" type="text" placeholder="+7 (___) ___-__-__ *"/>
                    <input className="tarif__call-input" type="text" placeholder="Как Вас зовут? *"/>
                    <button className="tarif__call-btn" type="button">
                        Жду звонка
                    </button>
                </div>
                <div className="tarif__call-block2">
                    <input type="checkbox" className="tarif__call-check"/>
                    <p className="tarif__call-text">
                        Нажимая на кнопку, я даю согласие на обработку персональных данных
                    </p>
                </div>

            </form>
        </div>
    );
};

export default TarifCall;