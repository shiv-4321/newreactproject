import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Errorpage = () => {
    return <>
        <Header />
        <div class="page-heading about-heading header-text">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="text-content">
                            <h4>Sorry, The page you are looking for is not found.</h4>
                            <h2>404 Not Found</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default Errorpage