import React from 'react'
import Banner from '../components/Banner'
import Team from '../components/Team'
import Services from '../components/Services'
import Partners from '../components/Partners'
import About from '../components/About'
import { usePageContext } from '../context/pageContext'

const Aboutpage = () => {
    const { services, team_members } = usePageContext();
    return <>
        {/* page-heading starts */}
        <Banner title="about us" subtitle="our company" />
        {/* page-heading ends*/}

        {/* about-features starts */}
        <About />
        {/* about-features ends */}

        {/* team-members starts */}
        <Team team_members={team_members} />
        {/* team-members ends */}


        {/* services starts */}
        <div className="services">
            <div className="container">
                <div className="row">
                    {
                        services.length && services.map((service, index) =>
                            <Services
                                name={service.name}
                                description={service.description}
                            />
                        )
                    }
                </div>
            </div>
        </div>
        {/* services ends */}


        {/* happy-clients starts here */}
        <Partners title="Happy Partners" />
        {/* happy-clients ends here */}

    </>
}

export default Aboutpage