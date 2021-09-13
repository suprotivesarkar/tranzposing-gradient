import React from "react";

function Counter(){
    var styles={
        counter:{
            backgroundposition: "50% 91px"
        }
    }
    return(
        <section class="section parallax-section parallax-section-padding-top-bottom">
		
		<div class="parallax-1" style={styles.counter}></div>	
		
		<div class="container">
			<div class="container">
				<div class="four columns">
					<div class="facts-box-1">
						<div class="facts-box-1-num"><span class="counter">12</span><div class="line"></div></div>
						<h6>FINISHED PROJECTS</h6> 
					</div>
				</div>
				<div class="four columns">
					<div class="facts-box-1">
						<div class="facts-box-1-num"><span class="counter">20000</span><div class="line"></div></div>
						<h6>LINES OF CODE</h6> 
					</div>
				</div>
				<div class="four columns">
					<div class="facts-box-1">
						<div class="facts-box-1-num"><span class="counter">102</span><div class="line"></div></div>
						<h6>CUPS OF COFFEE</h6> 
					</div>
				</div>
				<div class="four columns">
					<div class="facts-box-1">
						<div class="facts-box-1-num"><span class="counter">52</span><div class="line"></div></div>
						<h6>CUSTOM COUNTERS</h6> 
					</div>
				</div>
			</div>
		</div>
	</section>
    );
}
export default Counter;