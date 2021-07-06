import React from 'react';
import './navBar.css';
import { Link } from "react-router-dom";

class DefaultAdminNavbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-custom navbar-mainbg" fixed="top">
        <a class="navbar-brand navbar-logo" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-white"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
                <li class="nav-item">
                    <a class="nav-link" href="/View Activities"><i class="fas fa-home"></i>View Activities</a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" href="/acceptDeclineChanges"><i class="far fa-calendar-alt"></i>Accept/Decline Changes</a>
                </li>
                
            </ul>
        </div>
    </nav>
            </div>
        )
    }
}

export default DefaultAdminNavbar