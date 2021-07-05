import React from 'react';
import './AdminNavBar.css';
import { Link } from "react-router-dom";

class AdminNavbar extends React.Component{
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
                    <a class="nav-link" href="/Admin"><i class="fas fa-home"></i>Admin</a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" href="/reviewer"><i class="far fa-calendar-alt"></i>Reviewer</a>
                </li>


                <li class="nav-item">
                {/* <Link to="/editor/editorHomePage">Editor
                  
                </Link> */}
                  <a class="nav-link" href="/editor"><i class="far fa-calendar-alt"></i>Editor</a>
                </li>
               

               
                
            </ul>
        </div>
    </nav>
            </div>
        )
    }
}

export default AdminNavbar