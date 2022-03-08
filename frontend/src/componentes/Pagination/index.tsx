
import React from "react";
import {ReactComponent as ArrowL} from "assets/img/ArrowL.svg";
import "./style.css"
function Pagination (){

    return(<div className="dsmovie-pagination-container">
    <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={true} >
            <ArrowL />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="dsmovie-pagination-button" disabled={false} >
            <ArrowL className="dsmovie-flip-horizontal" />
        </button>
    </div>
</div>)
}
export default Pagination;








