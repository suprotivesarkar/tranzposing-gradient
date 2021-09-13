import React from 'react'

function Testimonial() {
    return (
        <section class="section grey-section section-padding-top-bottom">
		<div class="container">
			<div class="sixteen columns">
				<div class="section-title">
					<h3>WHAT OUR CLIENTS SAY</h3>
				</div>
			</div>
			<div class="sixteen columns">
				<div id="owl-blockquotes" class="owl-carousel owl-theme">
					
						<div class="item blockquotes-1">
							<div class="arrow-right"></div>
							<img src="images/team33.jpg" alt=""/>
							<h6>Supro Sarkar</h6>
							<p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A small river named Duden flows by their place and supplies it with the necessary regelialia. Lorem ipsum dolor sit amet, consectetur adipisicing elit."</p>
							<div class="company-name">CEO Demo Company</div>
						</div>	
						<div class="item blockquotes-1">
							<div class="arrow-right"></div>
							<img src="images/team11.jpg" alt=""/>
							<h6>Demo Name</h6>
							<p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A small river named Duden flows by their place and supplies it with the necessary regelialia. Lorem ipsum dolor sit amet, consectetur adipisicing elit."</p>
							<div class="company-name">CEO Demo Company</div>
						</div>
					
				</div>	
			</div>
		</div>
	</section>
    )
}

export default Testimonial
