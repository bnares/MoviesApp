import { movieDTO } from "./movies.model";
import css from "./individualMovie.module.css";

export default function IndividualMovie(props:movieDTO){

    const buildLink = ()=> `/movie/${props.id}`
    return(
        <div className={css.div}>
            <a href={buildLink()}>
                <img alt="Poster" src={props.poster} />
            </a>
            <p>
               <a href={buildLink()}>{props.tittle}</a>
            </p>
        </div>
    )
}