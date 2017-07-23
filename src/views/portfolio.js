import React, { Component } from 'react';

import './../css/portfolio.css';

class Portfolio extends Component{
    render(){
        return(
            <div>
             <div className="row porfolio">
                    <div className="container">
                        <h1 className="portfolio_text">Our Amazing Work</h1>
                        <hr/><hr className="hr2"/>

                        <ul className="portfolio-nav">
                            <li className="portfolio-item portfolio-active-link">All</li>
                            <li className="portfolio-item">Graphic Design</li>
                            <li className="portfolio-item">Web Design</li>
                            <li className="portfolio-item">Landing Pages</li>
                            <li className="portfolio-item">Wordpress</li>
                        </ul>
                        <table className="portfolio-table">
                        <tbody>
                            <tr><td><img src="img/portfolio/web_design.jpg" alt="web design"/></td><td><img src="img/portfolio/web_design.jpg" alt="web design"/></td><td><img src="img/portfolio/graphic_design.jpg" alt="graphic design"/></td><td><img src="img/portfolio/web_design.jpg" alt="web design"/></td></tr>
                            <tr><td><img src="img/portfolio/graphic_design.jpg" alt="graphic design"/></td><td><img src="img/portfolio/web_design.jpg" alt="web design"/></td><td><img src="img/portfolio/web_design.jpg" alt="web design"/></td><td><img src="img/portfolio/web_design.jpg" alt="web design"/></td></tr>
                            <tr><td><img src="img/portfolio/web_design.jpg" alt="web design"/></td><td><img src="img/portfolio/web_design.jpg" alt="web design"/></td><td><img src="img/portfolio/web_design.jpg" alt="web design"/></td><td><img src="img/portfolio/web_design.jpg" alt="web design"/></td></tr>
                         </tbody>                          
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;