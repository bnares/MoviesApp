import { Form, Formik, FormikHelpers } from "formik";
import { movieCreationDTO } from "./movies.model";
import * as Yup from "yup";
import Button from "../utils/File";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import CheckboxField from "../forms/CheckboxField";
import MultipleSelector, { multipleSelectorModel } from "../forms/MultipleSelector";
import React from "react";
import { genereDTO } from "./genres/genres.model";
import { movieTheaterDTO } from "./movieTheaters/movieTheater.model";
import TypeAheadActors from "../forms/TypeAheadActors";

export default function MovieForm(props:movieFormProps){
    const [selectedGenres, setSelectedGenres] = React.useState(mapToModel(props.selectedGenres));
    const [nonSelectedGenres, setNonSelectedGenres] = React.useState(mapToModel(props.nonSelectedGenres));

    const [selectedMovieTheaters, setSelectedMovieTheaters] = React.useState(mapToModel(props.selectedMovieTheaters));
    const [nonSelectedMovieTheaters, setNonSelectedMovieTheaters] = React.useState(mapToModel(props.nonSelectedMovieTheaters));


    function mapToModel(items:{id:number, name:string}[]):multipleSelectorModel[]{
        return items.map(item=>{
            return {key:item.id, value:item.name}
        })
    }
    
    return(
        <Formik
            initialValues={props.model}
            onSubmit={(values,actions)=>{
                values.genresIds = selectedGenres.map((item,idx)=>item.key)
                values.movieTheatersIds = selectedMovieTheaters.map(item=>item.key)
                props.onSubmit(values,actions)
            }}
            validationSchema = {Yup.object({
                title:Yup.string().required("This Firld is Required").firstLetterUpperCase(),


            })}
        >
            {
                (formikProps)=>(
                    <Form>
                        <TextField displayName="Title" fieldName="title"/>
                        <CheckboxField displayName="Title" field="nTheaters" />
                        <TextField displayName="Trailer" fieldName="trailer" />
                        <DateField displayName="Release Date" field="releaseDate"/>
                        <ImageField displayName="POster" field="poster" imagrUrl={props.model.posterURL} />

                        <MultipleSelector 
                            displayName="Genres"
                            nonSelected={nonSelectedGenres}
                            selected={selectedGenres}
                            onChange = {(selected,nonSelected)=>{
                                setSelectedGenres(selected);
                                setNonSelectedGenres(nonSelected);
                            }}
                        />

                        <MultipleSelector 
                            displayName="Movie THeaters"
                            nonSelected={nonSelectedMovieTheaters}
                            selected={selectedMovieTheaters}
                            onChange = {(selected,nonSelected)=>{
                                setSelectedMovieTheaters(selected);
                                setNonSelectedMovieTheaters(nonSelected);
                            }}
                        />
                        <TypeAheadActors 
                            displayName="Actors"
                            actors={[]}
                        />
                        <Button disabled={formikProps.isSubmitting} type="submit">SAVE</Button>
                        <Link className="btn btn-secondary" to="/genres">
                            CANCEL
                        </Link>
                        
                    </Form>
                )
            }
        </Formik>
    )
}

interface movieFormProps{
    model:movieCreationDTO,
    onSubmit(values:movieCreationDTO, actions:FormikHelpers<movieCreationDTO>):void,
    selectedGenres:genereDTO[],
    nonSelectedGenres:genereDTO[],
    selectedMovieTheaters:movieTheaterDTO[],
    nonSelectedMovieTheaters: movieTheaterDTO[],

}