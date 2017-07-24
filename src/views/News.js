import React, { Component } from 'react';

import './../css/news.css';

class News extends Component{
    render(){
        return(
            <div>
                <div className="row news">
                    <div className="container">
                        <h1 className="news_text">Breaking News</h1>
                        <hr/><hr className="hr2"/>
                        <div className="row news-blog">
                        <div className="col-sm-6 col-md-3">
                            <div className="news-thumbnail">
                            <div className="news-date">
                                <img src="img/team/Al Masum.jpg" alt="Al Masum"/>
                                    <h3>12 <br/>Feb</h3>                                    
                            </div>
                            <div className="news-caption">
                                <h3>Amazing Image Post</h3>
                             </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3">
                            <div className="news-thumbnail">
                            <div className="news-date">
                                <img src="img/team/Al Masum.jpg" alt="Al Masum"/>
                                    <h3>12 <br/>Feb</h3>                                    
                            </div>
                            <div className="news-caption">
                                <h3>Amazing Blog Post</h3>
                             </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="news-thumbnail">
                            <div className="news-date">
                                <img src="img/team/Al Masum.jpg" alt="Al Masum"/>
                                    <h3>12 <br/>Feb</h3>                                    
                            </div>
                            <div className="news-caption">
                                <h3>Amazing Image Post</h3>
                             </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3">
                            <div className="news-thumbnail">
                            <div className="news-date">
                                <img src="img/team/Al Masum.jpg" alt="Al Masum"/>
                                    <h3>12 <br/>Feb</h3>                                    
                            </div>
                            <div className="news-caption">
                                <h3>Amazing Blog Post</h3>
                             </div>
                            </div>
                        </div>
                        </div>    
                        
                        <div className="row news-blog">
                        <div className="col-sm-6 col-md-3">
                            <div className="news-thumbnail">
                            <div className="news-date">
                                <img src="img/team/Al Masum.jpg" alt="Al Masum"/>
                                    <h3>12 <br/>Feb</h3>                                    
                            </div>
                            <div className="news-caption">
                                <h3>Amazing Image Post</h3>
                             </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3">
                            <div className="news-thumbnail">
                            <div className="news-date">
                                <img src="img/team/Al Masum.jpg" alt="Al Masum"/>
                                    <h3>12 <br/>Feb</h3>                                    
                            </div>
                            <div className="news-caption">
                                <h3>Amazing Blog Post</h3>
                             </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="news-thumbnail">
                            <div className="news-date">
                                <img src="img/team/Al Masum.jpg" alt="Al Masum"/>
                                    <h3>12 <br/>Feb</h3>                                    
                            </div>
                            <div className="news-caption">
                                <h3>Amazing Image Post</h3>
                             </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3">
                            <div className="news-thumbnail">
                            <div className="news-date">
                                <img src="img/team/Al Masum.jpg" alt="Al Masum"/>
                                    <h3>12 <br/>Feb</h3>                                    
                            </div>
                            <div className="news-caption">
                                <h3>Amazing Blog Post</h3>
                             </div>
                            </div>
                        </div>
                        </div>  
                        <div className="row button-cont">                     
                            <button className="news-button" type="button"> + load more </button>
                        </div>
                        </div>
                    
                </div>
            </div>
        )
    }
}

export default News;