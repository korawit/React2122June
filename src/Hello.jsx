import './Hello.css';
export default function Hello({name="boo",surname="blah",weight=20}) {
    return (
        <>
            <img src="cat.jpg" width="200"/>
            <h1>Hello,{name} 
                {surname} 
                {weight} kg.
            </h1>
        </>
    );
}
