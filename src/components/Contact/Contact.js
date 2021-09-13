import React from 'react'
import Banner from './Components/Banner'
import Navbar from '../Utility/Navbar'
import Socials from '../Utility/Socials'
import Form from './Components/Form'
import Footer from '../Utility/Footer'
import Subfooter from '../Utility/Subfooter'
import Backtop from '../Utility/Backtop'
import Sociallink from './Components/Sociallink'
import Map from './Components/Map'

function Contact() {
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
            {/* Form */}
            <Form/>
            {/* Map */}
            <Map/>
            {/* Social-Icons */}
            <Sociallink/>
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

export default Contact
