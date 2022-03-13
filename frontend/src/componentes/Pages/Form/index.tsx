
import FormCard from "componentes/FormCard";
import React from "react"
import {  useParams } from "react-router-dom";




function Form() {
    const params = useParams()
    

    console.log(params)
    return (
        <FormCard movieId={`${params.movieId}`}></FormCard>
    )


}
export default Form;
