import React, { Component } from 'react';

import '../../css/option.css';

var four_option = [
        {text:"personalized options", img:"img/1.png"},
        {text:"fully customizable", img:"img/2.png"},
        {text:"unlimited support", img:"img/3.png"},
        {text:"responsive all device", img:"img/4.png"},        
    ];

class Option extends Component{
    
    constructor(props){
        super(props)
            this.state = {
                items: four_option
            }
    }

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