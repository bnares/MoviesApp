import { Formik,Form,Field, ErrorMessage } from 'formik';
import { Link } from "react-router-dom";
import * as Yup from "yup";

export default function TextField(props:textFieldProps){
    return(
        <div className="mb-3">
            <label htmlFor={props.fieldName}>{props.displayName}</label>
            <Field 
                name={props.fieldName}
                className="form-control"
                id = {props.fieldName}
            />
            <ErrorMessage  name={props.fieldName}>
                {msg=><div className="text-danger">{msg}</div>}
            </ErrorMessage>
        </div>
    )
}

interface textFieldProps{
    fieldName:string,
    displayName:string,
    
}