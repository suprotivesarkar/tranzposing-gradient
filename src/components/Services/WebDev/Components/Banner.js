import React from 'react'


function Banner() {
    var styles={
        Carosel:{
           
        }
    }
    return (
        <section class="section parallax-section parallax-section-padding-top-bottom-pagetop section-page-top-title">
		
        <div class="parallax-services-2" style={styles.Carosel}></div>
    
        <div class="container">
            <div class="eight columns">
                <h1>Website Development</h1>
            </div>
            <div class="eight columns">
                <div id="owl-top-page-slider" class="owl-carousel owl-theme">
                    <div class="item">
                        <div class="page-top-icon">&#xf121;</div>
                        <div class="page-top-text">FREE CONSULTATION</div>
                    </div>
                    <div class="item">
                        <div class="page-top-icon">&#xf06e;</div>
                        <div class="page-top-text">CUSTOMIZE YOUR OWN WEBSITE</div>
                    </div>
                    <div class="item">
                        <div class="page-top-icon">&#xf10a;</div>
                        <div class="page-top-text">SUPPORT AFTER DELIVERY</div>
                    </div>
                    <div class="item">
                        <div class="page-top-icon">&#xf083;</div>
                        <div class="page-top-text">100% RESPOINSIVE</div>
                    </div>
                    <div class="item">
                        <div class="page-top-icon">&#xf083;</div>
                        <div class="page-top-text">AMAZING PORTFOLIO</div>
                    </div>
                </div>
            </div>
        </div>
            
    </section>
    )
}

export default Banner
