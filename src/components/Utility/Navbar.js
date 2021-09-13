import React from "react";
import {Link} from 'react-router-dom';

function Navbar(){
    var styles={
        iconDetails:{
            height: "40px",
             width: "40px",
              float: "inline-start"
        },
        logow:{
            height: "25px",
              width: "400px"
        },
        serv:{
            width: "300px",
             padding: "0"
        },
        goback:{
            padding: "0 0 0 10px"
        }
    }
return(
    <div class="header-top">
	<header class="cd-main-header">
		<Link to="/" class="cd-logo animsition-link">
			<div class='container-new'>
				<div class="left-nav">
					<img src="images/tglogo.png" class="iconDetails" alt="tglogo" style={styles.iconDetails}/>
				</div>  
				<div class="right-nav">
					<img src="images/logo-whitebg.png" alt="Logo" style={styles.logow}/>
				</div>
			</div>
		</Link>
		<ul class="cd-header-buttons">
			<li><a class="cd-nav-trigger" href="#cd-primary-nav"><span></span></a></li>
		</ul>
	</header>
	
	<nav class="cd-nav">
		<ul id="cd-primary-nav" class="cd-primary-nav is-fixed">
			<li><Link to="/" class="animsition-link">Home</Link></li>	

			<li class="has-children">
				<a href="#" class="">Services</a>
				<ul class="cd-secondary-nav is-hidden" style={styles.serv}>
					<li class="go-back" style={styles.goback}><a href="javascript:void(0);"> Menu</a></li>
					<li><Link to="/website-development" class="animsition-link toggle-nav">Website Development</Link></li>
					<li><Link to="/designing" class="animsition-link toggle-nav">Designing</Link></li>
				</ul>
			</li>

			<li><Link to="" class="animsition-link">Blog</Link></li>
			<li><Link to="/about" class="animsition-link">About Us</Link></li>
			<li><Link to="/contact" class="animsition-link">Contact</Link></li>
		</ul>
	</nav>
</div>
);
}
export default Navbar;