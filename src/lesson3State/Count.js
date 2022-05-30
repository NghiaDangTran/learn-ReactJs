import React,{useState} from 'react';

function Count(props) {
    // const a= useState(0);
    // console.log("daay la state"+a);
    const [count,setCount]=useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Tang</button>
            <button onClick={()=>setCount(count-1)}>Giam</button>
        </div>
    );
}

export default Count;