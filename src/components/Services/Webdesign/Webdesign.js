import React from 'react'
import Navbar from '../../Utility/Navbar'
import Socials from '../../Utility/Socials'
import Backtop from '../../Utility/Backtop'
import Footer from '../../Utility/Footer'
import Subfooter from '../../Utility/Subfooter'
import CallToAction from '../WebDev/Components/CallToAction'
import Banner from './Components/Banner'

function Webdesign() {
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

                {/* Call to Action */}
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

export default Webdesign
