import React from "react"
import { useNavigate } from "react-router-dom";
import Button from "../../utils/File";
import { Formik,Form,Field, ErrorMessage, FormikHelpers } from 'formik';
import { Link } from "react-router-dom";
import * as Yup from "yup";
import TextField from "../../forms/TextField";
import { genreCreationDTO } from "./genres.model";

export default function GenreForm(props:genreFormProps){
    return(
            <Formik 
                initialValues={props.model} 
                onSubmit={ props.onSubmit}
                validationSchema={Yup.object({
                    name:Yup.string().required("This Field is required").firstLetterUpperCase(),
                })}
            >
                {(formikProps)=>(
                    <Form>
                        <TextField fieldName="name" displayName="Name" />
                        <Button disabled={formikProps.isSubmitting} type="submit">SAVE</Button>
                        <Link className="btn btn-secondary" to="/genres">
                            CANCEL
                        </Link>
                    </Form>
                )}
                
            </Formik>
    )
}

interface genreFormProps{
    model: genreCreationDTO,
    onSubmit(values:genreCreationDTO, action:FormikHelpers<genreCreationDTO>):void 
    //action is param which we do not use but it has to be present here as it is not going to work but in submit prop we do not add this param
    
}