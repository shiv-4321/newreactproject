import React from 'react'

const Services = ({ name, description }) => {
    return <div class="col-md-4">
        <div class="service-item">
            <div class="icon">
                <i class="fa fa-gear"></i>
            </div>
            <div class="down-content">
                <h4>{name}</h4>
                <p>{description}</p>
                <a href="#" class="filled-button">Read More</a>
            </div>
        </div>
    </div>
}

export default Services