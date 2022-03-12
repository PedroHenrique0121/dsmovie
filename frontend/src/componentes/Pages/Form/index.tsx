
import FormCard from "componentes/FormCard";
import React from "react"
import { Link, useLocation, useParams } from "react-router-dom";
import { Movie } from "types/movie";


type Props = {
    movie: Movie;
}
function Form() {
    const params = useParams()
    const paramsL = useLocation()

    console.log(params)
    return (
        <FormCard movieId={`${params.movieId}`}></FormCard>
    )


}
export default Form;
