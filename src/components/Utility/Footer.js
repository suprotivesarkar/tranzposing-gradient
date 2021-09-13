import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
    var styles={
        email:{
            texttransform: "lowercase"
        }
    }
    return (
        <section class="section footer-1 section-padding-top-bottom">	
		<div class="container">
			<div class="four columns" data-scroll-reveal="enter left move 200px over 0.5s after 0.8s" data-scroll-reveal-id="11">
				<a href="index.html" class="animsition-link"><img src="images/logo-blackbg.png" alt="Logo"/></a>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A small river named Duden flows by.</p>
			</div>
			<div class="four columns" data-scroll-reveal="enter bottom move 200px over 0.5s after 0.3s" data-scroll-reveal-id="12">
				<h6><i class="icon-footer">&#xf041;</i>KRALJEVO</h6>
				<p>NIKOLE TESLE 41, SERBIA<br/>
					+381 602037802<br/>+381 602037802</p>
			</div>		
				<div class="four columns" data-scroll-reveal="enter bottom move 200px over 0.5s after 0.3s" data-scroll-reveal-id="12">
					<p><Link to="/">Home</Link></p>
					<p><Link to="">Blog</Link></p>
					<p><Link to="/about">About Us</Link></p>
					<p><Link to="/contact">Contact Us</Link></p>
					<p><Link to="/projects">Our Projects</Link></p>
					<p><Link to="">Site Map</Link></p>
			</div>
			<div class="four columns" data-scroll-reveal="enter right move 200px over 0.5s after 0.8s" data-scroll-reveal-id="14">
				<div class="social-bottom">
					<ul class="list-social">
						<li class="icon-soc">
							<a href="javascript:void(0);" target="_blank">&#xf09a;</a>
						</li>
						<li class="icon-soc">
							<a href="javascript:void(0);" target="_blank">&#xf16d;</a>
						</li>
						<li class="icon-soc">
							<a href="javascript:void(0);" target="_blank">&#xf099;</a>
						</li>
						<li class="icon-soc">
							<a href="javascript:void(0);" target="_blank">&#xf16a;</a>
						</li>
						<li class="icon-soc">
							<a href="javascript:void(0);" target="_blank">&#xf0e1;</a>
						</li>
					</ul>	
				</div>
				<p><i class="icon-footer">&#xf0e0;</i><a href="javascript:void(0);" style={styles.email}>demomail12345@email.com</a></p>
			</div>	
		</div>
	</section>
    )
}

export default Footer
