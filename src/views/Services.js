import React, { Component } from 'react';

import './../css/services.css';

class Services extends Component{
    render(){
        return(
            <div>
                <div className="row service">
                    <div className="container">
                        <h1 className="services_text">Our Services</h1>
                        <hr/><hr className="hr2"/>

                        <ul className="services-nav">
                            <li className="services-item">Web Disign</li>
                            <li className="services-item">Graphic Design</li>
                            <li className="services-item">Online Support</li>
                            <li className="services-item">App Design</li>
                            <li className="services-item">Online Marketing</li>
                            <li className="services-item">Seo Service</li>
                        </ul>
                        <div className="row">
                        <div className="col-md-2 services-img">
                        <img src="" alt="" width="194" height="140"/>
                        </div>
                        <div className="col-md-10 services-par">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum. 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum. 
                        Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, 
                        consectetur adip isicing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Excepteur sint occaecat cupidatat
                         non proident, sunt in culpa qui officia deserunt mollit anim id 
                         est laborum.</p>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Services;