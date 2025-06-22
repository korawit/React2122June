import { useState } from "react";
function Item({name}){
    const [pack,setPack]=useState(0);
    function RandomDice(){
        let num=Math.round(Math.random()*6)+1;
        setPack(num);
    }
    if(pack%6==0) 
        return (<li onClick={RandomDice}>{name}⚀</li>);
    if(pack%6==1) 
        return (<li onClick={RandomDice}>{name}⚁</li>);
    if(pack%6==2) 
        return (<li onClick={RandomDice}>{name}⚂</li>);
    if(pack%6==3) 
        return (<li onClick={RandomDice}>{name}⚃</li>);
    if(pack%6==4) 
        return (<li onClick={RandomDice}>{name}⚄</li>);
    if(pack%6==5) 
        return (<li onClick={RandomDice}>{name}⚅</li>);
    
}
export default function Backpack() {
    const items=["Money","Sunglasses","Powerbank",
        "Towel","Shampoo","Wallet"];
    const filterList=items.filter(i=>i.includes("l"));
    return (<>
        <h1>Backpack List</h1>
            <ol>
              {filterList.map(i=><Item name={i}/>)}
            </ol>
        </>);
}