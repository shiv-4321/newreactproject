import React from 'react'

const Product = ({ image, title, currency, price, description, reviews }) => {
    return (
        <div className="col-lg-4 col-md-4 all des">
            <div className="product-item">
                <a href="#"><img src={image} alt="" /></a>
                <div className="down-content">
                    <a href="#"><h4>{title}</h4></a>
                    <h6>{`${currency}${price}`}</h6>
                    <p>{description}</p>
                    <ul className="stars">
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                    </ul>
                    <span>Reviews ({reviews})</span>
                </div>
            </div>
        </div>
    )
}

export default Product