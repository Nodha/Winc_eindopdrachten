import React from "react"
import { NavLink } from "react-router-dom"

//navlink dependicie gebruiken

function Navbar() {
    return(
        <nav>
            <h1>Playlist Maker!</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="About.js">About</NavLink>
        </nav>
    )
}

export default Navbar