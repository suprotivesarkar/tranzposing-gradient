import React from 'react'

function Subintro() {
    return (
        <section class="section grey-section section-padding-top-bottom">
        <div class="container">
            <div class="one-third column" data-scroll-reveal="enter left move 200px over 1s after 0.3s" data-scroll-reveal-id="1">
                <div class="services-boxes-1">
                    <div class="icon-box"></div>
                    <h6>OUR MISSION</h6>
                    <p>Our mission is to provide a clutter free, well designed, solution to our customer in all their digital needs.</p>
                </div>
            </div>
            <div class="one-third column" data-scroll-reveal="enter bottom move 200px over 1s after 0.3s" data-scroll-reveal-id="2">
                <div class="services-boxes-1">
                    <div class="icon-box"></div>
                    <h6>WHY US</h6>
                    <p>Well we aren't the best, but like a true startup we are dedicated, we don't work just to make the product. We work until our client smiles</p>
                </div>
            </div>
            <div class="one-third column" data-scroll-reveal="enter right move 200px over 1s after 0.3s" data-scroll-reveal-id="3">
                <div class="services-boxes-1">
                    <div class="icon-box"></div>
                    <h6>WHAT WE DO</h6>
                    <p>We provide a wide range of services from Web App Development to Designing all kind of digits artefacts for your business</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Subintro
