import React,{useState} from 'react';

function Demo(props) {
   
    const [color, setColor] = useState(false);
   
    return (
        <div>
            <p style={{backgroundColor: color? "red" : ""}}>Helo world</p>

            <button onClick={()=>setColor(!color)}>Click me</button>
            
        </div>
    );
}

export default Demo;