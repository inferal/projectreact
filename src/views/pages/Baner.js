import React, { Component } from 'react';

import '../../css/baner.css';

class Baner extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div>
                        <div className="baner">
                            <div className="container">
                                <h1 className="first">the ham is <span>a psd template</span></h1>
                                <h1 className="second">we are creative</h1>
                                <p>Nam varius accumsan elementum aliquam</p>
                                <button type="button" className="btn btn-success">explore now</button>
                                <button type="button" className="btn btn-info">purchase now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Baner;