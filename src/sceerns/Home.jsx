import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

    const { isLoading } = useSelector((state) => state.auth);




    if (isLoading) {
        return (
            <div className="h1 display-2 text-center text-secondary p-3">Loading...</div>
        )
    }

    return (
        <>
            <div className="h1 display-3 text-center text-secondary">Welcome to Home...</div>
        </>
    )
}

export default Home