import React, { useState } from 'react';
// import useEffect from 'react';
import Image from './Image';
function Demo(props) {
    const [image, setImage] = useState([]);
    const [count, setCount] = useState(1);
 
    const [loading, setLoading] = useState(true);
    // this use stage will load the funtion again when the count change
    // React.useEffect(() => {
    //     getImg();

    // }, [])
    // const getImg = async () => {
    //     await
    //         fetch("https://picsum.photos/v2/list?page=2&limit=6").then(s => s.json()).then(s => setImage(s));

    //     // console.log(image[0].dow);

    // }


    // const LoadImahe=()=>{

    //     fetch("https://picsum.photos/v2/list?page="+count+"&limit=6").then(s => s.json()).then(s => setImage(s));
    //     setCount(count+1);


    // }




    // React.useEffect(() => {
    //     getImg();

    // }, [count])
    // const getImg = async () => {
    //     await
    //         fetch(`https://picsum.photos/v2/list?page=${count}&limit=6`).then(s => s.json()).then(s => setImage(s));

    //     // console.log(image[0].dow);

    // }
    React.useEffect(() => {
        getImg2();
       

    }, [count])

    const getImg2 = async () => {
        setLoading(true);

        const respone = await
            fetch(`https://picsum.photos/v2/list?page=${count}&limit=6`).then(s => s.json())
        setImage([...image, ...respone]);

        setLoading(false);
        // setLoading(!loading);
    }

   

    // mutiple page 



    return (
        <div>
            {/* <button className='btn btn-success' onClick={() => getImg()} >Load image</button> */}
            <button id="loading" className='btn btn-success' onClick={() => setCount(count+1)} >Load image</button>
            {loading &&<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>}
          
            {/* <button className='btn btn-success' onClick={() => setNumpage(numpage + 1)} >Load image</button> */}

            {/* <button className='btn btn-success' onClick={() => setCount(count+1)} >set img</button> */}
            <div className="container">
                <div className="row">


                    {
                    
                   image.length>0&& !loading && image.map(s => (<Image key={s.id} title={s.author} dowUrl={s.download_url}></Image>))}





                </div>
            </div>



        </div>
    );
}


// learn here call fetch to get api data
// then useStae[0]. map to get data to the screen

export default Demo;