import React from 'react'

function Socials() {
    var styles={
        showdiv:{
            display: "block"
        }
    }
    return (
        <div>
            	    <div id="switch">
        <div class="content-switcher">        
			<p class="links">Social Media</p>
			<ul class="list-social">
				<li class="icon-soc">
					<a href="javascript:void(0);" target="_blank">&#xf09a;</a>
				</li>
				<li class="icon-soc">
					<a href="javascript:void(0);" target="_blank">&#xf16d;</a>
				</li>
				<li class="icon-soc">
					<a href="javascript:void(0);" target="_blank">&#xf099;</a>
				</li>
				<li class="icon-soc">
					<a href="javascript:void(0);" target="_blank">&#xf16a;</a>
				</li>
				<li class="icon-soc">
					<a href="javascript:void(0);" target="_blank">&#xf0e1;</a>
				</li>
				<li class="icon-soc">
					<a href="javascript:void(0);" target="_blank">&#xf232;</a>
				</li>
			</ul>
			<div class="clear"></div>
			<div id="hide">
				<img src="../images/close.png" alt=""/>
			</div>
        </div>
	</div>
	<div id="show" style={styles.showdiv}>
        <div id="setting"></div>
    </div>
        </div>
    )
}

export default Socials
