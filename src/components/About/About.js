import React from 'react'
import Navbar from '../Utility/Navbar';
import Socials from '../Utility/Socials';
import Banner from './Components/Banner';
import Testimonial from '../Home/Components/Testimonial';
import Footer from '../Utility/Footer';
import Subfooter from '../Utility/Subfooter';
import Backtop from '../Utility/Backtop';
import Subintro from './Components/Subintro';
import Team from './Components/Team';
import Skills from './Components/Skills';
function About() {
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
        {/* SubIntro */}
        <Subintro/>
        {/*Team */}
        <Team/>
        {/*Skills */}
        <Skills/>
        {/*Testimonial */}
        <Testimonial/>
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

export default About
