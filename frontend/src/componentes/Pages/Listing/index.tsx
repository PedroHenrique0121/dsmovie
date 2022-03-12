
import axios from "axios";
import MovieCard from "componentes/MovieCard";

import Pagination from "componentes/Pagination";
import React, { useState, useEffect } from "react"
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing() {


    const [pageNumber, setPageNumber] = useState(0);
    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    }
    )

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`)
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data)

            })


    }, [pageNumber])





    return (
        <>

            <Pagination></Pagination>
            <div className="container">

                <div className="row">

                    {page.content.map(movie => 
                        (
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard key={movie.id} movie={movie}></MovieCard>

                        </div>

                        )
                    )
                    }


                </div>

            </div>
        </>

    )


}
export default Listing;
