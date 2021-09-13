import React from 'react'

function Map() {
    var styles={
        map:{
            display: "block",
            width:"100%",
            height:"400px"
        },
        bord:{
            border:"0",
            width: "600",
            height: "450"
        }
    }
    return (
        <section class="section">
		<div class="map" >
        <iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d266.0437747826554!2d88.36354586797884!3d22.56676533567599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d22.5667814!2d88.3635931!5e0!3m2!1sen!2sin!4v1631173174935!5m2!1sen!2sin" width="1400" height="450" allowfullscreen="" loading="lazy"></iframe>
            </div>			
        </section>
    )
}

export default Map
