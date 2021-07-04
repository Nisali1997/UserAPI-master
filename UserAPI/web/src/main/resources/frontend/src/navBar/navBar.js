import React from 'react';
import './navBar.css'

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
             <div>

<nav class="navbar navbar-expand-custom navbar-mainbg" fixed="top">
        <a class="navbar-brand navbar-logo" href="#">RNUN</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-white"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
                <li class="nav-item">
                    <a class="nav-link" href="/home"><i class="fas fa-home"></i>Home</a>
                </li>
                {/* <li class="nav-item active">
                    <a className="nav-link" href="/reg-type"><i class="far fa-user-plus"></i>Registration</a>
                </li> */}
                <li class="nav-item">
                    <a className="nav-link" href="/reg-type"><i class="fas fa-user-plus"></i>Registration</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/callForPapers"><i class="far fa-calendar-alt"></i>Call For Papers</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contactus"><i class="far fa-chart-bar"></i>Contact Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/login"><i class="fas fa-sign-in-alt"></i>Login</a>
                </li>

               
                
            </ul>
        </div>
    </nav>
                 {/* <nav className="navbar navbar-expand-lg navbar navbar-light  " >
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">RNUN</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                      
                      <a className="nav-link" href="/home">Home</a>
                      <a className="nav-link" href="/reg-type">Registration</a>
                      <a className="nav-link" href="/login">Login</a>
                      <a className="nav-link" href="/callForPapers">Call For Papers</a>
                      <a className="nav-link" href="#"></a>
                      
                    </div>
                  </div>
                </div>
</nav> */}
             </div>
        );
    }
}

export default Navbar;