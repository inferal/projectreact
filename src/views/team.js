import React, { Component } from 'react';

import './../css/team.css';

class Team extends Component{
    render(){
        return(
            <div>
                <div className="row team">
                    <div className="container">
                        <h1 className="team_text">Meet Our Team</h1>
                        <hr/><hr className="hr2"/>
                        <div className="row team-item">
                        <div className="col-sm-6 col-md-3">
                            <div className="thumbnail">
                            <img src="img/team/Al Masum.jpg" alt="Al Masum" width="266" height="228"/>
                            <div className="caption team-caption">
                                <h3>Al Masum</h3>
                                <p>Founder</p>
                             </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="thumbnail">
                            <img src="img/team/Mis Liza.jpg" alt="Mis Liza" />
                            <div className="caption team-caption">
                                <h3>Mis Liza</h3>
                                <p>UX Designer</p>                         
                            </div>                            
                            </div>
                                
                                
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="thumbnail">
                            <img src="img/team/Hasan Mahmud.jpg" alt="Hasan Mahmud" />
                            <div className="caption team-caption">
                                <h3>Hasan Mahmud</h3>
                                <p>Web Designer</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="thumbnail">
                            <img src="img/team/Afifa Jannat.jpg" alt="Afifa Jannat" width="266" height="228"/>
                            <div className="caption team-caption">
                                <h3>Afifa Jannat</h3>
                                <p>Web Designer</p>
                            </div>
                            </div>
                        </div>
                        
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Team;