import React from 'react'
import '../css/contact.css'
import PersonIcon from '@material-ui/icons/Person'
import CallIcon from '@material-ui/icons/Call'
import MailIcon from '@material-ui/icons/Mail'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined'

const ContactForm = () => (

    <div className='contact-form' id='contactUs'>
        <h2 className='contact-title'>Contact Us</h2>
        <div className="contact-us">
            <div className='address'>
                <RoomOutlinedIcon className='addr-icon'/>
                <h5>Office Address</h5>
                
                <p className='addr-para'>
                    Nalanda Nagar, 
                    <br/>
                    Nari Road,
                    <br/>
                    Near Bharat Gas Godown,
                    <br/>
                    Nagpur - 440026
                </p>
                <CallIcon className='call-icon-addr' style={{ fontSize: 20 }}/>
                <p id='phoneNo'>0712-6058612</p>
                
            </div>
            <div className="form">
                <div className="form-items">
                   
                    <input type="name" className="input" placeholder="Name" required/>
                    <PersonIcon className='contact-icon' style={{ fontSize: 20 }}/>
                </div>
                <div className="form-items">
                    <input type="text" className="input" placeholder="Mobile Number"/>
                    <CallIcon className='contact-icon' style={{ fontSize: 20 }}/>
                </div>
                <div className="form-items">
                    <input type="email" className="input" placeholder="Email"/>
                    <MailIcon className='contact-icon' style={{ fontSize: 20 }}/>
                </div>
                <div className="form-items">
                    <textarea className="input message" cols="30" rows="10" placeholder="Your enquiry"></textarea>
                </div>
            </div>
            <div className="submit-btn">
                Submit
                <i className="fas fa-arrow-right"></i>
            </div>
        </div>
        
  
    </div>

)

export default ContactForm