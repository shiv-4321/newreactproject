import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return <header class="">
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <NavLink to="/" className='navbar-brand'><h2>Sixteen <em>Clothing</em></h2></NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                                <span class="sr-only">(current)</span>
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/products">Our Products</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/about">About Us</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
}

export default Header