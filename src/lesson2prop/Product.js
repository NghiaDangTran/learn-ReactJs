import React from 'react';

function Product({productname,image,sumary}) {
    return (
        <div>
            <h1>{productname}</h1>
            <img src={image} alt=""></img>
            <p>{sumary}</p>
            
        </div>
    );
}

export default Product;