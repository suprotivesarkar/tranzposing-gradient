import React from 'react'

function Banner() {
    var styles={
        White:{
            color: "white"
        }
    }
    return (
        <section class="section parallax-section parallax-section-padding-top-bottom-pagetop section-page-top-title">
		
			<div class="parallax-team"></div>
		
			<div class="container">
				<div class="eight columns">
					<h1 style={styles.White}>Designing</h1>
				</div>
				<div class="eight columns">
					<div id="owl-top-page-slider" class="owl-carousel owl-theme">
						<div class="item">
							<div class="page-top-icon">&#xf085;</div>
							<div class="page-top-text" style={styles.White}>STRONG VISUAL APPEAL</div>
						</div>
						<div class="item">
							<div class="page-top-icon">&#xf121;</div>
							<div class="page-top-text" style={styles.White}>UNLIMITED OPTIONS</div>
						</div>
						<div class="item">
							<div class="page-top-icon">&#xf06e;</div>
							<div class="page-top-text" style={styles.White}>AWESOME AESTHETICS</div>
						</div>
						<div class="item">
							<div class="page-top-icon">&#xf10a;</div>
							<div class="page-top-text" style={styles.White}>PROFESSIONAL DESIGNS</div>
						</div>
						<div class="item">
							<div class="page-top-icon">&#xf083;</div>
							<div class="page-top-text" style={styles.White}>EYE CATCHING GRAPHICS</div>
						</div>
					</div>
				</div>
			</div>
				
		</section>
    )
}

export default Banner
