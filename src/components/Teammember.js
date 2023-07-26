import React from 'react'

const Teammember = ({ image, name, designation, desc }) => {
    return <div className="col-md-4">
        <div className="team-member">
            <div className="thumb-container">
                <img src={image} alt="" />
                <div className="hover-effect">
                    <div className="hover-content">
                        <ul className="social-icons">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fa fa-behance"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="down-content">
                <h4>{name}</h4>
                <span>{designation}</span>
                <p>{desc}</p>
            </div>
        </div>
    </div>
}

export default Teammember