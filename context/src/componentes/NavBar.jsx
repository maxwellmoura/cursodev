import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

const Navbar = () => {
    return (
        <div>
            <h1>Context</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/About">About</NavLink>
                <NavLink to='/Conteudo'>Conteudo</NavLink>
            </nav>
        </div>
    )
}

export default Navbar