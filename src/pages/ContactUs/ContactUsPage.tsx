import React from "react";
import { Header } from "../../components";
import './ContactUs.css'

export function ContactUs(){
    return(
        <>
            <Header/>

            <div className="contactContainer">
                <h1 className="contactTitle">Contact Us</h1>

                <div className="contactCard">
                    <form className="contactForm">
                    <div className="formGroup">
                        <label>Name</label>
                        <input type="text" placeholder="Enter your name" required />
                    </div>

                    <div className="formGroup">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" required />
                    </div>

                    <div className="formGroup">
                        <label>Subject</label>
                        <input type="text" placeholder="Subject" required />
                    </div>

                    <div className="formGroup">
                        <label>Message</label>
                        <textarea placeholder="Write your message" rows={4} required />
                    </div>

                    <button className="contactBtn" type="submit">
                        Send Message
                    </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactUs();