import React from 'react'

const Product = ({ image, title, currency, price, description, reviews }) => {
    return (
        <div class="col-lg-4 col-md-4 all des">
            <div class="product-item">
                <a href="#"><img src={image} alt="" /></a>
                <div class="down-content">
                    <a href="#"><h4>{title}</h4></a>
                    <h6>{`${currency}${price}`}</h6>
                    <p>{description}</p>
                    <ul class="stars">
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                    </ul>
                    <span>Reviews ({reviews})</span>
                </div>
            </div>
        </div>
    )
}

export default Product