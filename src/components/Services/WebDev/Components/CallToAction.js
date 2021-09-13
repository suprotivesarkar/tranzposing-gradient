import React from 'react'
import { Link } from 'react-router-dom'

function CallToAction() {
    var styles={
        callto:{
            width: "420px",
            margin: "15px 0",
        }
    }
    return (
        <section class="section grey-section">
			<center>
				<Link to="/contact" class="btn btn-light" style={styles.callto}>Book Your Free Consultation Now</Link>
			</center>
		</section>
    )
}

export default CallToAction
