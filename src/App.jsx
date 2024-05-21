import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Home from './sceerns/Home';
import PageNotFound from './sceerns/PageNotFound';
import Login from './sceerns/Login';
import Register from './sceerns/Register';

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="conatainer p-4 d-flex justify-content-center">
                <Routes>
                    <Route path='*' element={<PageNotFound />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={< Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
                <ToastContainer />
            </div>
        </Router>

    )
}

export default App