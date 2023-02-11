import React from "react"
import { useNavigate } from "react-router-dom";
import Button from "../../utils/File";
import { Formik,Form,Field, ErrorMessage } from 'formik';
import { Link } from "react-router-dom";
import * as Yup from "yup";
import TextField from "../../forms/TextField";
import GenreForm from "./GenreForm";

 

export default function CreateGenre(){
   // const navigate = useNavigate();
    return(
        <>
            <h3>Create Genre</h3>
            <GenreForm model={{name:''}} onSubmit = {async value=>{
                    //when the form is posted
                    await new Promise(r=>setTimeout(r,2000))
                    console.log(value)
                }}
            />
        </>
    )
}