import { Link } from "react-router-dom"

export default function IndexTheaters(){
    return(
        <>
            <h3>Movie Theaters</h3>
            <Link className="btn btn-primary" to="/movieTheaters/create">Create Movie Theater</Link>
            <Link className="btn btn-primary" to="/movieTheaters/edit">Edit MOvie Theater</Link>
        </>
        
    )
}