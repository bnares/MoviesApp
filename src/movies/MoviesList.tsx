import { ExpandLessSharp } from "@material-ui/icons";
import GenericList from "../utils/GenericList";
import Loading from "../utils/Loading";
import IndividualMovie from "./IndividualMovies";
import { movieDTO } from "./movies.model";
import css from "./moviesList.module.css";

export default function MoviesList(props:moviesListProps){

        return <GenericList 
                list={props.movies}
                
                >
                    <div className={css.div}>
                        {props.movies?.map((movie,idx)=>(
                            <IndividualMovie  {...movie} key={movie.id}/>
                        ))}
                    </div>
        </GenericList>
}

interface moviesListProps{
    movies?:movieDTO[],
}