import React from 'react'

function Skills() {
    return (
        <section class="section grey-section section-padding-top-bottom">
		<div class="container">
			<div class="sixteen columns">
				<div class="section-title">
					<h3>our skills</h3>
				</div>
			</div>
			
			<div class="eight columns">	
				<div class="accordion">			
						<div class="accordion_in" data-scroll-reveal="enter left move 200px over 1s after <%= (i+1)*0.3 %>s">
							<div class="acc_head white-section">COMPLETE DELIVERY</div>
							<div class="acc_content white-section">
							<p>Our delivery process is like enjoying a chilled beer in a warm summer evening. You cannot enjoy half of it, you have to go all in. What we deliver is not just a website link, we deliver the codebase, admin details of hosting and admin details of domain.</p>
							</div>
						</div>
						<div class="accordion_in" data-scroll-reveal="enter left move 200px over 1s after <%= (i+1)*0.3 %>s">
							<div class="acc_head white-section">PHOTOGRAPHY & CONTENT</div>
							<div class="acc_content white-section">
							<p>Well, even though a picture can tell thousand words, sometimes it's nice to read these thousand words too. We provide the thousand words and the pictures that speaks of it.</p>
							</div>
						</div>
						<div class="accordion_in" data-scroll-reveal="enter left move 200px over 1s after <%= (i+1)*0.3 %>s">
							<div class="acc_head white-section">UI+UX DESIGNING</div>
							<div class="acc_content white-section">
							<p>A well designed website is like a nice cup of coffee, if you brew it for a short period of time, it tastes like boiling water and if you brew it longer it's just bitter. So, our designers brew the design for the perfect period of time.</p>
							</div>
						</div>
				</div>
			</div>
			
			<div class="eight columns skills-in-box white-section">
			
				
					<div class="skills-name">MERN STACK</div>
					<div class="pro-bar-container pro-bar-margin">					
						<div class="pro-bar bar-95" data-pro-bar-percent="95"></div>
						<div class="text-in-bar"><span class="counter-skills">95</span>%</div>
						<div class="arrow-skills"></div>
					</div>
					<div class="skills-name">DJANGO</div>
					<div class="pro-bar-container pro-bar-margin">					
						<div class="pro-bar bar-92" data-pro-bar-percent="92"></div>
						<div class="text-in-bar"><span class="counter-skills">92</span>%</div>
						<div class="arrow-skills"></div>
					</div>
					<div class="skills-name">HOSTING PLATFORMS LIKE (HEROKU, FIREBASE, AWS ETC.)</div>
					<div class="pro-bar-container pro-bar-margin">					
						<div class="pro-bar bar-90" data-pro-bar-percent="90"></div>
						<div class="text-in-bar"><span class="counter-skills">90</span>%</div>
						<div class="arrow-skills"></div>
					</div>
					<div class="skills-name">GRAPHIC DESIGN</div>
					<div class="pro-bar-container pro-bar-margin">					
						<div class="pro-bar bar-87" data-pro-bar-percent="87"></div>
						<div class="text-in-bar"><span class="counter-skills">87</span>%</div>
						<div class="arrow-skills"></div>
					</div>
				
				
			</div>
			
		</div>
	</section>
    )
}

export default Skills
