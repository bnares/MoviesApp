import { Link } from "react-router-dom"

export default function IndexGenres(){
    return(
        <>
            <h3>Genres</h3>
            <Link className="btn btn-primary" to="/genres/create">Create genre</Link>
            {/* <Link className="btn btn-primary" to="/genres/edit/23">Edit genre</Link> */}
        </>
        
    )
}