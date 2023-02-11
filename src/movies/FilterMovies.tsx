import { Formik,Form, Field } from "formik"
import Button from "../utils/File"
import { genereDTO } from "./genres/genres.model"

export default function FilterMOvies(){

    const initialValues:filterMoviesForm={
        title:'',
        genreId:0,
        upcomingRelase:false,
        inTheaters:false,
    }

    const genres:genereDTO[] = [
        {id:1, name:"Drama"},
        {id:2,name:"Comedy"}
    ]

    return(
        <>
            <h3>Filter Movies</h3>
            <Formik initialValues={initialValues}
                onSubmit = {values=>console.log(values)}
            >
                {(formikProps)=>(
                    <Form>
                        <div className="row gx-3 align-items-center">
                            <div className="col-auto">
                                <input type='text' className="form-control" id="title"
                                        placeholder="Title of The Movie"
                                        {...formikProps.getFieldProps('title')}
                                />
                            </div>
                            <div className="col-auto">
                                <select className="form-select"
                                    {...formikProps.getFieldProps('genreId')}                                
                                >
                                    <option value='0'>--Chose a genre</option>
                                    {genres.map((item)=><option key={item.id} value={item.id}>{item.name}</option>)}
                                </select>
                            </div>
                            <div className="col-auto">
                                <div className="form-check">
                                    <Field className='form-check-input'
                                           id='upcomingRelase'
                                           name='upcomingRelase'
                                           type='checkbox'
                                    />
                                    <label className="form-check-label" htmlFor="upcomingRelase">Upcomin Relase</label>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="form-check">
                                    <Field className='form-check-input'
                                           id='inTheaters'
                                           name='inTheaters'
                                           type='checkbox'
                                    />
                                    <label className="form-check-label" htmlFor="inTheaters">In Theaters</label>
                                </div>
                            </div>
                            <div className="col-auto">
                                <Button className='btn btn-primary' 
                                        onClickFunction={()=>formikProps.submitForm()}
                                >
                                    Filter
                                </Button>
                                <Button className='btn btn-danger ms-3' 
                                        onClickFunction={()=>formikProps.setValues(initialValues)}
                                >
                                    Clear
                                </Button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
        
    )
}

interface filterMoviesForm{
    title:string,
    genreId:number,
    upcomingRelase:boolean,
    inTheaters:boolean
}