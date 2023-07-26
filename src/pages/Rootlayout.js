import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Rootlayout = () => {
    return <>
        <div id="preloader" >
            <div className="jumper">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

        <Header />
        <Outlet />
        <Footer />
    </>
}

export default Rootlayout