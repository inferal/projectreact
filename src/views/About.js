import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

import './../css/about.css';

class About extends Component{
    render(){
        return(
            <div>
                <div className="row about">
                <div className="container">
                    <div className="col-md-6 about-img">
                        <img src="" alt="" />
                    </div>
                    <div className="col-md-6 about-item">
                         <h1>About Our Company</h1>
                         <hr className="about-hr1"/><hr className="about-hr2"/>
                         <div className="row">
                         <ul className="nav navbar-nav about-link">
                             <li><a href="">our history</a></li>
                             <li><a href="">our biography</a></li>
                             <li className="about-active-link"><a href="">our skills</a></li>
                         </ul>
                          <div className="about-progress">
                            <ProgressBar className="progress" bsStyle="success" now={40} label="User Interface"/>
                            <ProgressBar bsStyle="info" now={20} />
                            <ProgressBar bsStyle="warning" now={60} />
                            <ProgressBar bsStyle="danger" now={80} />
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default About;