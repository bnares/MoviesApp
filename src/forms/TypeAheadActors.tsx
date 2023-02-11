import { actorMovieDTO } from "../movies/actors/actors.model";
import {Typeahead} from 'react-bootstrap-typeahead'

export default function TypeAheadActors(props:typeAheadActosProps){

    const actors: actorMovieDTO[] = [{
        id: 1, name: 'Felipe', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/220px-Tom_Holland_by_Gage_Skidmore.jpg'
    },
    {
        id: 2, name: 'Fernando', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/220px-Dwayne_Johnson_2%2C_2013.jpg'
    },
    {
        id: 3, name: 'Jessica', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Meryl_Streep_December_2018.jpg/220px-Meryl_Streep_December_2018.jpg'
    }]
    
    return(
        <div className="mb-3">
            <label>{props.displayName}</label>
            <Typeahead 
                id='typeahead'
                onChange={actor=>{
                    console.log(actor);
                }}
                options={actors}
                labelKey='name'
                filterBy={['name']}
                placeholder={"Write the name of the actor"}
                minLength={1}
                dropup={true}
                

            />
        </div>
    )

}

interface typeAheadActosProps{
    displayName:string,
    actors: actorMovieDTO[],
}