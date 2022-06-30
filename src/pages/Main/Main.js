import React from 'react';
import Begin from "./Begin/Begin";
import Tarif from "./Tarif/Tarif";
import About from "./About/About";
import News from "./News/News";
import Documents from "./Documents/Documents";
import Partners from "./Partners/Partners";

const Main = () => {
    return (
        <main>
            <Begin/>
            <Tarif/>
            <About/>
            <News/>
            <Documents/>
            <Partners/>
        </main>
    );
};

export default Main;