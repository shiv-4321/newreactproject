import React from 'react'
import Banner from '../components/Banner'
import Product from '../components/Product'
import { useProductContext } from '../context/productContext'

const Productpage = () => {
    const { products } = useProductContext();

    return <>
        {/* page-heading starts here */}
        <Banner title="New Arrivals" subtitle="Sixteen Products" />
        {/* page-heading ends here */}

        {/* product section starts here */}
        <div className="products">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="filters">
                            <ul>
                                <li className="active" data-filter="*">All Products</li>
                                <li data-filter=".des">Featured</li>
                                <li data-filter=".dev">Flash Deals</li>
                                <li data-filter=".gra">Last Minute</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="filters-content">
                            <div className="row grid">
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
                    <div className="col-md-12">
                        <ul className="pages">
                            <li><a href="#">1</a></li>
                            <li className="active"><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#"><i className="fa fa-angle-double-right"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* product section ends here */}
    </>
}

export default Productpage