import React, { useState } from 'react';

function Demo(props) {
    const [val, setVal] = useState(
        {
            userName: ""
            , password: ""
            , save: false
        }
    );
    const [submit, setSubmit] = useState({
        userName: false ,
        password: false
        
    });
    let a = { data: "213", password: "213" }
    console.log(a["data"]);
    const handleInputChange = (e) => {
        setVal({
            ...val,
            // [e.target.id]: e.target.value,
            // userName :e.target.id==="userName"?e.target.value:"",
            // password:e.target.id==="password"?e.target.value:""

            [e.target.id]: e.target.type === "checkbox" ? e.target.checked : e.target.value,

            // if (e.target.id === "userName") {


            // imagin let a=[data:"",password:""]
            // a[e.target.id]=e.target.value;
            // 
            // 
            // userName:  checkRioght(e)
            // if e is save then save=true then save all the data to 
            // localStorage.setItem("userName", e.target.value);
            // localStorage.setItem("password", e.target.value);

        });
    }
    const checked = (e) => {
        localStorage.setItem("userName", val.userName);
        localStorage.setItem("password", val.password);
    }
    const handleInputChange2 = (e) => {
        setVal({
            password: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);


    }
    return (

        <div className="container">
            <div className='row'>
                <div className="col-md-12" style={{ margintop: '30px' }}>
                    <form action="
                    ">
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Example select</label>
                            <input onInput={(e) => handleInputChange(e)

                            } type="text" className='form-control' name=""
                                placeholder='nhap username' id="userName" />

                            <input onInput={(e) => handleInputChange(e)

                            } id="password" type="text" className='form-control' name=""
                                placeholder='nhap password' />

                            <input id="save" type="checkbox" onInput={(e) => handleInputChange(e)} className='form-control'
                                placeholder='nhap password' />
                            <small class form-text text-muted></small>
                            <button type="button" class="btn btn-primary" id='submit'>Log in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );

}

export default Demo;