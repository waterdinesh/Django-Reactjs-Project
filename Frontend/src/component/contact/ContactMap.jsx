import React from 'react'
import '../contact/contactmap.css'

const ContactMap = () => {
    return (
        <>
            <div className='contactmapall'>
                <div className='contactmapleft'>
                <iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=500&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20VISIT%20US)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe>
                </div>
                <div className='contactmapright'>
                    <h1>VISIT US</h1>
                    <p>We are located in London.</p>
                    <h2>OPENING HOURS</h2>
                    <p>Mon to Fri: 7:30 am — 1:00 am
                        Sat: 9:00 am — 1:00 am</p>
                    <h2>LOCATION</h2>
                    <p>85 Royal Mint Street,
                        London, E1 8LG, UK</p>
                    <h2>GET IN TOUCH</h2>
                    <p>T: 070 9485 7568
                        info@example.com</p>
                </div>
            </div>
        </>

    )
}

export default ContactMap