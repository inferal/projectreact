import React, { Component } from 'react';

import '../../css/option.css';


class Option extends Component{

    render(){
        
        return(
            <div>
                <div className="row text-center">
                    <div>
                    <div className="col-md-3">
                            <div className="opt">
                                <img src="img/1.png" alt=""/>
                                <h4 className="item_text">personalized options</h4>
                            </div>
                    </div>
                    <div className="col-md-3">
                            <div className="opt_c">
                                <img src="img/2.png" alt=""/>
                                <h4 className="item_text">fully customizable</h4>
                            </div>
                    </div>
                    <div className="col-md-3">
                            <div className="opt">
                                <img src="img/3.png" alt=""/>
                                <h4 className="item_text">personalized options</h4>
                            </div>
                    </div>
                    <div className="col-md-3">
                            <div className="opt_c">
                                <img src="img/4.png" alt=""/>
                                <h4 className="item_text">fully customizable</h4>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Option;