import Reac from 'react';
import useHandleInput from './useHandleInput';
function Demo1(props) {

    const { val, handleInputChange } = useHandleInput({});
    console.log(val);

    return (

        <div className="container">
            <div className='row'>
                <div className="col-md-12" style={{ margintop: '30px' }}>
                    <form action="
                    ">
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Example select</label>
                            <input onInput={handleInputChange

                            } type="text" className='form-control' name=""
                                placeholder='nhap username' id="userName" />

                            <input onInput={handleInputChange

                            } id="password" type="text" className='form-control' name=""
                                placeholder='nhap password' />

                            <input id="save" type="checkbox" onInput={handleInputChange} className='form-control'
                                placeholder='nhap password' />
                            <small class form-text text-muted></small>

                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Demo1;