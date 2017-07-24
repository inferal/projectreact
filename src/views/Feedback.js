import React, { Component } from 'react';

import './../css/feedback.css';

class Feedback extends Component{
    render(){
        return(
            <div>
                <div className="row news">
                    <div className="container">
                        <h1 className="news_text">Feedback</h1>
                        <hr/><hr className="hr2"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feedback;