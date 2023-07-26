import React from 'react'

const Services = ({ name, description }) => {
    return <div className="col-md-4">
        <div className="service-item">
            <div className="icon">
                <i className="fa fa-gear"></i>
            </div>
            <div className="down-content">
                <h4>{name}</h4>
                <p>{description}</p>
                <a href="#" className="filled-button">Read More</a>
            </div>
        </div>
    </div>
}

export default Services