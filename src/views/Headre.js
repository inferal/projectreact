import React, { Component } from 'react';

import Baner from './pages/Baner';

import '../css/header.css';

class Header extends Component{
    render(){
        return(
            <div>
                    <nav className="navbar navbar-default navbar-fixed-top menu">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="">
                                    <img alt="logo" src="img/logo.png"/>                                
                                </a>
                            </div>
                            <div class="navbar-collapse collapse">
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="active-link"><a href="">home</a></li>        
                                    <li><a href="">about</a></li>        
                                    <li><a href="">service</a></li>        
                                    <li><a href="">work</a></li>        
                                    <li><a href="">testimonial</a></li>        
                                    <li><a href="">blog</a></li>        
                                    <li><a href="">team</a></li>        
                                    <li><a href="">contact</a></li>        
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Baner />
            </div>
        )
    }
}

export default Header;