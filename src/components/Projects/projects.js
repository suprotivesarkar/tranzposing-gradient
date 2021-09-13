import React from 'react'
import Backtop from '../Utility/Backtop'
import Footer from '../Utility/Footer'
import Navbar from '../Utility/Navbar'
import Socials from '../Utility/Socials'
import Subfooter from '../Utility/Subfooter'
import Banner from './Components/Banner'
import Ourprojects from './Components/Ourprojects'

function projects() {
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
        {/* Projects */}
        <Ourprojects/>
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

export default projects
