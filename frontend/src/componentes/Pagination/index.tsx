
import React from "react";
import {ReactComponent as ArrowL} from "assets/img/ArrowL.svg";
import "./style.css"
import { MoviePage } from "types/movie";


type Props ={
    page : MoviePage;
    onChange: Function
}


function Pagination ({page,onChange}: Props){

    return(<div className="dsmovie-pagination-container">
    <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" onClick={()=>{onChange(page.number -1)}} disabled={page.first} >
            <ArrowL />
        </button>
        <p>{`${page.number +1} de ${page.totalPages}`}</p>
        <button className="dsmovie-pagination-button" onClick={()=>{onChange(page.number +1)}}  disabled={page.last} >
            <ArrowL className="dsmovie-flip-horizontal" />
        </button>
    </div>
</div>)
}
export default Pagination;








