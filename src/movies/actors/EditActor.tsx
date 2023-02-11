import { Link } from "react-router-dom"
import ActorForm from "./ActorForm"

export default function EditActor(){
    return(
        <>
            <h3>Edit Actor</h3>
            <ActorForm 
                model={{name:'Tom Holland',
                dateOfBirth:new Date('1996-06-01T00:00:00'),
                pictureURl:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Arnold_Schwarzenegger_-_2019_%2833730956438%29_%28cropped%29.jpg/228px-Arnold_Schwarzenegger_-_2019_%2833730956438%29_%28cropped%29.jpg'
            }}
                onSubmit = {values=>console.log(values)}
            />
        </>
        
    )
}