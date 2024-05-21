import React from 'react'

const Login = () => {
    return (
        <>
            <div className="conatiner p-4 border border-danger w-75  ">
                <div className="h4 text-black">Please sign in</div>
                <form className='my-4'>
                    <input type="text" className='form-control border border-primary my-2' placeholder='Email' />
                    <input type="text" className='form-control border border-primary my-2' placeholder='Password' />
                    <div className="form-check my-2">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" >
                            Remember me
                        </label>
                    </div>
                    <button className='btn btn-primary w-100'>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login