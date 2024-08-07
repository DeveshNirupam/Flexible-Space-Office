'use client'
import { useFormik } from 'formik';
import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast';

const ForgotPassword = () => {

    const emailRef = useRef(null);
    const otpRef = useRef(null);
    const [verifiedUser, setVerifiedUser] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const checkMailExists = async () => {
        const res = await fetch(`http://localhost:5000/user/getbymail/${emailRef.current.value}`);
        // console.log(res.status);
        const data = await res.json();
        // console.log(data);
        setVerifiedUser(data);
        return res.status === 200;
    }

    const sendOTP = async () => {
        if (!await checkMailExists()) {
            toast.error(`Email not registered', { variant: 'error' }`);
            return;
        }
        const res = await fetch(`http://localhost:5000/util/sendotp`, {
            method: 'POST',
            body: JSON.stringify({ email: emailRef.current.value }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(res.status);
        if (res.status === 201) {
            toast.success('OTP sent successfully', { variant: 'success' });
        } else {
            toast.success('Something went wrong', { variant: 'error' });
        }
    }

    const verifyOTP = async () => {
        const res = await fetch(`http://localhost:5000/util/verifyotp/${emailRef.current.value}/${otpRef.current.value}`);
        console.log(res.status);
        if (res.status === 200) {
            setShowForm(true);
        } else {
            toast.error('Invalid OTP', { variant: 'error' });
        }
    }

    

    const resetForm = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        onSubmit: async (values) => {
          
                const res = await fetch(`http://localhost:5000/user/update/${verifiedUser._id}`, {
                    method: 'PUT',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log(res.status);
                if (res.status === 200) {
                    toast.success('Password updated successfully', { variant: 'success' });
                } else {
                    toast.error('Something went wrong', { variant: 'error' });
                }
            
        }
    });
    return (
        
        
        <div>
            <div className=' d-flex justify-content-center ' >
                <div className='w-50 px-5'>
                    <div className="mb-3 ">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            ref={emailRef}
                        />

                    </div>
                    <div className='mb-2'>
                        <button onClick={sendOTP} type="submit" className="btn btn-primary">
                            Send OTP
                        </button>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Enter OTP
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            ref={otpRef}
                        />
                    </div>
                    <div className='mb-2'>
                        <button onClick={verifyOTP} type="submit" className="btn btn-primary">
                            Verify OTP
                        </button>
                    </div>
                    {
                        showForm && (
                            <form onSubmit={resetForm.handleSubmit}>
                                <div className="mb-2">
                                    <label htmlFor="" className='form-label'>Password</label>
                                    <input type="text" id='password' value={resetForm.values.password} onChange={resetForm.handleChange} className="form-control" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="" className='form-label'>Confirm Password</label>
                                    <input type="text" id='confirmPassword' value={resetForm.values.confirmPassword} onChange={resetForm.handleChange} className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </form>
                        )
                    }


                </div>
            </div>
        </div>
    )
}

export default ForgotPassword