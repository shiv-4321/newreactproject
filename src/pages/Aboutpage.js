import React from 'react'
import Banner from '../components/Banner'
import Team from '../components/Team'
import Services from '../components/Services'

const Aboutpage = () => {
    return <>
        {/* page-heading starts */}
        <Banner title="about us" subtitle="our company" />
        {/* page-heading ends*/}

        {/* about-features starts */}
        <div class="best-features about-features">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-heading">
                            <h2>Our Background</h2>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="right-image">
                            <img src="assets/images/feature-image.jpg" alt="" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="left-content">
                            <h4>Who we are &amp; What we do?</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis.</p>
                            <ul class="social-icons">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fa fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* about-features ends */}

        {/* team-members starts */}
        <Team />
        {/* team-members ends */}


        {/* services starts */}
        <div class="services">
            <div class="container">
                <div class="row">

                    <Services 
                        name="Product Management"
                        description="Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat."
                    />
                    <Services 
                        name="Product Management"
                        description="Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat."
                    />
                    <Services 
                        name="Global Collection"
                        description="Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat."
                    />
                </div>
            </div>
        </div>
        {/* services ends */}


        {/* happy-clients starts here */}
        <div class="happy-clients">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-heading">
                            <h2>Happy Partners</h2>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="owl-clients owl-carousel">
                            <div class="client-item">
                                <img src="assets/images/client-01.png" alt="1" />
                            </div>

                            <div class="client-item">
                                <img src="assets/images/client-01.png" alt="2" />
                            </div>

                            <div class="client-item">
                                <img src="assets/images/client-01.png" alt="3" />
                            </div>

                            <div class="client-item">
                                <img src="assets/images/client-01.png" alt="4" />
                            </div>

                            <div class="client-item">
                                <img src="assets/images/client-01.png" alt="5" />
                            </div>

                            <div class="client-item">
                                <img src="assets/images/client-01.png" alt="6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* happy-clients ends here */}

    </>
}

export default Aboutpage