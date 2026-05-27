import React from 'react'

const Navbar = () => {
    return (
        <header className="header">
            <Navlink to="/" className="w-10 h-10 rounder-lg bg-white items-center justify-center flex font-bold shawdow-md">
                <p className="blue-gradient_text">AH</p>
            </Navlink>
            <nav className="flex text -lg gap-7 font-medium">
                <Navlink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    About
                </Navlink>
                <Navlink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    Projects
                </Navlink>
                <Navlink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    Contact
                </Navlink >
            </nav>
        </header >
    )
}

export default Navbar