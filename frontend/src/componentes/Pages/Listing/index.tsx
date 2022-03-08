
import MovieCard from "componentes/MovieCard";
import MovieScore from "componentes/Moviescore";
import MovieStar from "componentes/MovieStars";
import Pagination from "componentes/Pagination";
import React from "react"
function Listing() {

    return (
        <>
            <Pagination></Pagination>
            <div className="container">


                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard></MovieCard>

                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard></MovieCard>

                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard></MovieCard>

                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3  mb-3">
                        <MovieCard></MovieCard>

                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3  mb-3">
                        <MovieCard></MovieCard>

                    </div>

                   
                </div>

            </div>
        </>

    )


}
export default Listing;
