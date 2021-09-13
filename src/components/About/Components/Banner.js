import React from 'react'

function Banner() {
    var styles={
        Txt:{
            color: "Black"
        }
    }
    return (
        <section class="section parallax-section parallax-section-padding-top-bottom-pagetop section-page-top-title">
		
		<div class="parallax-about"></div>
	
		<div class="container">
			<div class="eight columns">
				<h1 style={styles.Txt}>about us</h1>
			</div>
			<div class="eight columns">
				<div id="owl-top-page-slider" class="owl-carousel owl-theme">
					<div class="item">
						<div class="page-top-icon">&#xf002;</div>
						<div class="page-top-text" style={styles.Txt}>ATTENTION TO DETAILS.</div>
					</div>
					<div class="item">
						<div class="page-top-icon">&#xf121;</div>
						<div class="page-top-text" style={styles.Txt}>MODERN DESIGNS</div>
					</div>
					<div class="item">
						<div class="page-top-icon">&#xf183;</div>
						<div class="page-top-text" style={styles.Txt}>12 team members</div>
					</div>
					<div class="item">
						<div class="page-top-icon">&#xf183;</div>
						<div class="page-top-text" style={styles.Txt}>VISUALLY AESTHETIC</div>
					</div>
				</div>
			</div>
		</div>
			
	</section>	
    )
}

export default Banner
