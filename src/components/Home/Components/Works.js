import React from 'react'
import { Link } from 'react-router-dom'

function Works() {
    return (
        <section class="section grey-section section-padding-top">
        <div class="container">
            <div class="sixteen columns">
                <div class="section-title">
                    <h3>OUR LATEST WORKS</h3>
                    <div class="subtitle">WE ARE <span class="subtitle-written">Clymene</span> CREATIVE AGENCY.</div>
                </div>
            </div>
        </div>
        <div class="portfolio-wrap-1">
            <a href="slider-project.html" class="animsition-link">
                <div class="portfolio-box-1">
                    <div class="mask-1"></div>
                    <img src="assets/portfolio/1.jpg" alt=""/>
                    <h6>holy sadie</h6>
                </div>
            </a>
            <a href="video-project.html" class="animsition-link">
                <div class="portfolio-box-1">
                    <div class="mask-1"></div>
                    <img src="assets/portfolio/2.jpg" alt=""/>
                    <h6>dreamy honey</h6>
                </div>
            </a>
            <a href="gallery-project.html" class="animsition-link">
                <div class="portfolio-box-1">
                    <div class="mask-1"></div>
                    <img src="assets/portfolio/3.jpg" alt=""/>
                    <h6>crazy layla</h6>
                </div>
            </a>
            <a href="parallax-project.html" class="animsition-link">
                <div class="portfolio-box-1">
                    <div class="mask-1"></div>
                    <img src="assets/portfolio/4.jpg" alt=""/>
                    <h6>creative zoe</h6>
                </div>
            </a>
        </div>
        <div class="call-to-action-1">
            <div class="action-top-1">over 80 finished projects</div>
            <h5>ALL WORKS</h5>
            <Link to="/projects" class="button-1 animsition-link">Discover</Link>
        </div>
    </section>
    )
}

export default Works
