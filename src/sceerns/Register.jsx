import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userRegister } from '../feature/auth/authSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const { user } = useSelector((state) => state.auth);
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    const { name, email, password, password2 } = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === password2) {
            dispatch(userRegister(formData))
        } else {
            toast.error("Something went wrong")
        }
    }

    useEffect(() => {
        if (user) {
            Navigate("/")
        }
    }, [user])

    
    return (
        <>
            <div className="conatiner p-4 border border-primary w-75  ">
                <div className="h4 text-black">Create a New Account</div>
                <form className='my-4' onSubmit={handleSubmit}>
                    <input type="text" name="name" value={name} className='form-control border border-warning my-2' placeholder='Enter Name' onChange={handleChange} />
                    <input type="email" name="email" value={email} className='form-control border border-warning my-2' placeholder='Email' onChange={handleChange} />
                    <input type="password" name="password" value={password} className='form-control border border-warning my-2' placeholder='Password' onChange={handleChange} />
                    <input type="password" name="password2" value={password2} className='form-control border border-warning my-2' placeholder='Confirm Password' onChange={handleChange} />
                    <div className="form-check my-2">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" >
                            Remember me
                        </label>
                    </div>
                    <button className='btn btn-primary w-100'>Register</button>
                </form>
            </div>
        </>
    )
}

export default Register