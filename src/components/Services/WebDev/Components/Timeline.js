import React from 'react'

function Timeline() {
    return (
        <section class="section white-section section-padding-top-bottom">
			<div class="container">
				<div class="sixteen columns">
					<div class="section-title">
						<h3>THIS IS HOW WE DO IT!</h3>
						<div class="subtitle">Carefully <span class="subtitle-written">crafted elements</span> come together into one amazing design.</div>
					</div>
				</div>
				<div class="sixteen columns">
					<div id="cd-timeline" class="cd-container">
						<div class="cd-timeline-block">
							<div class="cd-timeline-img">&#xf0eb;</div>

							<div class="cd-timeline-content">
								<h6>IDEA</h6>
								<p>Before we start our journey together, it's good to have an idea of where we are heading. So, in this phase we ideate about the product.
									The ideation is done over a consultation session(free of cost) with our clients.</p>
								
								<span class="cd-date">20%</span>
							</div>
						</div> 

						<div class="cd-timeline-block">
							<div class="cd-timeline-img">&#xf200;</div>

							<div class="cd-timeline-content">
								<h6>CONCEPT</h6>
								<p>After ideating, we conceptualize a solution fulfilling your need.</p>
								
								<span class="cd-date">40%</span>
							</div>
						</div> 

						<div class="cd-timeline-block">
							<div class="cd-timeline-img">&#xf0d0;</div>

							<div class="cd-timeline-content">
								<h6>DESIGN</h6>
								<p>Even the best of solutions won’t be useful if they aren’t well designed to have a strong visual and aesthetic appeal and strong technical stance.</p>
								
								<span class="cd-date">60%</span>
							</div>
						</div> 

						<div class="cd-timeline-block">
							<div class="cd-timeline-img">&#xf085;</div>

							<div class="cd-timeline-content">
								<h6>DEVELOP</h6>
								<p>Now it's time to get our hands dirty and develop the real product.</p>
								
								<span class="cd-date">80%</span>
							</div>
						</div> 

						<div class="cd-timeline-block">
							<div class="cd-timeline-img">&#xf201;</div>

							<div class="cd-timeline-content">
								<h6>TEST</h6>
								<p>Testing the product to meet the requirements is a very crucial part of the development. So we test, test and then do some more tests until our customer is satisfied</p>
								
								<span class="cd-date">100%</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default Timeline
