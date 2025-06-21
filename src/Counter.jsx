import { useState } from "react";
export default function Counter(){
    const [count,setCount]=useState(0);
    return (<>
        <button onClick={()=>setCount(count+1)}>
            Click me
        </button>
        <p>You clicked {count} times
        </p>
        </>);
}