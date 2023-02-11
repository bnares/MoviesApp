import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../../forms/TextField";
import Button from "../../utils/File";
import * as Yup from 'yup';
import DateField from "../../forms/DateField";
import ImageField from "../../forms/ImageField";
import MarkdownField from "../../forms/MarkdownField";

export default function ActorForm(props:actorFormProps){
    return(
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name:Yup.string().required('This field is required').firstLetterUpperCase(),
                dateOfBirth:Yup.date().nullable().required()
            })}

        >
            {(formikProps)=>(
                <Form>
                    <TextField 
                        displayName="Name"
                        fieldName="name"
                    />
                    <DateField displayName="Date Of Birth" field="dateOfBirth"/>
                    <ImageField displayName="Picture" field="picture" imagrUrl={props.model.pictureURl!}/>
                    <MarkdownField displayName="Biograpgy" field="Biography"/>
                    <Button 
                        disabled={formikProps.isSubmitting}
                        type='submit'
                    >
                        Save Changes
                    </Button>
                    <Link to={"/actors"} className='btn btn-secondary'>Cancel</Link>
                </Form>
            )}

        </Formik>
    )
}

interface actorFormProps{
    model:actorCreationDTO,
    onSubmit(values:actorCreationDTO, action:FormikHelpers<actorCreationDTO>): void
    //action is param which we do not use but it has to be present here as it is not going to work but in submit prop we do not add this param

}