import { useState } from "react";
export default function Counter(){
    const [count,setCount]=useState(0);
    const [value,setValue]=useState("");
    function onTextChange(event){
        console.log("this function is called!:"+event.target.value);
        console.error("This is error");
        setValue(event.target.value);
    }
    return (<>
        <input value={value} onChange={(event)=>onTextChange(event)}/>
        <p>You typed {value.length} characters</p>
        <p>{value} baht to {value*1.07} include vat7%</p>
        <p>{value} Celcius to {value*1.8+32} Fahrenheit</p>
        <p>{value} Kilometers to {value*0.62137119} Miles</p>
        <p>{value} Yen to {value*0.22} Baht</p>

        <button onClick={()=>setCount(count-1)}>
            -
        </button>
         <button onClick={()=>setCount(0)}>
            Reset
        </button>
         <button onClick={()=>setCount(count+1)}>
           +
        </button>
        <p>You clicked {count} times
        </p>
        </>);
}