import React from 'react'
import Product from '../components/Product'
import { Link } from 'react-router-dom'
import { useProductContext } from '../context/productContext'

const Homepage = () => {
    const { products } = useProductContext();
    return <>
        {/* Banner Starts Here */}
        <div class="banner header-text">
            <div class="owl-banner owl-carousel">
                <div class="banner-item-01">
                    <div class="text-content">
                        <h4>Best Offer</h4>
                        <h2>New Arrivals On Sale</h2>
                    </div>
                </div>
                <div class="banner-item-02">
                    <div class="text-content">
                        <h4>Flash Deals</h4>
                        <h2>Get your best products</h2>
                    </div>
                </div>
                <div class="banner-item-03">
                    <div class="text-content">
                        <h4>Last Minute</h4>
                        <h2>Grab last minute deals</h2>
                    </div>
                </div>
            </div>
        </div>
        {/* Banner Ends Here */}


        {/* Latest Products Starts Here */}
        <div class="latest-products">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-heading">
                            <h2>Latest Products</h2>
                            <Link to="/products">view all products <i class="fa fa-angle-right"></i></Link>
                        </div>
                    </div>
                    {
                        products.length &&
                        products.map((product, index) =>
                            <Product
                                key={index}
                                image={product.image}
                                title={product.title}
                                currency={product.currency}
                                price={product.price}
                                description={product.description}
                                reviews={product.reviews}
                            />
                        )
                    }
                </div>
            </div>
        </div>
        {/* Latest Products Ends Here */}


        {/* Best Features Starts Here */}
        <div class="best-features">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-heading">
                            <h2>About Sixteen Clothing</h2>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="left-content">
                            <h4>Looking for the best products?</h4>
                            <p><a rel="nofollow" href="https://templatemo.com/tm-546-sixteen-clothing" target="_parent">This template</a> is free to use for your business websites. However, you have no permission to redistribute the downloadable ZIP file on any template collection website. <Link rel="nofollow" to="/contact">Contact us</Link> for more info.</p>
                            <ul class="featured-list">
                                <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="#">Consectetur an adipisicing elit</a></li>
                                <li><a href="#">It aquecorporis nulla aspernatur</a></li>
                                <li><a href="#">Corporis, omnis doloremque</a></li>
                                <li><a href="#">Non cum id reprehenderit</a></li>
                            </ul>
                            <a href="about.html" class="filled-button">Read More</a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="right-image">
                            <img src="assets/images/feature-image.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Best Features Ends Here */}


        {/* Call to Action Starts Here */}
        <div class="call-to-action">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="inner-content">
                            <div class="row">
                                <div class="col-md-8">
                                    <h4>Creative &amp; Unique <em>Sixteen</em> Products</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis amet elite author nulla.</p>
                                </div>
                                <div class="col-md-4">
                                    <a href="#" class="filled-button">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Call to Action Ends Here */}

    </>
}

export default Homepage