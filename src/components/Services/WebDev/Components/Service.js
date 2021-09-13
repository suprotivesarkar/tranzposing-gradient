import React from 'react'

function Service() {
    return (
        <section class="section white-section section-padding-top-bottom">
			<div class="container">
				<div class="sixteen columns">
					<div class="section-title">
						<h3>SERVICES WE PROVIDE</h3>
						<div class="subtitle">We design websites that deliver results, with the features you need. We take pride in the fluid, modern design of our websites.</div>
					</div>
				</div>

				<div class="clear"></div>
				<div class="eleven columns">	
					<div class="accordion">
						
							<div class="accordion_in" data-scroll-reveal="enter right move 200px over 1s after 0.3s">
								<div class="acc_head grey-section">RESPONSIVE WEB APP</div>
								<div class="acc_content gret-section">
								<p>If it isn't responsive, it isn't worth it.</p>
								</div>
							</div>
							<div class="accordion_in" data-scroll-reveal="enter right move 200px over 1s after 0.6s">
								<div class="acc_head grey-section">UI+UX DESIGNING</div>
								<div class="acc_content gret-section">
								<p>A well designed website is like a nice cup of coffee, if you brew it for a short period of time, it tastes like boiling water and if you brew it longer it's just bitter. So, our designers brew the design for the perfect period of time.</p>
								</div>
							</div>
							<div class="accordion_in" data-scroll-reveal="enter right move 200px over 1s after 0.9s">
								<div class="acc_head grey-section">PHOTOGRAPHY & CONTENT</div>
								<div class="acc_content gret-section">
								<p>Well, even though a picture can tell thousand words, sometimes it's nice to read these thousand words too. We provide the thousand words and the pictures that speaks of it.</p>
								</div>
							</div>
							<div class="accordion_in" data-scroll-reveal="enter right move 200px over 1s after 1.2s">
								<div class="acc_head grey-section">COMPLETE DELIVERY</div>
								<div class="acc_content gret-section">
								<p>Our delivery process is like enjoying a chilled beer in a warm summer evening. You cannot enjoy half of it, you have to go all in. What we deliver is not just a website link, we deliver the codebase, admin details of hosting and admin details of domain.</p>
								</div>
							</div>
						
					</div>
				</div>

			</div>
		</section>
    )
}

export default Service
