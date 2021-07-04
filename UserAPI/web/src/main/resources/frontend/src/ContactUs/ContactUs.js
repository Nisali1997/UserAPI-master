import React from 'react';
import axios from 'axios';

class ContactUs extends React.Component{
   

    render() {
        return (
             <div>
                 <h1>CONTACT US</h1>

                 

                 <div class="container">
  <div class="row">
    <div class="col">
    <h3>Address</h3>
                <address>SLIIT, New Kandy Road, Malabe, Sri Lanka</address>
    </div>
    <div class="col order-5">
    <h3>Phone Number</h3>
                <p><a href="tel:+94 11 7544806">+94 11 7544806</a></p>
    </div>
    <div class="col order-1">
    <h3>Email</h3>
                <p><a href="mailto:info@icac.lk">info@icac.lk</a></p>
    </div>
  </div>
</div>
                 {/* <div className="raw contact-info">
                     <div className="col-md-4">
                     <div class="contact-address">
                <i class="ion-ios-location-outline"></i>
                <h3>Address</h3>
                <address>SLIIT, New Kandy Road, Malabe, Sri Lanka</address>
              </div>
                     </div>

                     <div class="col-md-4">
              <div class="contact-phone">
                <i class="ion-ios-telephone-outline"></i>
                <h3>Phone Number</h3>
                <p><a href="tel:+94 11 7544806">+94 11 7544806</a></p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="contact-email">
                <i class="ion-ios-email-outline"></i>
                <h3>Email</h3>
                <p><a href="mailto:info@icac.lk">info@icac.lk</a></p>
              </div>
            </div>  
                 </div> */}
                 
             </div>
        );
    }
}

export default ContactUs