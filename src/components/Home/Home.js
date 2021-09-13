import React from 'react';
import Navbar from '../Utility/Navbar';
import Banner from './Components/Banner';
import Intro from './Components/Intro';
import Subintro from './Components/Subintro';
import Counter from './Components/Counter';
import Whyus from './Components/Whyus';
import Works from './Components/Works';
import Testimonial from './Components/Testimonial';
import Footer from '../Utility/Footer';
import Subfooter from '../Utility/Subfooter';
import Socials from '../Utility/Socials';
import Backtop from '../Utility/Backtop';
function Home() {
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
			{/*Intro 2 */}
			<Subintro/>
		{/*Counter*/}
			<Counter/>
			{/*Why Us */}
			<Whyus/>
			{/*Works*/}
			<Works/>
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
	     );
    }
export default Home;