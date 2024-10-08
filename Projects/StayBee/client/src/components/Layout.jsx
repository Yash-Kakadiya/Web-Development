import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import '../css/style.css';

export default function () {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}