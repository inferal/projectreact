import React, { Component } from 'react';

import './../css/about.css';

class About extends Component{

    constructor(){
        super()
        this.state = {
            progressState: 60,
            progressState1: 80,
            progressState2: 60,
            progressState3: 85
            
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.increaseProgress(10)
        },400)
    }

    increaseProgress(value){
        this.setState({progressState: this.state.progressState + value})
    }
    
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
                         <div className="progress">
                            <div className="progress-bar user" style={{width: `${this.state.progressState}%`}}>
                               user interface
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar web"  style={{width: `${this.state.progressState1}%`}}>
                              web design
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar word" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: `${this.state.progressState2}%`}}>
                              wordpress
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar html" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: `${this.state.progressState3}%`}}>
                              html & css
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar app-design" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: `${this.state.progressState1}%`}}>
                              app design
                            </div>
                        </div>
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