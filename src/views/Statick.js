import React, { Component } from 'react';

import './../css/statick.css';

class Statick extends Component{

    render(){
        
        return(
            <div>
                <div className="row text-center statick">
                    <div>
                    <div className="col-md-3">
                            <div className="statik-opt">
                                <img src="img/5.png" alt=""/>
                                <h1 className="statick-number">4069</h1>
                                <h1 className="statick-item_text">Works</h1>
                            </div>
                    </div>
                    <div className="col-md-3">
                            <div className="statik-opt_c">
                                <img src="img/6.png" alt=""/>
                                <h1 className="statick-number">3470</h1>
                                <h1 className="statick-item_text_c">Customers</h1>
                            </div>
                    </div>
                    <div className="col-md-3">
                            <div className="statik-opt">
                            <img src="img/7.png" alt=""/>
                                <h1 className="statick-number">2908</h1>
                                <h1 className="statick-item_text">Purchase</h1>
                            </div>
                    </div>
                    <div className="col-md-3">
                            <div className="statik-opt_c">
                                <img src="img/8.png" alt=""/>
                                <h1 className="statick-number">1908</h1>
                                <h1 className="statick-item_text_c">Office</h1>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Statick;