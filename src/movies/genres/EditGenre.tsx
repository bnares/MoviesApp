import { useParams } from "react-router-dom"
import GenreForm from "./GenreForm";

export default function EditGenre(){
    const params: any = useParams();
    //console.log(`Your ID ${JSON.stringify(params)}`);
    alert("Params "+JSON.stringify(params))
    return(
        <>
        <h3>Edit Genre</h3>
        <GenreForm model={{name:'Action'}} onSubmit = {async value=>{
                    //when the form is posted
                    await new Promise(r=>setTimeout(r,2000))
                    console.log(params.id)
                    console.log(value)
                }}
            />
        </>
    )
}