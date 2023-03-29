import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const MainLayout = ({ children }) => {
    return (
        <div className='wrapper'>
            <NavBar />
            <div className='content'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout