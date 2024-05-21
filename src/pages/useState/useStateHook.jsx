import { useState } from "react"

function useStateHook() {
    const [value, setValue] = useState(0);
    const incrementValue = () => {
        setValue(value + 1);
    }
    const decrementValue = () => {
        setValue(value - 1);
    }
    const resetValue = () => {
        setValue(0);
    }
    return (
        <>
            <div className="w-50 mx-auto text-center">
                <p className="">{value}</p>
                <button onClick={decrementValue} className="border rounded ml-1 pl-1 pr-1">Decrement value</button>
                <button onClick={resetValue} className="border rounded ml-1 pl-1 pr-1">Reset value</button>
                <button onClick={incrementValue} className="border rounded ml-1 pl-1 pr-1">Increment value</button>
            </div>
        </>
    );
}

export default useStateHook