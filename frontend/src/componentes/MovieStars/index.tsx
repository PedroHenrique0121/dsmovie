
import React from "react";
import {ReactComponent as StarFull} from "assets/img/StarFull.svg"
import {ReactComponent as StarHalf} from "assets/img/StarHalf.svg"
import {ReactComponent as StarEmpty} from "assets/img/StarEmpty.svg"

import "./style.css"
function MovieStar() {

    return(
    
    <div className="dsmovie-stars-container">
        <StarFull />
        <StarFull />
        <StarFull />
        <StarHalf />
        <StarEmpty />
    </div>)

}

export default MovieStar