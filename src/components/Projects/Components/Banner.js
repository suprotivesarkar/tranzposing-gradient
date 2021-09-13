import React from 'react'

function Banner() {
    var styles={
        Txt:{
            color:"black"
        }
    }
    return (
        <section class="section parallax-section parallax-section-padding-top-bottom-pagetop section-page-top-title">
		<div class="parallax-about"></div>
		<div class="container">
			<div class="eight columns">
				<h1 style={styles.Txt}>our projects</h1>
			</div>
			<div class="eight columns">
				<div id="owl-top-page-slider" class="owl-carousel owl-theme">
					<div class="item">
						<div class="page-top-icon">&#xf108;</div>
						<div class="page-top-text" style={styles.Txt}>OVER 20+ PROJECTS</div>
					</div>
					<div class="item">
						<div class="page-top-icon">&#xf121;</div>
						<div class="page-top-text" style={styles.Txt}>20000+ LINES OF CODE</div>
					</div>
					<div class="item">
						<div class="page-top-icon">&#xf188;</div>
						<div class="page-top-text" style={styles.Txt}>NO BUGS</div>
					</div>
				</div>
			</div>
		</div>
			
	</section>	
    )
}

export default Banner
