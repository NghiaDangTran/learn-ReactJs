import React from 'react';

function Image({ title, dowUrl }) {
    return (
        

            <div className='col-md-4'>

                <div className='card'>
                    {/* <h1>{title || "Chưa có tiêu đề"}</h1> */}
                    <img style={{height:"300px"}} className='card-img-top' src={dowUrl || "https://picsum.photos/id/1002/4312/2868"} alt="Card imahe cap"></img>
                    <div className='card-body'>
                        <h5 className='card-title'>{title}</h5>
                    </div>


                </div>


            </div>


     
    );
}

export default Image;