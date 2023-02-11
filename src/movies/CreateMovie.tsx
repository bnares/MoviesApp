import { Link } from "react-router-dom"
import MovieForm from "./MovieForm"
import { genereDTO } from "./genres/genres.model"
import { movieTheaterCreationDTO, movieTheaterDTO } from "./movieTheaters/movieTheater.model"

export default function CreateMovie(){

    const nonSelectedGenres: genereDTO[]=[{id:1, name:'Comedy'},{id:2, name:'Drama'}]
    const nonSelectedMovieTheaters: movieTheaterDTO[]=[{id:1,name:'Sambil'},{id:2,name:'Agora'}]

    return(
        <>
            <h3>Create Movie</h3>
            <MovieForm model={{title:'', inTheaters:false, trailer:''}}
                       onSubmit = {values=>console.log(values)}
                       nonSelectedGenres={nonSelectedGenres}
                       selectedGenres = {[]}
                       nonSelectedMovieTheaters={nonSelectedMovieTheaters}
                       selectedMovieTheaters={[]}
            />
        </>
        
    )
}