import React from 'react'

const Banner = ({ title, subtitle }) => {
    const currPath = window.location.pathname.split('/').pop();
    let class_name = "page-heading about-heading header-text";
    if ((currPath !== '') || (currPath !== undefined))
        class_name = `page-heading ${currPath}-heading header-text`;

    return (
        <div class={class_name}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-content">
                            <h4>{title}</h4>
                            <h2>{subtitle}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner