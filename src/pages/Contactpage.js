import React from 'react'
import Banner from '../components/Banner'
import Contactform from '../components/Contactform'
import Partners from '../components/Partners'
import Iframe from '../components/Iframe'

const Contactpage = () => {
    return <>
        {/* page-heading starts */}
        <Banner title="contact us" subtitle="let’s get in touch" />
        {/* find us starts here */}
        <Iframe />
        {/* find us ends here */}



        {/* send message starts here */}
        <Contactform />
        {/* send message ends here */}

        {/* happy clients starts here */}
        <Partners title="Our Happy Customers" />
        {/* happy clients ends here */}
    </>

}

export default Contactpage