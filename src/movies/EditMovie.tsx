import { Link } from "react-router-dom"
import { genereDTO } from "./genres/genres.model"
import MovieForm from "./MovieForm"
import { movieTheaterDTO } from "./movieTheaters/movieTheater.model"

export default function EditMovie(){
    const nonSelectedGenres: genereDTO[]=[{id:2, name:'Drama'}]
    const selectedGenres: genereDTO[]=[{id:1, name:'Comedy'}]
    const nonSelectedMovieTheaters: movieTheaterDTO[]=[{id:1,name:'Sambil'}]
    const selectedMovieTheaters: movieTheaterDTO[]=[{id:2, name:'Agora'}]
    
    return(
        <>
            <h3>Edit Movie</h3>
            <MovieForm model={{title:'Toy Story', inTheaters:true, trailer:'url', releaseDate:new Date('2023-02-10T00:00:00')}}
                       
                       onSubmit = {values=>console.log(values)}
                       nonSelectedGenres={nonSelectedGenres}
                       selectedGenres={selectedGenres}
                       selectedMovieTheaters={selectedMovieTheaters}
                       nonSelectedMovieTheaters={nonSelectedMovieTheaters}
            />
        </>
        
    )
}