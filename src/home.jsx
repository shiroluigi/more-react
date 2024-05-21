import { Link } from "react-router-dom"
function home()
{
    return(
        <>
            <h3 className="text-center">React Concepts Covered</h3>
            <hr></hr>
            <div className="list-group text-center">
                <Link className="list-group-item list-group-item-action w-50 mx-auto" to="/conditional-rendering">Conditional Rendering</Link>
                <Link className="list-group-item list-group-item-action w-50 mx-auto" to="/render-lists" >Render Lists</Link>
                <Link className="list-group-item list-group-item-action w-50 mx-auto" to="/useStateHook" >useState</Link>
                <Link className="list-group-item list-group-item-action w-50 mx-auto" to="/eventHandling" >eventHandling using onChange</Link>
            </div>
            
        </>
    )
}

export default home