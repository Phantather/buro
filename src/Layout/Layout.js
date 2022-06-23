import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "../pages/Main/Main";
import Contact from "../pages/Contact/Contact";

const Layout = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default Layout;