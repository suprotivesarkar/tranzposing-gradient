import React from "react";

function Banner(){
    var styles={
        Landing:{
            zindex: "500",
            maxwidth: "auto",
            maxheight: "auto",
            whitespace: "nowrap",
        }
    }
return(
	<section class="home">
		
		<a href="#scroll-link" class="arrow-down scroll">&#xf103;</a>

		<div class="slider-container">
			<div class="tp-banner-container">
				<div class="tp-banner" >
					<ul>
						<li data-transition="fade" data-slotamount="1" data-masterspeed="500"  data-saveperformance="on"  data-title="Intro Slide">

							<img src="images/1.jpg"  alt="slidebg1" data-lazyload="images/1.jpg" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat"/>
							
								<div class="tp-caption black-heavy randomrotate tp-resizeme"
									data-speed="200"
									data-start="300"
									data-easing="Power3.easeInOut"
									data-elementdelay="0.1"
									data-endelementdelay="0.1"
									style={styles.Landing}>
									<span class="border-text">Digital Experiences</span>
								</div>
								<div class="tp-caption color-small randomrotate tp-resizeme"
									data-speed="200"
									data-start="300"
									data-easing="Power3.easeInOut"
									data-splitin="chars"
									data-splitout="none"
									data-elementdelay="0.1"
									data-endelementdelay="0.1"
									style={styles.Landing}>
									That Build Our Brands
								</div>

						</li>
						<li data-transition="fade" data-slotamount="1" data-masterspeed="500"  data-saveperformance="on"  data-title="Intro Slide">

							<img src="images/2.jpg"  alt="slidebg2" data-lazyload="images/2.jpg" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat"/>
							
								<div class="tp-caption black-heavy randomrotate tp-resizeme"
									data-speed="200"
									data-start="300"
									data-easing="Power3.easeInOut"
									data-elementdelay="0.1"
									data-endelementdelay="0.1"
									style={styles.Landing}>
									<span class="border-text">YOU'VE PROBABLY NOTICED</span>
								</div>
								<div class="tp-caption color-small randomrotate tp-resizeme"
									data-speed="200"
									data-start="300"
									data-easing="Power3.easeInOut"
									data-splitin="chars"
									data-splitout="none"
									data-elementdelay="0.1"
									data-endelementdelay="0.1"
									style={styles.Landing}>
									We Love What We Do
								</div>

						</li>
						<li data-transition="fade" data-slotamount="1" data-masterspeed="500"  data-saveperformance="on"  data-title="Intro Slide">

							<img src="images/3.jpg"  alt="slidebg3" data-lazyload="images/3.jpg" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat"/>
							
								<div class="tp-caption black-heavy randomrotate tp-resizeme"
									data-speed="200"
									data-start="300"
									data-easing="Power3.easeInOut"
									data-elementdelay="0.1"
									data-endelementdelay="0.1"
									style={styles.Landing}>
									<span class="border-text">Inspired By Purpose</span>
								</div>
								<div class="tp-caption color-small randomrotate tp-resizeme"
									data-speed="200"
									data-start="300"
									data-easing="Power3.easeInOut"
									data-splitin="chars"
									data-splitout="none"
									data-elementdelay="0.1"
									data-endelementdelay="0.1"
									style={styles.Landing}>
									Driven By Passion
								</div>

						</li>
					</ul>
				</div>
			</div>
		</div>
		
	</section>
)
}
export default Banner;