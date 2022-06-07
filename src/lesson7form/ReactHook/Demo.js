import React from 'react';
import { useForm } from 'react-hook-form'

function Demo(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (values) => {
        console.log(values)
    }
    return (
        <div className='container' >
            <div className='row' >
                <div className='col-md-4' style={{ marginTop: '30px' }}>
                    <form onSubmit={handleSubmit(onSubmit)}  >
                        <div className="form-group">
                            <label >Họ tên</label>
                            <input
                                type="text"
                                className="form-control"
                                name="fullName"
                                placeholder="Họ và tên"
                                {...register('fullName', { required: true
                                ,maxLength:10
                                ,minLength:5 })}

                            />
                            {errors.fullName && errors.fullName.type==="required" &&<small >Họ và tên không được để trống</small>}
                            {errors.fullName && errors.fullName.type==="maxLength" &&<small >Họ và tên phải có ít nhất 10 ký tự</small>}
                            {errors.fullName && errors.fullName.type==="minLength" &&<small >Họ và tên phải có ít nhất 5 ký tự</small>}

                        </div>

                        <div className="form-group">
                            <label >Tuổi</label>
                            <input
                                type="number"
                                className="form-control"
                                name="age"
                                placeholder="Tuổi"
                                {...register('age')}
                            />

                            <small className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <label >Địa chỉ</label>
                            <input
                                type="text"
                                className="form-control"
                                name="address"
                                placeholder="Địa chỉ"
                                {...register('address')}

                            />
                            <small className="form-text text-muted"></small>
                        </div>
                        <button className='btn btn-success'>Tạo mới</button>


                    </form>
                </div>
            </div>
        </div>
    );
}

export default Demo;