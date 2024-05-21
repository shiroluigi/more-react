import { useState } from "react"

function onChangeFunction()
{
    const [text, setText] = useState();
    const [ status , setStatusChange] = useState("Unchanged")
    const [cn , cns] = useState(1);

    const handleNameChange = (e) =>
        {
            if(e.target.value.length < 30)
                setText(e.target.value)
        }
    const statusChange = (e) =>
        {
            cns(cn + 1);
            setStatusChange("Changed" + " " + cn + " Times")
        }
    return(
        <div className="w-50 mx-auto p-5 text-center ">
            <div className="border-bottom">
            <input value={text} onChange={handleNameChange} placeholder="Enter text" className="lead text-muted text-center"/>
            <br />
            <span className="lead text-center">Text:</span>
            <p className="lead text-center">{text}</p>
            </div>
            <br />
            <span className="lead">Try selecting some values&nbsp;&nbsp;</span>
            <select onChange={statusChange}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
            <p className="text-muted">Status: {status}</p>
        </div>
    )
}

export default onChangeFunction