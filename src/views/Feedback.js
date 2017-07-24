import React, { Component } from 'react';

import './../css/feedback.css';

class Feedback extends Component{
    render(){
        return(
            <div>
                <div className="row feedback">
                    <div className="container">
                        <h1 className="feedback_text">Feedback</h1>
                        <hr/><hr className="hr2"/>

                        <div className="feedback-box">

                        </div>
                        <div className="row feedback-item">
                        <div className="col-md-3 col-md-offset-2 feedblack-mesage">
                            <input type="text" className="feadblack-input" placeholder="Title"/>
                            <textarea type="text" cols="560" className="feedback-textarea" placeholder="Message"></textarea>
                        </div>
                        <div className="col-md-4 col-md-offset-3 feedback-btn">
                            <h2>Leave us a message</h2>
                            <button className="feedback-button" type="button"><span className="glyphicon glyphicon-plus"></span> add comment </button>

                        </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        )
    }
}

export default Feedback;