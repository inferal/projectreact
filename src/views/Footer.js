import React, { Component } from 'react';

import './../css/footer.css';

class Footer extends Component{
    render(){
        return(
            <div>
                <div className="row footer">
                <h1>Copyright 2015 <span>theHam</span> | All Rights Reserved</h1>
                <div className="footer-home">
                <span className="glyphicon glyphicon-chevron-up"></span>
                </div>
                </div>
            </div>
        )
    }
}


export default Footer;