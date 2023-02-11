import { Link } from "react-router-dom"
import MovieTheaterForm from "./MovieTheaterForm"

export default function EditTheater(){
    return(
        <>
            <h3>Edit Movie Theater</h3>
            <MovieTheaterForm
                model={{name:''}}
                onSubmit={values=>console.log(values)}
            />
        </>
        
    )
}