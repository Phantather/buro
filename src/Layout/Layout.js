import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "../pages/Main/Main";
import Contact from "../pages/Contact/Contact";
import ForHome from "../pages/ForHome/ForHome";
import ForBusiness from "../pages/ForBusiness/ForBusiness";
import News from "../pages/News/News";
import Document from "../pages/Document/Document";

const Layout = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/forHome' element={<ForHome/>}/>
                <Route path='/forBusiness' element={<ForBusiness/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/document' element={<Document/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default Layout;