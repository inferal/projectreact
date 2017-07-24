import React, { Component } from 'react';

import './../css/contact.css';

class Contact extends Component{
    render(){
        return(
            <div>
                <div className="row contact">
                    <div className="col-md-6 contact-img">
                        <img src="" alt="" />
                    </div>
                    <div className="col-md-6">
                         <h1>Keep In Touch</h1>
                         <hr className="contact-hr1"/><hr className="contact-hr2"/>
                         <div className="row contact-item">
                            <div className="contact-mesage">
                                <input type="text" className="contact-input" placeholder="Name"/>
                                <input type="text" className="contact-input" placeholder="Title"/>                                
                                <textarea type="text" cols="560" className="contact-textarea" placeholder="Message"></textarea>
                            </div>
                            <div className="contact-btn">
                                <button className="contact-button" type="button">send request</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;