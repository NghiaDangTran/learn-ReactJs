import React from 'react';
import Product from './Product';
import Data from './Data';
function Demo(props) {
    return (
        <div>
            {

                Data.map(s => (

                    <Product key={s.id} productname={s.productName} image={s.image} sumary={s.price}></Product>
                ))

            }

        </div>
    );
}

export default Demo;