import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { BsGlobe } from 'react-icons/bs'

const Navbar = ({ theme, setTheme}) => {
    
    return (
        <nav className={theme ? "bg-dark-element navbar navbar-expand shadow-sm p-4" : "bg-white navbar navbar-expand shadow-sm p-4"}>
            <div className="container-fluid">
                <span className="navbar-brand    "style={{fontWeight:900}}><BsGlobe className='mb-1 '/> WORLD</span>
                <p className='fw-bold mb-0 text-nowrap' style={{cursor: 'pointer'}} onClick={() => setTheme(!theme)}>
                    {theme ? <FaSun className='me-2' /> : <FaMoon className='me-2' /> }
                    {theme ? "Light Theme" : "Dark Theme" }</p>
            </div>
        </nav>
    )
}

export default Navbar