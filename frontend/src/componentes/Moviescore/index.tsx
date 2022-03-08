

import MovieStar from "componentes/MovieStars";
import React from "react";

// import {ReactComponent as StarFull} from "assets/img/StarFull.svg"
// import {ReactComponent as StarHalf} from "assets/img/StarHalf.svg"
// import {ReactComponent as StarEmpty} from "assets/img/StarEmpty.svg"

import "./style.css"
function MovieScore() {
     const score = 3.5
     const count = 13
    return (

        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStar />
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>)

}

export default MovieScore