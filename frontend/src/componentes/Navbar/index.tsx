 import React from "react"
import {ReactComponent as GithubIcon} from "assets/img/github.svg";

import "./style.css";
function  NavBar(){

    return(
        <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>DSMovie</h1>
                <a href="https://github.com/devsuperior" >
                    <div className="dsmovie-contact-container">
                        <GithubIcon />
                        <p link="https://github.com/PedroHenrique0121/dsmovie" className="dsmovie-contact-link">/PedroHenrique0121</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    );
}

export default NavBar;
