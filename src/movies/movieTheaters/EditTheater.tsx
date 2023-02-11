import { Link } from "react-router-dom"
import MovieTheaterForm from "./MovieTheaterForm"

export default function CreateTheater(){
    return(
        <>
            <h3>Create Movie Theater</h3>
            <MovieTheaterForm
                model={{name:'Sabmil'}}
                onSubmit={values=>console.log(values)}
            />
        </>
        
    )
}