import React from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
function Demo1(props) {
    const sotuo="phai fill ham nay"
    const schema = yup.object({
        fullName: yup.string().required(sotuo).max(10).min(5),
    })
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (values) => {
        console.log(values)
    }
    return (
        <div className='container' >
            <div className='row' >
                <div className='col-md-4' style={{ marginTop: '30px' }}>
                    <form onChange={handleSubmit(onSubmit)}  >
                        <div className="form-group">
                            <label >Họ tên</label>
                            <input
                                type="text"
                                className="form-control"
                                name="fullName"
                                placeholder="Họ và tên"
                                {...register('fullName')}

                            />
                            
                            <small className="form-text text-muted">{errors.fullName?.message}</small>

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

export default Demo1;