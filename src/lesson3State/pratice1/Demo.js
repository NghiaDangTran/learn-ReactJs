import React, { useState } from 'react';
import Image from './Image';
function Demo(props) {
    const [image, setImage] = useState([]);
    const getImg =async () => {
        await
        fetch("https://picsum.photos/v2/list?page=2&limit=6").then(s => s.json()).then(s => setImage(s));

        // console.log(image[0].dow);

    }


    return (
        <div>
            <button className='btn btn-success' onClick={() => getImg()} >Change pic</button>

            <div className="container">
                <div className="row">

                    
                        {image.map(s => (<Image key={s.id} title={s.author} dowUrl={s.download_url}></Image>))}

                  



                </div>
            </div>



        </div>
    );
}


// learn here call fetch to get api data
// then useStae[0]. map to get data to the screen

export default Demo;