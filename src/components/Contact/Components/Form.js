import React from 'react'

function Form() {
    var styles={
        disp:{
            display: "none"
        }
    }
    return (
        	
		<section class="section white-section section-padding-top-bottom">		
        <div class="container">
            <div class="sixteen columns">
                <div class="section-title">
                    <h3>Get in touch!</h3>
                    <p>
                        <center>
                            Our team is here to help you with any questions you may have. If you have a project with unique requirements, or would like a quote for your web development plan, feel free to contact us. We are happy to help you.
                        </center>
                    </p>
                </div>
            </div>
        
            <div class="clear"></div>
            
            <form name="ajax-form" id="ajax-form" action="/" method="post">
                <div class="eight columns">
                    <label for="name"> 
                        <span class="error" id="err-name">please enter name</span>
                    </label>
                    <input name="name" id="name" type="text" placeholder="Your Name: *"/>
                </div>
                <div class="eight columns">
                    <label for="email"> 
                        <span class="error" id="err-email">please enter e-mail</span>
                        <span class="error" id="err-emailvld">e-mail is not valid</span>
                    </label>
                    <input name="email" id="email" type="text" placeholder="E-Mail: *"/>
                </div>
                <div class="sixteen columns">
                    <label for="message"></label>
                    <textarea name="message" id="message" placeholder="Tell Us Everything"></textarea>
                </div>
                <div class="sixteen columns">
                    <div class="but-cont"><button class="button-con" id="send" onclick="sendEmail()">SUBMIT</button></div>
                </div>
                <div class="clear"></div>	
                <div class="error text-align-center" id="err-form">Fields marked with * are mandatory</div>
                <div class="error text-align-center" id="err-timedout">The connection to the server timed out!</div>
                <div id="received" style={styles.disp}>We have received your message!</div>
            </form>	
            
            <div class="clear"></div>
            
            <div id="ajaxsuccess">Successfully Sent!</div>	
            
        </div>

        {/* <script>

            function sendEmail() {
                var templateParams = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value

            };
            
            if((document.getElementById("name").value.length != 0)&&(document.getElementById("email").value.length != 0)){
                emailjs.send('service_5a4yp1j', 'template_qhvkhgb', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    document.getElementById("send").disabled = 'true';
                    document.getElementById("received").style.display = "flex";
                }, function(error) {
                    console.log('FAILED...', error);
                });
            }
            
            }

        </script> */}

        <div class="clear"></div>
            
    </section>
    )
}

export default Form
