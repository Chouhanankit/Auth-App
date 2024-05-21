import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar bg-primary">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand mb-0 h1 text-warning fw-bold fs-3">Navbar</Link>
                <span>
                    <Link to={"/login"} className='btn btn-sm btn-warning mx-1'>Login</Link>
                    <Link to={"/register"} className='btn btn-sm btn-success mx-1'>Register</Link>
                    <button className='btn btn-sm btn-danger mx-1'>LogOut</button>
                </span>
            </div>
        </nav>
    )
}

export default Navbar