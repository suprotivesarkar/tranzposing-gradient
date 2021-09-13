import React from 'react'
import {Link} from 'react-router-dom'
function Whyus() {
    return (
        <section class="section white-section section-padding-top-bottom">
			<div class='container-new'>
			<div class="left-new">
				<img src="images/service-1.gif" class='iconDetails'/>
			</div>  
			<div class="right-new">
			
				<div class="right-new-sub">
					<h4 class="web-build-index">Website Building</h4>
					<center class="web-build-index">
						Get your website to give your personal or business online presence and additional professional touch.
					</center>
					<br/>
					<center>
					<Link to="/website-development" class="btn btn-light build-website">Build your Website</Link>
					</center>
				</div>
			</div>
		</div>

		<div class='container-new'>
			<div class="left-new left-first">
				<img src="images/service-2.png" class='iconDetails'/>
			</div>
			<div class="right-new">
			
				<div class="right-new-sub">
					<h4 class="web-build-index">Creative Designs</h4>
					<center class="web-build-index">
						Elevate your online posts and creative artifacts with a touch from professional designers.
					</center>
					<br/>
					<center>
						<Link to="/designing" class="btn btn-light build-website">Get your Designs</Link>
					</center>
				</div>
			</div>
			<div class="left-new left-second">
				<img src="images/service-2.png" class='iconDetails'/>
			</div>
			
		</div>
	</section>
    )
}

export default Whyus;

