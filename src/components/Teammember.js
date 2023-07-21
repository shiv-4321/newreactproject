import React from 'react'

const Teammember = ({ image, name, designation, desc }) => {
    return <div class="col-md-4">
        <div class="team-member">
            <div class="thumb-container">
                <img src={image} alt="" />
                <div class="hover-effect">
                    <div class="hover-content">
                        <ul class="social-icons">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fa fa-behance"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="down-content">
                <h4>{name}</h4>
                <span>{designation}</span>
                <p>{desc}</p>
            </div>
        </div>
    </div>
}

export default Teammember