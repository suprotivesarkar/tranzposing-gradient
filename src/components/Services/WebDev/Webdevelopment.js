import React from 'react'
import Navbar from '../../Utility/Navbar'
import Socials from '../../Utility/Socials'
import Backtop from '../../Utility/Backtop'
import Footer from '../../Utility/Footer'
import Subfooter from '../../Utility/Subfooter'
import Banner from './Components/Banner'
import Intro from './Components/Intro'
import Service from './Components/Service'
import Timeline from './Components/Timeline'
import CallToAction from './Components/CallToAction'

function Webdevelopment() {
    var styles = {
        animsition:{
            animationduration: "1.5s",
             opacity: "1"
        }
    }
    return (
        <div class="animsition" style={styles.animsition}>
        {/* Socials */}
			<Socials/>
        {/* Navbar */}
			<Navbar/>
        <main class="cd-main-content">
        {/* Banner */}
        <Banner/>
        {/* Intro */}
        <Intro/>
        {/* Service */}
        <Service/>
        {/*Timeline*/}
        <Timeline/>
        {/*CalltoAction*/}
        <CallToAction/>
        {/*Footer*/}
        <Footer/>
        {/*Sub Footer */}
        <Subfooter/>
        </main>
        {/*Back-to-top*/}
		<Backtop/>
        </div>
    )
}

export default Webdevelopment
