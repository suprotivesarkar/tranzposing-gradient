import React from 'react'

function Banner() {
    var styles={
        pagetop:{
            maxwidth: "100%",
             fontsize: "120%",
             overflowwrap: "break-word"
        }
    }
    return (
        <section class="section parallax-section parallax-section-padding-top-bottom-pagetop section-page-top-title">
		
        <div class="parallax-contact"></div>
    
        <div class="container">
            <div class="eight columns">
                <h1>contact</h1>
            </div>
            <div class="eight columns">
                <div id="owl-top-page-slider" class="owl-carousel owl-theme">
                    <div class="item">
                        <div class="page-top-icon">&#xf041;</div>
                        <div class="page-top-text">Kolkata, West Bengal</div>
                    </div>
                    <div class="item">
                        <div class="page-top-icon">&#xf095;</div>
                        <div class="page-top-text">+91 70033 67320<br/>+91 80176 48525</div>
                    </div>
                    <div class="item">
                        <div class="page-top-icon">&#xf1fa;</div>
                        <div class="page-top-text" style={styles.pagetop}>tranzposinggradient@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
            
    </section>	
    )
}

export default Banner
