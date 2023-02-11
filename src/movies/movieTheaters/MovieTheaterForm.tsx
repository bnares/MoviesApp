import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../../forms/TextField";
import Button from "../../utils/File";
import { movieTheaterCreationDTO } from "./movieTheater.model";
import * as Yup from "yup";
import Map from "../../utils/Map";
import MapField from "../../forms/MapField";
import { transform } from "typescript";
import { coordinateDTO } from "../../utils/coordinateDTO.model";

export default function MovieTheaterForm(props:movieTheaterForm){
    function transformCoordinates(): coordinateDTO[] | undefined{
        if(props.model.latitute && props.model.longitute){
            const respone: coordinateDTO= {
                lat:props.model.latitute,
                lng: props.model.longitute
            }
            return [respone];
        }
        return undefined;
    }
    return(
        <Formik
            initialValues={props.model}
            onSubmit = {props.onSubmit}
            validationSchema={Yup.object({
                name:Yup.string().required("This Field is required").firstLetterUpperCase()
            })}
        >
            {(formikProps)=>(
                <Form>
                    <TextField displayName="Name" fieldName="name"/>
                    <div style={{marginBottom:'1rem'}}>
                        <MapField  latField="latitude"  lngField="longitude"
                            coordinates={ transformCoordinates()}
                        />
                    </div>
                    <Button disabled={formikProps.isSubmitting} type='submit'>
                        Save Changes
                    </Button>
                    <Link className="btn btn-secondary" to='/movieTheaters'>Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

interface movieTheaterForm{
    model:movieTheaterCreationDTO,
    onSubmit(values:movieTheaterCreationDTO, actions:FormikHelpers<movieTheaterCreationDTO>):void
}