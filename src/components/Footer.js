import React from 'react'

const Footer = () => {
    return <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="inner-content">
                        <p>Copyright &copy; {new Date().getFullYear()} Sixteen Clothing Co., Ltd.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer