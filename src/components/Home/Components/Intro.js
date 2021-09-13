import React from "react";

function Intro(){
    return(
        <section class="section white-section section-padding-top" id="scroll-link">
			<div class="container">
				<div class="sixteen columns">
					<div class="section-title">
						<h2>WELCOME TO Tranzposing Gradient</h2>
						<div class="subtitle">DEVELOPING CREATIVE AND POWERFUL ONLINE EXPERIENCE<span class="subtitle-written"></span></div>
					</div>
				</div>
				<div class="sixteen columns remove-bottom" data-scroll-reveal="enter bottom move 400px over 1s after 0.1s" data-scroll-reveal-id="1"> 

					<div class="full-image">
						<img src="./images/insp-purp.png" alt=""/>
					</div>
				</div>
			</div>
		</section>
    );
}

export default Intro;