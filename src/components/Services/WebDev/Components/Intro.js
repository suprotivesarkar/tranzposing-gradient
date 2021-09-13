import React from 'react'

function Intro() {
    var styles={
        minhi:{
            minheight: "252px"
        },
        boxpad:{
            padding: "0"
        }
    }
    return (
        <section class="section grey-section section-padding-top-bottom">
			<div class="container">
				<div class="sixteen columns">
					<div class="section-title">
						<h3>WHAT IS INCLUDED WITH EACH WEBSITE?</h3>
						<div class="subtitle">A <span class="subtitle-written">fully designed</span> website built using your suggestions and feedback. Three months of support to answer any questions or solve any problems without any extra charge. After the website is built, we map your website to your hosting partner along with a domain.</div>
					</div>
				</div>

				
					<div class="one-third column" data-scroll-reveal="enter left move 200px over 1s after 0.3s">
						<div class="services-boxes-2 white-section" style={styles.minhi}>
							<div class="icon-box full-icon-box"><i class="fa fa-code" aria-hidden="true" style={styles.boxpad}></i></div>
							<h6>FEEDBACK RESPONSE</h6>
							<p>A fully designed website built using your suggestions and feedback.</p>
						</div>
					</div>
					<div class="one-third column" data-scroll-reveal="enter left move 200px over 1s after 0.3s">
						<div class="services-boxes-2 white-section" style={styles.minhi}>
							<div class="icon-box full-icon-box"><i class="fa fa-coffee" aria-hidden="true" style={styles.boxpad}></i></div>
							<h6>TECHNICAL SUPPORT</h6>
							<p>Three month of support to answer any questions or solve any problems without any extra charge.</p>
						</div>
					</div>
					<div class="one-third column" data-scroll-reveal="enter left move 200px over 1s after 0.3s">
						<div class="services-boxes-2 white-section" style={styles.minhi}>
							<div class="icon-box full-icon-box"><i class="fa fa-mail-forward" aria-hidden="true" style={styles.boxpad}></i></div>
							<h6>DOMAIN MAPPING</h6>
							<p>After the website is built, we map your website to your hosting partner along with a domain or can help build you one.</p>
						</div>
					</div>
				
			</div>
		</section>
    )
}

export default Intro
